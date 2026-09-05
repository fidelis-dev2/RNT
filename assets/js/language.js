(function(global){
  const SW = {
  "RNT": "RNT",
  "Rental & Property Management System": "Mfumo wa Usimamizi wa Kodi na Mali",
  "System Administrator": "Msimamizi wa Mfumo",
  "Admin User": "Mtumiaji Msimamizi",
  "Welcome back,": "Karibu tena,",
  "Manage properties, tenants, collections, budgets and system settings from module frames.": "Simamia mali, wapangaji, makusanyo, bajeti na mipangilio ya mfumo kupitia moduli.",
  "Property Management": "Usimamizi wa Mali",
  "Tenant Management": "Usimamizi wa Wapangaji",
  "Payment Management": "Usimamizi wa Malipo",
  "Revenue Management": "Usimamizi wa Mapato",
  "Budget Management": "Usimamizi wa Bajeti",
  "System Administration": "Usimamizi wa Mfumo",
  "Manage properties, units, features and maintenance.": "Simamia mali, vyumba, vipengele na matengenezo.",
  "Manage tenants, leases and related information.": "Simamia wapangaji, mikataba ya upangaji na taarifa husika.",
  "Track rent collections, payments and balances.": "Fuatilia makusanyo ya kodi, malipo na salio.",
  "Monitor income, revenue streams and performance.": "Fuatilia mapato, vyanzo vya mapato na utendaji.",
  "Plan budgets, track expenses and control costs.": "Panga bajeti, fuatilia matumizi na dhibiti gharama.",
  "Manage users, roles, settings and configurations.": "Simamia watumiaji, majukumu, mipangilio na usanidi.",
  "Open Module": "Fungua Moduli",
  "Dashboard": "Dashibodi",
  "Home": "Mwanzo",
  "Main Page": "Ukurasa Mkuu",
  "Back to modules": "Rudi kwenye moduli",
  "Back to Modules": "Rudi kwenye Moduli",
  "Overview of module performance and quick actions.": "Muhtasari wa utendaji wa moduli na vitendo vya haraka.",
  "HTML content page": "Ukurasa wa maudhui wa HTML",
  "Total Properties": "Jumla ya Mali",
  "Total Units": "Jumla ya Vyumba",
  "Occupied Units": "Vyumba Vilivyopangishwa",
  "Vacant Units": "Vyumba Vilivyo Wazi",
  "Occupancy Rate": "Kiwango cha Upangishaji",
  "This Month Rent": "Kodi ya Mwezi Huu",
  "Add Property": "Ongeza Mali",
  "Add Tenant": "Ongeza Mpangaji",
  "Receive Payment": "Pokea Malipo",
  "Register Expense": "Sajili Matumizi",
  "Reports": "Ripoti",
  "Settings": "Mipangilio",
  "Recent Properties": "Mali za Hivi Karibuni",
  "Active Portfolio": "Mali Zinazotumika",
  "Active": "Hai",
  "Units": "Vyumba",
  "Properties": "Mali",
  "Register Property": "Sajili Mali",
  "Maintenance": "Matengenezo",
  "Property Reports": "Ripoti za Mali",
  "Property Records": "Rekodi za Mali",
  "Property Name": "Jina la Mali",
  "Property Type": "Aina ya Mali",
  "Location": "Eneo",
  "Address": "Anwani",
  "Number of Units": "Idadi ya Vyumba",
  "Owner / Landlord": "Mmiliki",
  "Description": "Maelezo",
  "Save Property": "Hifadhi Mali",
  "Tenant": "Mpangaji",
  "Tenants": "Wapangaji",
  "Register Tenant": "Sajili Mpangaji",
  "Tenant Registration": "Usajili wa Mpangaji",
  "Tenant Reports": "Ripoti za Wapangaji",
  "Create a tenant record and assign a rental unit.": "Tengeneza rekodi ya mpangaji na mpangie chumba cha kukodi.",
  "Manage tenant profiles, rent amounts and occupancy status.": "Simamia taarifa za wapangaji, kiasi cha kodi na hali ya upangaji.",
  "Tenant Records": "Rekodi za Wapangaji",
  "Realistic demo rental data": "Data halisi za mfano za upangishaji",
  "Full Name": "Jina Kamili",
  "Phone Number": "Namba ya Simu",
  "Email": "Barua Pepe",
  "National ID / Reference": "Kitambulisho / Rejea",
  "Property": "Mali",
  "Unit": "Chumba",
  "Monthly Rent (TZS)": "Kodi ya Mwezi (TZS)",
  "Monthly Rent": "Kodi ya Mwezi",
  "Rent Due Day": "Siku ya Kulipa Kodi",
  "Lease Start": "Mwanzo wa Mkataba",
  "Lease End": "Mwisho wa Mkataba",
  "Notes": "Maelezo ya Ziada",
  "Clear": "Futa",
  "Tenant ID": "Namba ya Mpangaji",
  "Due Date": "Tarehe ya Mwisho",
  "Status": "Hali",
  "Actions": "Vitendo",
  "Paid": "Imelipwa",
  "Partial": "Sehemu Imelipwa",
  "Due": "Inadaiwa",
  "Overdue": "Imechelewa",
  "Leases": "Mikataba ya Upangaji",
  "Lease Records": "Rekodi za Mikataba",
  "Lease ID": "Namba ya Mkataba",
  "Start Date": "Tarehe ya Kuanza",
  "End Date": "Tarehe ya Mwisho",
  "Deposit": "Amana",
  "Search records...": "Tafuta rekodi...",
  "Export CSV": "Hamisha CSV",
  "Print": "Chapisha",
  "View": "Angalia",
  "Edit": "Hariri",
  "Delete": "Futa",
  "Payments": "Malipo",
  "Receive Rent Payment": "Pokea Malipo ya Kodi",
  "Record tenant rent payment using a standard HTML form.": "Rekodi malipo ya kodi ya mpangaji kwa kutumia fomu ya HTML.",
  "Payment Month": "Mwezi wa Malipo",
  "Amount (TZS)": "Kiasi (TZS)",
  "Amount": "Kiasi",
  "Payment Method": "Njia ya Malipo",
  "Mobile Money": "Pesa ya Simu",
  "Bank Transfer": "Uhamisho wa Benki",
  "Cash": "Fedha Taslimu",
  "Cheque": "Hundi",
  "Transaction / Reference No.": "Namba ya Muamala / Rejea",
  "Payment Date": "Tarehe ya Malipo",
  "Payment Note": "Maelezo ya Malipo",
  "Save & Generate Receipt": "Hifadhi na Tengeneza Risiti",
  "Payment Reports": "Ripoti za Malipo",
  "Payment Records": "Rekodi za Malipo",
  "Receipt No.": "Namba ya Risiti",
  "Balance": "Salio",
  "Arrears": "Madeni",
  "Outstanding Rent": "Kodi Inayodaiwa",
  "Revenue Report": "Ripoti ya Mapato",
  "Revenue Reports": "Ripoti za Mapato",
  "Income": "Mapato",
  "Forecast": "Utabiri",
  "Revenue Overview": "Muhtasari wa Mapato",
  "Budget Overview": "Muhtasari wa Bajeti",
  "Expenses": "Matumizi",
  "Budget Report": "Ripoti ya Bajeti",
  "Budget Reports": "Ripoti za Bajeti",
  "Expense Records": "Rekodi za Matumizi",
  "Expense Date": "Tarehe ya Matumizi",
  "Category": "Kundi",
  "Vendor / Payee": "Mtoa Huduma / Mlipo",
  "Reference": "Rejea",
  "Save Expense": "Hifadhi Matumizi",
  "Users": "Watumiaji",
  "Roles": "Majukumu",
  "Audit Logs": "Kumbukumbu za Ukaguzi",
  "User Management": "Usimamizi wa Watumiaji",
  "Role Management": "Usimamizi wa Majukumu",
  "System Settings": "Mipangilio ya Mfumo",
  "Name": "Jina",
  "Role": "Jukumu",
  "Last Login": "Kuingia Mara ya Mwisho",
  "Save Settings": "Hifadhi Mipangilio",
  "Language": "Lugha",
  "English": "Kiingereza",
  "Swahili": "Kiswahili",
  "Sign in to continue to your account": "Ingia ili kuendelea kwenye akaunti yako",
  "Username or Phone": "Jina la mtumiaji au Simu",
  "Password": "Nenosiri",
  "Remember me": "Nikumbuke",
  "Forgot password?": "Umesahau nenosiri?",
  "Sign In": "Ingia",
  "Missing details": "Taarifa hazijakamilika",
  "Enter username and password.": "Weka jina la mtumiaji na nenosiri.",
  "Login successful": "Umeingia kikamilifu",
  "Welcome to RNT system.": "Karibu kwenye mfumo wa RNT.",
  "Saved successfully": "Imehifadhiwa kikamilifu",
  "Record saved successfully.": "Rekodi imehifadhiwa kikamilifu.",
  "Delete record?": "Ufute rekodi?",
  "This is a frontend demo action.": "Hiki ni kitendo cha mfano cha frontend.",
  "Deleted": "Imefutwa",
  "The row has been removed from this view.": "Mstari umeondolewa kwenye mwonekano huu.",
  "Record details": "Maelezo ya Rekodi",
  "This button is ready to connect to a details page or backend record.": "Kitufe hiki kiko tayari kuunganishwa na ukurasa wa maelezo au rekodi ya backend.",
  "Yes": "Ndiyo",
  "Cancel": "Ghairi",
  "Logout": "Toka",
  "Notification": "Taarifa",
  "Quick Actions": "Vitendo vya Haraka",
  "Search": "Tafuta",
  "No records found": "Hakuna rekodi zilizopatikana",
  "General Menu": "Menyu Kuu",
  "Choose a module": "Chagua moduli",
  "This Month": "Mwezi Huu",
  "Total Revenue": "Jumla ya Mapato",
  "Total Expenses": "Jumla ya Matumizi",
  "Net Income": "Mapato Halisi",
  "Collection Rate": "Kiwango cha Makusanyo",
  "Total Collected": "Jumla Iliyokusanywa",
  "Outstanding Balance": "Salio Linalodaiwa",
  "Total Tenants": "Jumla ya Wapangaji",
  "Active Leases": "Mikataba Hai",
  "Expiring Soon": "Inakaribia Kuisha",
  "Maintenance Requests": "Maombi ya Matengenezo",
  "Open Requests": "Maombi Yaliyo Wazi",
  "Completed": "Imekamilika",
  "Pending": "Inasubiri",
  "Priority": "Kipaumbele",
  "Title": "Kichwa",
  "Date": "Tarehe",
  "Type": "Aina",
  "Total": "Jumla",
  "Occupied": "Imepangishwa",
  "Vacant": "Wazi",
  "Rent": "Kodi",
  "Contact": "Mawasiliano",
  "Report": "Ripoti",
  "Save": "Hifadhi",
  "Update": "Sasisha",
  "Create": "Tengeneza",
  "Add": "Ongeza",
  "Close": "Funga",
  "Open": "Fungua",
  "Description / Notes": "Maelezo / Dondoo",
  "Optional reference": "Rejea ya hiari",
  "Tenant full name": "Jina kamili la mpangaji",
  "Any remarks about this payment...": "Maelezo yoyote kuhusu malipo haya...",
  "Emergency contact, special terms, notes...": "Mawasiliano ya dharura, masharti maalum, maelezo...",
  "Names and phone numbers are fictional demo data for this frontend project.": "Majina na namba za simu ni data za mfano kwa mradi huu wa frontend.",
  "Frontend demo data": "Data ya mfano ya frontend",
  "Realistic demo data": "Data halisi ya mfano",
  "Manage": "Simamia",
  "Overview": "Muhtasari",
  "Details": "Maelezo",
  "© 2026 RNT • Rental & Property Management System • HTML Frames, Forms & Tables": "© 2026 RNT • Mfumo wa Usimamizi wa Kodi na Mali • HTML Frames, Forms & Tables"
};

  Object.assign(SW, {
  "Owner Login": "Ingia kama Mwenye Nyumba",
  "Tenant Login": "Ingia kama Mpangaji",
  "Available Homes": "Nyumba Zinazopatikana",
  "Property Owner": "Mwenye Nyumba",
  "How It Works": "Jinsi Inavyofanya Kazi",
  "Find a home you can inspect before you decide.": "Tafuta nyumba unayoweza kukagua kabla ya kuamua.",
  "Browse Houses": "Angalia Nyumba",
  "View Details": "Angalia Maelezo",
  "Inspect": "Kagua",
  "Schedule a Free Inspection": "Panga Ukaguzi wa Bure",
  "Full Name": "Jina Kamili",
  "Phone Number": "Namba ya Simu",
  "Preferred Date": "Tarehe Unayopendelea",
  "Preferred Time": "Muda Unaopendelea",
  "Message / Question": "Ujumbe / Swali",
  "Request Inspection": "Omba Ukaguzi",
  "Pay Rent": "Lipa Kodi",
  "Payments & Receipts": "Malipo na Risiti",
  "My Lease": "Mkataba Wangu",
  "Maintenance": "Matengenezo",
  "My Profile": "Wasifu Wangu",
  "Login to Tenant Portal": "Ingia Kwenye Akaunti ya Mpangaji",
  "Registered phone number": "Namba ya simu iliyosajiliwa",
  "Choose & Edit Image": "Chagua na Hariri Picha",
  "Upload Image": "Pakia Picha",
  "Use Full Image": "Tumia Picha Nzima",
  "Apply Crop": "Tumia Crop",
  "Edit image before upload": "Hariri picha kabla ya kupakia",
  "Property Image": "Picha ya Nyumba",
  "Tenant Profile Image": "Picha ya Mpangaji",
  "Monthly Rent (TZS)": "Kodi ya Mwezi (TZS)",
  "Available Units": "Vyumba Vinavyopatikana",
  "Bedrooms": "Vyumba vya Kulala",
  "Bathrooms": "Bafu",
  "Listing Visibility": "Muonekano kwa Umma",
  "Public - show on landing page": "Umma - ionekane kwenye ukurasa wa mwanzo",
  "Private": "Binafsi",
  "Reset request sent": "Ombi la kubadili nenosiri limetumwa",
  "Send Reset Request": "Tuma Ombi la Nenosiri",
  "Payment recorded": "Malipo Yamerekodiwa",
  "Confirm Payment": "Thibitisha Malipo",
  "Report Issue": "Ripoti Tatizo",
  "Maintenance Requests": "Maombi ya Matengenezo",
  "Submit Request": "Tuma Ombi",
  "Property Details": "Maelezo ya Nyumba",
  "All Homes": "Nyumba Zote",
  "Contact Owner": "Wasiliana na Mwenye Nyumba",
  "Verified Property Owner": "Mwenye Nyumba Aliyethibitishwa",
  "WhatsApp Owner": "WhatsApp Mwenye Nyumba",
  "Search area or property name": "Tafuta eneo au jina la nyumba",
  "All property types": "Aina zote za nyumba",
  "Any monthly rent": "Kodi yoyote ya mwezi",
  "Search": "Tafuta"
});

  const STORAGE_KEY = 'rnt_language';
  const supported = ['en','sw'];
  let applying = false;

  function cleanLang(lang){ return supported.includes(lang) ? lang : 'en'; }
  function getLanguage(){ return cleanLang(localStorage.getItem(STORAGE_KEY) || 'en'); }

  function translateKey(key, lang){
    const source = String(key ?? '');
    if(cleanLang(lang) === 'en') return source;
    const trimmed = source.trim();
    if(!trimmed) return source;
    if(Object.prototype.hasOwnProperty.call(SW, trimmed)) return SW[trimmed];
    // Breadcrumbs are translated piece-by-piece.
    if(trimmed.includes(' › ')) return trimmed.split(' › ').map(part => SW[part] || part).join(' › ');
    return source;
  }

  function t(key){ return translateKey(key, getLanguage()); }

  function translateTextNode(node, lang){
    if(!node || !node.nodeValue) return;
    const parent = node.parentElement;
    if(!parent || ['SCRIPT','STYLE','NOSCRIPT','TEXTAREA'].includes(parent.tagName)) return;
    if(node.__rntOriginalText === undefined) node.__rntOriginalText = node.nodeValue;
    const original = node.__rntOriginalText;
    const trimmed = original.trim();
    if(!trimmed) return;
    const translated = translateKey(trimmed, lang);
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated + trailing;
  }

  function translateAttributes(el, lang){
    if(!(el instanceof Element)) return;
    if(el.dataset.i18n){
      if(el.__rntOriginalI18n === undefined) el.__rntOriginalI18n = el.dataset.i18n;
      el.textContent = translateKey(el.__rntOriginalI18n, lang);
    }
    ['placeholder','title','aria-label'].forEach(attr => {
      if(!el.hasAttribute(attr)) return;
      const prop = '__rntOriginal_' + attr.replace('-','_');
      if(el[prop] === undefined) el[prop] = el.getAttribute(attr);
      el.setAttribute(attr, translateKey(el[prop], lang));
    });
    if((el.tagName === 'INPUT' || el.tagName === 'BUTTON') && el.hasAttribute('value') && ['button','submit','reset'].includes((el.getAttribute('type')||'').toLowerCase())){
      if(el.__rntOriginalValue === undefined) el.__rntOriginalValue = el.value;
      el.value = translateKey(el.__rntOriginalValue, lang);
    }
  }

  function refreshLanguageButtons(lang){
    document.querySelectorAll('[data-language-button]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.languageButton === lang);
      btn.setAttribute('aria-pressed', btn.dataset.languageButton === lang ? 'true' : 'false');
    });
    document.querySelectorAll('[data-language-select]').forEach(sel => sel.value = lang);
  }

  function applyLanguage(lang){
    lang = cleanLang(lang || getLanguage());
    if(applying || !document.documentElement) return lang;
    applying = true;
    try{
      document.documentElement.lang = lang === 'sw' ? 'sw' : 'en';
      document.querySelectorAll('*').forEach(el => translateAttributes(el, lang));
      const walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT);
      let node; while((node = walker.nextNode())) translateTextNode(node, lang);
      refreshLanguageButtons(lang);
    } finally { applying = false; }
    return lang;
  }

  function sendToChildFrames(lang){
    document.querySelectorAll('iframe').forEach(frame => {
      try{ frame.contentWindow.postMessage({type:'rnt-language-changed',lang}, '*'); }catch(_e){}
    });
  }

  function setLanguage(lang){
    lang = cleanLang(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
    sendToChildFrames(lang);
    // Let the top shell distribute to nav, aside, footer and nested content frames.
    try{
      if(window.top && window.top !== window) window.top.postMessage({type:'rnt-language-changed',lang}, '*');
      else window.postMessage({type:'rnt-language-changed',lang}, '*');
    }catch(_e){}
    return lang;
  }

  function translate(key){ return t(key); }

  global.RNTLang = {setLanguage,getLanguage,applyLanguage,translate,t,translations:{sw:SW}};
  global.setLanguage = setLanguage;      // callable in any HTML: setLanguage('sw')
  global.getLanguage = getLanguage;      // callable in any HTML: getLanguage()
  global.applyLanguage = applyLanguage;  // callable after inserting HTML dynamically
  global.translate = translate;          // callable: translate('Register Tenant')
  global.t = t;

  window.addEventListener('message', event => {
    const d = event.data || {};
    if(d.type === 'rnt-language-changed' && supported.includes(d.lang)){
      localStorage.setItem(STORAGE_KEY, d.lang);
      applyLanguage(d.lang);
      sendToChildFrames(d.lang);
    }
  });
  window.addEventListener('storage', event => {
    if(event.key === STORAGE_KEY) applyLanguage(cleanLang(event.newValue || 'en'));
  });

  function boot(){
    applyLanguage(getLanguage());
    // Translate HTML added after load without forcing authors to manually tag every element.
    const observer = new MutationObserver(mutations => {
      if(applying) return;
      const lang = getLanguage();
      for(const mutation of mutations){
        mutation.addedNodes.forEach(node => {
          if(node.nodeType === Node.TEXT_NODE) translateTextNode(node, lang);
          if(node.nodeType === Node.ELEMENT_NODE){
            translateAttributes(node, lang);
            node.querySelectorAll?.('*').forEach(el => translateAttributes(el, lang));
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let n; while((n = walker.nextNode())) translateTextNode(n, lang);
          }
        });
      }
    });
    if(document.body) observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})(window);
