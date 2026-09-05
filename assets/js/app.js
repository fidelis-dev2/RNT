
(function(){
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const $=(s,r=document)=>r.querySelector(s);
  const tr=(key)=>window.t ? window.t(key) : key;

  window.RNT = {
    money(v){ return 'TZS ' + Number(v||0).toLocaleString('en-US'); },
    notify(title,text,icon='success'){
      if(window.Swal) return Swal.fire({icon,title:tr(title),text:tr(text),confirmButtonColor:'#e5166f'});
      return new Promise(resolve=>{
        const overlay=document.createElement('div'); overlay.className='rnt-modal-overlay';
        overlay.innerHTML='<div class="rnt-modal"><div class="rnt-modal-icon">✓</div><h3></h3><p></p><div class="rnt-modal-actions"><button class="btn-primary" type="button">OK</button></div></div>';
        overlay.querySelector('h3').textContent=tr(title); overlay.querySelector('p').textContent=tr(text);
        overlay.querySelector('button').onclick=()=>{overlay.remove();resolve();}; document.body.appendChild(overlay);
      });
    },
    confirm(title,text,ok){
      if(window.Swal){
        Swal.fire({title:tr(title),text:tr(text),icon:'question',showCancelButton:true,confirmButtonText:tr('Yes'),cancelButtonText:tr('Cancel'),confirmButtonColor:'#e5166f'})
          .then(r=>{if(r.isConfirmed) ok();});
      }else{
        const overlay=document.createElement('div'); overlay.className='rnt-modal-overlay';
        overlay.innerHTML='<div class="rnt-modal"><div class="rnt-modal-icon">?</div><h3></h3><p></p><div class="rnt-modal-actions"><button class="btn-outline rnt-cancel" type="button"></button><button class="btn-primary rnt-ok" type="button"></button></div></div>';
        overlay.querySelector('h3').textContent=tr(title);overlay.querySelector('p').textContent=tr(text);overlay.querySelector('.rnt-cancel').textContent=tr('Cancel');overlay.querySelector('.rnt-ok').textContent=tr('Yes');
        overlay.querySelector('.rnt-cancel').onclick=()=>overlay.remove();overlay.querySelector('.rnt-ok').onclick=()=>{overlay.remove();ok();};document.body.appendChild(overlay);
      }
    }
  };

  // Shared helper functions callable directly from HTML files.
  window.goHome=function(){
    if(window.top && window.top!==window) window.top.postMessage({type:'rnt-home'},'*');
    else location.href='home.html';
  };
  window.logoutRNT=function(){
    if(window.top && window.top!==window) window.top.postMessage({type:'rnt-logout'},'*');
    else location.href='index.html';
  };
  window.toggleModuleAside=function(){
    if(window.top && window.top!==window) window.top.postMessage({type:'rnt-toggle-side'},'*');
  };
  window.openModuleFrame=function(el,src){
    $$('.side-nav a').forEach(a=>a.classList.remove('active'));
    if(el) el.classList.add('active');
    if(window.top && window.top!==window) window.top.postMessage({type:'rnt-open-frame',src},'*');
  };



  window.openForgotPassword=function(accountType){
    const overlay=document.createElement('div');overlay.className='rnt-form-modal';
    overlay.innerHTML='<div class="rnt-form-modal-card" style="max-width:500px"><div class="modal-head"><div><h3>'+tr('Forgot password?')+'</h3><p style="color:#667085;margin:6px 0 0">Enter your email address or phone number to request a reset link/code.</p></div><button class="modal-close" type="button"><i class="fa-solid fa-xmark"></i></button></div><form id="forgotPasswordForm"><div class="input-group"><label>Email or Phone</label><input name="contact" required placeholder="Email address or phone number"></div><div class="form-actions"><button class="btn-outline" type="button" data-cancel>'+tr('Cancel')+'</button><button class="btn-primary" type="submit"><i class="fa-solid fa-paper-plane"></i> Send Reset Request</button></div></form></div>';
    const close=()=>overlay.remove();overlay.querySelector('.modal-close').onclick=close;overlay.querySelector('[data-cancel]').onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};
    overlay.querySelector('form').onsubmit=e=>{e.preventDefault();close();RNT.notify('Reset request sent','If the account exists, reset instructions will be sent to the registered contact.');};document.body.appendChild(overlay);
  };

  // Login is frontend-only and intentionally simple to replace with backend authentication later.
  const login=$('#loginForm');
  if(login){
    login.addEventListener('submit',e=>{
      e.preventDefault();
      const u=$('#username')?.value.trim(); const p=$('#password')?.value;
      if(!u||!p){RNT.notify('Missing details','Enter username and password.','warning');return;}
      if(window.Swal){
        Swal.fire({icon:'success',title:tr('Login successful'),text:tr('Welcome to RNT system.'),timer:850,showConfirmButton:false});
        setTimeout(()=>location.href='home.html',620);
      }else location.href='home.html';
    });
  }

  // Top-level home / module shell message router.
  window.addEventListener('message',e=>{
    const d=e.data||{};
    if(d.type==='rnt-open-frame' && d.src && document.body.classList.contains('module-shell')){
      const f=$('#moduleContentFrame'); if(f) f.src=d.src;
      $('.aside-frame-wrap')?.classList.remove('show');
    }
    if(d.type==='rnt-toggle-side' && document.body.classList.contains('module-shell')) $('.aside-frame-wrap')?.classList.toggle('show');
    if(d.type==='rnt-home'){
      if(document.body.classList.contains('module-shell')) location.href='../home.html';
      else if(document.body.classList.contains('home-page')) location.href='home.html';
    }
    if(d.type==='rnt-logout'){
      if(document.body.classList.contains('module-shell')) location.href='../index.html';
      else location.href='index.html';
    }
  });

  // Search static tables.
  $$('[data-table-search]').forEach(input=>input.addEventListener('input',()=>{
    const id=input.dataset.tableSearch,q=input.value.toLowerCase().trim();
    $$(`#${id} tbody tr`).forEach(tr=>tr.style.display=tr.innerText.toLowerCase().includes(q)?'':'none');
  }));

  // Demo forms save records locally to prove the frontend interaction works without backend.
  $$('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    const type=form.dataset.demoForm||'record';
    const values=Object.fromEntries(new FormData(form).entries());
    const key='rnt_demo_'+type;
    let list=[]; try{list=JSON.parse(localStorage.getItem(key)||'[]')}catch(_e){}
    list.unshift({id:Date.now(),createdAt:new Date().toISOString(),...values});
    localStorage.setItem(key,JSON.stringify(list));
    RNT.notify('Saved successfully','Record saved successfully.').then(()=>form.reset());
  }));

  $$('[data-demo-delete]').forEach(btn=>btn.addEventListener('click',()=>RNT.confirm('Delete record?','This is a frontend demo action.',()=>{
    btn.closest('tr')?.remove();RNT.notify('Deleted','The row has been removed from this view.');
  })));
  $$('[data-demo-view]').forEach(btn=>btn.addEventListener('click',()=>RNT.notify('Record details','This button is ready to connect to a details page or backend record.','info')));
  $$('[data-print]').forEach(btn=>btn.addEventListener('click',()=>window.print()));
  $$('[data-export]').forEach(btn=>btn.addEventListener('click',()=>{
    const table=$('#'+btn.dataset.export);if(!table)return;
    const rows=$$('tr',table).filter(tr=>tr.style.display!=='none').map(tr=>$$('th,td',tr).map(td=>'"'+td.innerText.replaceAll('"','""')+'"').join(','));
    const blob=new Blob(['\ufeff'+rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download=(btn.dataset.filename||'rnt-export')+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
  }));

  // Nav.html can use ?home=1 to hide the mobile module-menu button on the module-card page.
  if(document.body.classList.contains('nav-document')){
    const params=new URLSearchParams(location.search);
    if(params.get('home')==='1') $('#moduleMenuButton')?.classList.add('hide');
  }
})();
