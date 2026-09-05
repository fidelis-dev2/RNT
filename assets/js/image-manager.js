(function(global){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const isAbsolute=v=>/^(https?:|data:|blob:)/i.test(v||'');
  function resolveImage(dbValue,fallback,base){
    const v=String(dbValue||'').trim();
    if(!v) return fallback||'';
    if(isAbsolute(v)) return v;
    const b=base===undefined?'':base;
    return b+v.replace(/^\/+/, '');
  }
  function setDbImage(el,dbValue,fallback,base){
    if(!el) return;
    const fb=fallback||el.dataset.fallback||'';
    const src=resolveImage(dbValue||el.dataset.dbImage,fb,base===undefined?(el.dataset.dbBase||''):base);
    if(el.tagName==='IMG'){
      el.src=src||fb;
      if(fb) el.onerror=()=>{el.onerror=null;el.src=fb;};
    }else{
      el.style.backgroundImage=`url("${src||fb}")`;
    }
  }
  function hydrateDbImages(root=document){
    $$('[data-db-image]',root).forEach(el=>setDbImage(el,el.dataset.dbImage,el.dataset.fallback,el.dataset.dbBase));
  }
  const editors=new WeakMap();
  let active=null,cropper=null,originalData='';
  function ensureModal(){
    let m=$('#rntCropModal'); if(m) return m;
    m=document.createElement('div');m.id='rntCropModal';m.className='rnt-form-modal hide';
    m.innerHTML=`<div class="rnt-form-modal-card cropper-modal-card"><div class="modal-head"><div><h3>Edit image before upload</h3><p class="crop-help">Crop freely, zoom, rotate, flip, or use the complete original image.</p></div><button class="modal-close" type="button" data-crop-close><i class="fa-solid fa-xmark"></i></button></div><div class="crop-stage"><img id="rntCropImage" alt="Image editing preview"></div><div class="crop-toolbar"><button class="btn-outline" type="button" data-crop-action="zoomIn" title="Zoom in"><i class="fa-solid fa-magnifying-glass-plus"></i></button><button class="btn-outline" type="button" data-crop-action="zoomOut" title="Zoom out"><i class="fa-solid fa-magnifying-glass-minus"></i></button><button class="btn-outline" type="button" data-crop-action="left" title="Rotate left"><i class="fa-solid fa-rotate-left"></i></button><button class="btn-outline" type="button" data-crop-action="right" title="Rotate right"><i class="fa-solid fa-rotate-right"></i></button><button class="btn-outline" type="button" data-crop-action="flipX" title="Flip horizontal"><i class="fa-solid fa-arrows-left-right"></i></button><button class="btn-outline" type="button" data-crop-action="flipY" title="Flip vertical"><i class="fa-solid fa-arrows-up-down"></i></button><button class="btn-outline" type="button" data-crop-action="reset"><i class="fa-solid fa-arrow-rotate-left"></i> Reset</button></div><div class="crop-actions"><button class="btn-outline" type="button" data-use-full><i class="fa-regular fa-image"></i> Use Full Image</button><div style="display:flex;gap:9px"><button class="btn-outline" type="button" data-crop-close>Cancel</button><button class="btn-primary" type="button" data-apply-crop><i class="fa-solid fa-crop-simple"></i> Apply Crop</button></div></div></div>`;
    document.body.appendChild(m);
    $$('[data-crop-close]',m).forEach(b=>b.onclick=closeCrop);
    $('[data-use-full]',m).onclick=()=>applyResult(originalData);
    $('[data-apply-crop]',m).onclick=()=>{
      if(cropper){
        const canvas=cropper.getCroppedCanvas({maxWidth:1800,maxHeight:1800,imageSmoothingEnabled:true,imageSmoothingQuality:'high'});
        applyResult(canvas.toDataURL('image/jpeg',.9));
      }else applyResult(originalData);
    };
    $$('[data-crop-action]',m).forEach(b=>b.onclick=()=>{
      if(!cropper) return; const a=b.dataset.cropAction;
      if(a==='zoomIn')cropper.zoom(.12); if(a==='zoomOut')cropper.zoom(-.12); if(a==='left')cropper.rotate(-90); if(a==='right')cropper.rotate(90);
      if(a==='flipX'){const d=b.dataset.scale==='-1'?1:-1;b.dataset.scale=String(d);cropper.scaleX(d)}
      if(a==='flipY'){const d=b.dataset.scale==='-1'?1:-1;b.dataset.scale=String(d);cropper.scaleY(d)}
      if(a==='reset')cropper.reset();
    });
    return m;
  }
  function closeCrop(){
    const m=$('#rntCropModal'); if(m)m.classList.add('hide'); if(cropper){cropper.destroy();cropper=null;} active=null;
  }
  function applyResult(data){
    if(!active)return closeCrop();
    active.editedData=data;
    const prev=$('[data-image-preview]',active.el), empty=$('.image-preview-empty',active.el), status=$('.upload-status',active.el), hidden=$('[data-image-data]',active.el);
    if(prev){prev.src=data;prev.classList.remove('hide')} if(empty)empty.classList.add('hide'); if(hidden)hidden.value=data;
    if(status){status.textContent='Image edited and ready. Click Upload Image to confirm it.';status.className='upload-status ready'}
    $('[data-upload-image]',active.el)?.removeAttribute('disabled'); closeCrop();
  }
  function openCrop(editor,data){
    active=editor;originalData=data;const m=ensureModal(),img=$('#rntCropImage',m);m.classList.remove('hide');img.src=data;
    if(cropper){cropper.destroy();cropper=null}
    if(global.Cropper){cropper=new Cropper(img,{viewMode:0,dragMode:'move',autoCropArea:.88,responsive:true,background:false,rotatable:true,scalable:true,zoomable:true,movable:true,checkOrientation:true});}
  }
  function initEditor(el){
    const editor={el,editedData:'',uploadedData:''};editors.set(el,editor);
    const input=$('[data-image-file]',el), choose=$('[data-choose-image]',el), upload=$('[data-upload-image]',el), hiddenPath=$('[data-image-db-path]',el);
    if(choose)choose.onclick=()=>input?.click();
    input?.addEventListener('change',()=>{
      const file=input.files?.[0]; if(!file)return;
      if(!file.type.startsWith('image/')){global.RNT?.notify('Invalid image','Please select an image file.','warning');return}
      if(file.size>8*1024*1024){global.RNT?.notify('Image too large','Choose an image smaller than 8 MB.','warning');return}
      const reader=new FileReader();reader.onload=()=>openCrop(editor,reader.result);reader.readAsDataURL(file);
    });
    upload?.addEventListener('click',()=>{
      if(!editor.editedData)return;
      const key=el.dataset.dbKey||('image_'+Date.now());
      try{localStorage.setItem('rnt_dbimg_'+key,editor.editedData);}catch(e){}
      editor.uploadedData=editor.editedData;
      const status=$('.upload-status',el);if(status){status.textContent='Uploaded in frontend demo. Backend can now save the file path/URL into the DB.';status.className='upload-status done'}
      if(hiddenPath&&!hiddenPath.value)hiddenPath.value='uploads/'+key+'.jpg';
      upload.setAttribute('disabled','disabled');
      global.RNT?.notify('Image ready','Image was edited before upload and is ready to save with the record.');
    });
    const db=$('[data-current-db-image]',el); if(db?.value){setDbImage($('[data-image-preview]',el),db.value,el.dataset.fallback,el.dataset.dbBase);$('.image-preview-empty',el)?.classList.add('hide')}
  }
  function boot(){hydrateDbImages();$$('[data-image-editor]').forEach(initEditor)}
  global.RNTImage={resolveImage,setDbImage,hydrateDbImages};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})(window);