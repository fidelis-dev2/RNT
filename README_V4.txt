RNT FULL CORRECTED RESPONSIVE TENANT + PUBLIC VERSION
====================================================

ENTRY PAGES
-----------
index.html                  Public landing page - no login required
property_details.html       Public property details + owner contact + inspection
login.html                  Owner/Admin login
home.html                   Owner/Admin module cards
 tenant_portal/login.html   Tenant login
 tenant_portal/index.html   Tenant self-service portal

DEMO LOGINS
-----------
Owner/Admin: admin / admin
Tenant: 0712444111 / 1234

IMPORTANT IMAGE / DATABASE CONCEPT
----------------------------------
This is still an HTML frontend project, so it cannot query MySQL/MariaDB directly.
It has been prepared so your JSP/PHP/Servlet backend can supply the image path saved in DB.

Recommended DB value:
  uploads/properties/P007/main.jpg

Use in HTML/JSP:
  <img data-db-image="<%= rs.getString("image_path") %>"
       data-db-base="../"
       data-fallback="https://images.unsplash.com/...">

Then assets/js/image-manager.js automatically resolves the DB image and uses the online image if the DB image fails.
You may also call:
  RNTImage.setDbImage(element, dbPath, fallbackUrl, '../');

IMAGE UPLOAD / CROP
-------------------
Property and tenant registration forms include:
- choose image
- free crop selection
- zoom in/out
- rotate left/right
- flip horizontally/vertically
- reset
- Use Full Image
- Apply Crop
- preview before Upload Image

The frontend demo stores the edited image locally. In production, send the edited image/blob to your backend,
save the file under uploads/, and store ONLY its path/URL in the DB.

RESPONSIVE
----------
Phone: single-column cards/forms, touch buttons, mobile menu, scrollable tables.
iPad/tablet: two-column public cards, overlay module aside, compact navigation.
Desktop: full module workspace, card grids and large public layout.

TENANT PORTAL
-------------
- Dashboard
- Pay Rent demo
- Payments & Receipts
- Lease summary
- Maintenance requests
- Profile
- Forgot password popup

PUBLIC / NO LOGIN
-----------------
Visitors can:
- browse available homes
- search/filter listings
- view property details
- see owner phone, email, WhatsApp and office location
- request physical inspection without login

LANGUAGE
--------
ENG/SW continues to use assets/js/language.js and localStorage.
Call setLanguage('en') or setLanguage('sw') from any HTML page.
