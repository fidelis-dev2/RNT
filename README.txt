RNT FULL CORRECTED PROJECT - INCLUDES + MODULE FOLDERS + ENG/SW

LOGIN (frontend demo)
Username: admin
Password: admin

IMPORTANT STRUCTURE
- includes/ contains shared HTML includes: nav.html, footer.html, aside.html and every module aside.
- tenant/ contains BOTH frame wrappers and their actual pages. Example:
    tenant/register_tenant_frame.html  -> iframe -> tenant/register_tenant.html
- property/, payment/, revenue/, budget/, admin/ follow exactly the same pattern.
- home.html keeps the original module cards and Open Module concept.

LANGUAGE
assets/js/language.js exposes these global functions to every HTML page:
    setLanguage('en');
    setLanguage('sw');
    getLanguage();
    translate('Register Tenant');
    applyLanguage();

Example:
    <button onclick="setLanguage('sw')">SW</button>
    <h2 data-i18n="Register Tenant">Register Tenant</h2>

The script also automatically translates exact known English text/placeholder/title values, so you do not have to add data-i18n to every existing element. The selected language is saved in localStorage and automatically applies across nav, aside, footer, wrapper frames and nested content pages.

RUNNING
Use Live Server / VS Code / NetBeans static server or any HTTP server. Open index.html.

NOTE
The project is frontend-only. Forms save demo snapshots in localStorage so actions can be tested before a backend/database is connected.
