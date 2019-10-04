# This file repeats the structure of README-regles.md and integrates last changes

Last change: 4/10/2019

## Static Files in /sources/

### /css/

- styles archive
  asso.css : archive text page
  asso.css and dias.css archive photo report
  to change styles: create archive.css and nav-archive.css if needed
- styles main pages:  main.css and nav.css
- styles gallery: 
  galerie.css and nav-galerie.css for the gallery itself
  artistes.css for the single pages with single photo
  artistes-base.css for the basic websites
  artiste-xy.css for the larger artist's website, xy = name used in routes/galerie.js

### /images

- icons, logo, backgrounds... of global website

### /images-galerie:

- /subfolders for the pictures for the gallery itself
- /artistes : pictures for the single page websites
- /base/xy pictures for the basic sites; xy= name used in routes/galerie.js
- /xy with subfolders: larger websites, xy= name used in routes/galerie.js
  
### /images-news : all pictures concerning the archive and current News page

- /year/ : loose pictures for text pages of that year
  /year/subfolder for the photo reports, one folder per report, all files in the folder

### /js 

- dias-code.js : general code for a diashow.
- variations of dias-code to be created 
- -dias-code-ab.js code for the basic artist's sites
- dias-code-galerie: animation on gallery index
- pages.js in case of need for global pages 
- form-contact.js for the contact form, others to be added here
- anim-123.js : in case of need for an animation, 123 = name of file to which it belongs

### /pdf 

- all pdf files, global site, archive, small artist's websites
- to be defined: pdf files for large artist's websites

### /photos 

in case of need in step 10

## /public/

### /html

- do not use this folder, reserved for server admin

### /templates : all pug templates here

- layout, layout-sans-footer, nav : main site 
- layout-archive, layout-archive-dias, nav-archive : archive pages
- layout-galerie and nav-galerie: gallery
- layout-galerie-base: basic websites
- layout-artistxy and nav-artistxy: create a layout for larger websites, xy = name used in routes/galerie.js

### /views 

- index of global website (page is temporary a news page, to be changed )
- 404 Node error page, others to follow, to be placed into a folder
- /asso et /services : site global
- /archives : Zoubeir and Helga. 
    actuel=index of News/Archives.
   Name files with year and number of event within the year: First event = 1, second 2 That means 1 could occur in January or in May, it's not the month of the event.
   Zero is reserved for adding information later
- /galerie : Saloum et Helga,
  index = start page for the gallery
  pug files for small and basic websites 
  currently; pug files for temporary deviation of larger websites. 
  Create subfolders for larger dependant websites

## /routes/ 

- site.js
- archive.js
- galerie.js

## db

- db.js : not uploaded, api call to db on second server
- contact.js : code for backend of contact form
- others to follow for other forms