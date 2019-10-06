**Règles de collaboration projet web AsF « migration des sites »**

**Les collaborateurs :**

Helga, chef de projet
Saloum, dev Js, 
Zoubeir, dev JS
Isabelle, graphiste : contribution au look
Marine : correctrice du français, textes littéraires 
Edith : correctrice du français, textes commerciaux et légaux 
Shannon : version anglaise, correction orthographe et conseils Adaption marketing aux visiteurs américains 
Astrid: correction de la version allemande et conseils marketing
Ferdinand, président : validation des étapes, contenue d'une page Ventes à créer

**Serveurs Linux:**

1. Sites
2. Données et actions: MongoDB et email Server

**Migration en étapes:**

1. Nouveau hébergement: installation Linux, Nginx, Node, MongoDB, sécurité, server email etc
2. Anciens sites en html4, parfois html5 transférés tel quel
3. Certification https des domaines et sous-domaines
4. Projets de test et utilisation MongoDB
5. - en cours: Création du site principal en Express / JS / Pug / css
6. - mise en ligne et tests de structure avec contenu représentatif
7. - Adaption des CSS
8. - Définition et création de la base de données du site, (structure (utilité?, urls des nombreuses photos - combien à usage multiple?) / collecte de données (usage?) / CNIL, revoir disclaimer multi-langues (loi actuel) )
9. - Selon les decisions en étape 8, adaptation des diaporamas, création de cookies 
10. - Création des JS pour es embellissements (animations, variations de diaporamas, page d'accueil, nav ou header de la galerie animé, decor ou annonces dans les asides de quelques pages)
11. - Futurs sites - pages à venir : Faire le point de l'expérience, ajouter des fonctionnalités comme sites culturels en forme d'app (React ?) le site principal en forme de native app, avec usage de gps, paiement, gestures (React Native)

**La structure :**

**Fichiers statiques dans /sources/...**

- /css : asso.css et dias.css jusqu'à l'étape 7.\
     Pour des tests, nécessités, créer un fichier css par dev, bien documenté
- /image-news : toutes les photos et graphiques, en sous-dossiers annuels
- /images : les images du site principal, icons, logo, fonds...
- /images-galerie: les images des artistes - voir plus pas pour le tri
- /js : dias-code.js pour le code d'un diaporama, d'autres à suivre, pages.js  (à faire)
- pour formulaires, animations etc créer des fichiers js ici
- /pdf tous les pdf du site, archive et affiches des petits sites des artistes
- /photos en case de besoin en étape 10, photos du site global

**/public/**

- /html : ne pas toucher, contient les fichiers erreur de Nginx, en cas de plantage de Node
- /templates : tous les templates ici. layout et layout-sans-footer pour le site global, à créer des layout-xy  (xy = nom du chapitre ou de layout distinct, ex layout-archives, layout-galerie, logout-artistexy) et un fichier nav-xy.\
    Baser tous les layout-xy sur layout-sans-footer.\
    Utiliser nam-galerie pour la galerie, mini sites, à créer des nav-galeriexy pour les grands sites\
    Utiliser nav-archive pour tout l'archive\
    J'ai copié des liens qui fonctionnent dedans - à ajouter d'autres
- /views contient le index du site global (page temporaire), le 404.pug pour des erreurs après reponse du server Node (d'autres error pages à créer)\
    /asso et /services : site global = Helga\
    /archives : Zubeir et Helga. Page actuel=index du chapitre News/Archives. Nommer les pug avec l'année et le numéro chronologique de l'événement. Le premier événement de l'année est 1, le deuxième 2 etc. No Zero est réservé pour l'ajout de rapports annuels ou autres\
    /galerie : Saloum et Helga, contient le index du chapitre Galerie et les fichier pug des mini-sites. Créer des sous-dossiers pour des sites plus importants

**Répartition des tâches :**

**Layout :**

Helga et Isabelle, réunion de travail 2 fois par mois, mardi soir

Correctrices : sessions avec Marine en direct, lundi ou jeudi matin, avec Shannon et Edith par mail, Astrid par mail, FaceTime ou en réunion à Munich

**Dev Js**

**ATTENTION: Intervenez uniquement dans les dossiers et fichiers attribués à chacun. D'autres interventions seront rejetées.**

**Saloum:**

Credits for: contribution dans la phase de conception du projet et création du premier serveur Express à l'installation du vps actuel 

*Tâches en cours:* 
migration / création de sites des artistes

**Working directory: Intervention uniquement à l'intérieur des**

dossiers views/galerie

sources/images-galerie

et dans le fichier routes/galerie.js

Ajout de fichier css distinct possible

- Premier site à faire: une seule page à afficher, intégrée dans la galerie du site, 
- Page en pug
- Layout : template layout galerie-artiste-p  (à créer) et nav-galerie
- Photos et illustrations: /sources/images-galerie/artists/ - fichier à renommer avec nomDArtiste1, 2, etc
- Nom du pug: nomDArtiste
- Ajouter ton nom dans la balise meta auteur des layouts pug
- Lien dans le nav: href: nomDArtiste
- Text du lien: comme dans la version précédente ( quelques artistes souhaitent être trouvés via leur nom civil, d'autres uniquement avec leur nom d'artiste et d'autres les deux)
- Routes.js: écrire le nav href dans le tableau targets.
- **Prochaine étape** : sites de plusieurs pages, (créer un dossier /images-galerie/CeNomDArtiste 
- Sites de de taille plus importante : ces sites peuvent être créés en d'autres langues et avec d'autres bibliothèques et frameworks, totalement indépendant du site principal - intégration à définir, structure de dossiers à définir
- Sites censés être indépendants: structure indépendante à définir

**Zoubeir : chapitre Archive**

**Working directory: Intervention uniquement à l'intérieur des**

dossiers views/archive
sources/image-news.  (A voir: correction de tous les noms sur image ou images)
et dans le fichier routes/archive.js

- Ajout de fichier css distinct possible
- Ajout de templates dans /views/templates
- Utiliser le fichier layout-archive et le fichier nav-archive comme templates. 
- Créer un fichier layout-archive-dias à base de layout-archive avec nav-archive. 
- Les layouts utiliseront /css/pages.css et css/dias.css. Si un stile est déjà défini pour un tag ou une classe dans ces fichiers, on l'utilise. 
- Pour des besoins additionnels, créer un fichier /css/archive.css et le connecter au template. 
- Js: laisser /js/pages.js connecté (vide)
- Connecter /js/dias.js au template layout-archives-dias.
- Connecter /js/archive.js au templates (vide au debut)
- Connecter un premier fichier xy-dias-listes.js au fichier pug du plus récent  événement, qui contient une reportage.

**Chapitre archives ancien**

Il contient en moyenne 2 à 4 pages d'évènement ou d'annonces par an. 1 page en 2000, 2001, 2003, zéro en 2002 et plus que 5 dans une année. 

Les pages annonces contiennent du texte et une ou quelques images illustrant le texte. 

Les pages peuvent contenir des liens vers des pdf et des liens vers des sites externes. 

Les pages de photo reportage d'un événement contiennent surtout de photos et peu de texte. Les images peuvent être mis en vrac ou dans un diaporama ancien, à usage unique crée en js.

Lors de la migration, tous les reportages sont à mettre dans le même diaporama fournis.

**Tâches coté front: **

- Créer les layouts
- Créer les pugs
- Mettre du contenu sur les pages simples de plusieurs années récentes
- Diaporama: Créer un sous-dossier dans /images-news/année/numeroDeLEvenement avec les photos et une copie de dias-listes.js, urls et légendes de l'événement dans le fichier dias-listes.js
- Mettre des liens dans le nav, peut-être sur une div par année en vue d'ajout de fonction de recherche
- href du lien = nom du fichier, texte du lien est texte de l'ancien site
- Mettre les liens dans le tableau dans routes.js. Ecrire une boucle sur ce tableau pour la route. Tester l'affichage. En cas de problème, écrire des routes distinctes par lien, à changer ultérieurement.
- **Prochaine étape :** Voir étape 7 et 8 du Projet:  Faire le point ; adapter les stiles si nécessaire pour le fonctionnement. Décision structure 
- A faire entre-temps: créer des pug des annonces sans reportage. Imprimer ou copier dans un fichier la structure et l'annoter Fait / attente de diaporama / Problème survenu pour ...

**ATTENTION**: Les liens externes créeront des problèmes  en cas de sites html4 pas encore migrés,  dont un problème de sécurité pour les liens vers des pages http et pour des pages qui n'existent plus. Tester chaque lien et noter le problème.

Lire sur « CORS » et « no-referer » 

- Adapter les liens sur no-referer
- Réfléchir sur le code du serveur pour le cors problème