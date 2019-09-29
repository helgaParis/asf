Site en cours visible sur https://dougvonpetrovic.fr


mini-sites à une page: 
https://art.artistes-sf.org/frevarias/
https://art.artistes-sf.org/mtm/
https://art.artistes-sf.org/champagne/

et pareil pour bazencir   jalila    quarterone   stoulig

Les pages vides existent déjà dans la galerie (public/views/galerie)
Les routes existent déjà dans routes/galerie.js
Les liens dans le nav-galerie sont à faire (public/templates)

Il faut des stiles - le plus simple est probablement une balise css dans le pug pour ces "cartes de visite" d'artiste. Tu les trouveras d'ailleurs via l'inspecteur du navigateur dans l'ancienne page. 
Sauf qu'il faut placer les elements dans des divs, pas des tableaux.
Pour mtm, le background-color n'est plus la même que la sculpture. Il faut la même ou un contraste plus fort. (l'affichage des stiles varie un peu en 12 ans, écrans recents)
Pour ces mini-sites, tu peux copier les elements via ton navigateur.

Mets les images dans sources/images-galerie/artistes   (artistes est à créer)

Pour le lien, compare avec le logo. Cela sera un niveau plus bas   ../

Pas des emails dans des sites avant 2015, pas des liens sur AsF dans le copyright

Si tu tombes sur un lien vers un site externe à mettre, teste-le d'abord separement. Je crois, qu'il y en a pas.
Il se poseront 2 problemes, à lire sur mdm CORS et no-referer


