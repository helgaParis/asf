/*  Ce module contient les keywords distincts pour l'archive, les 3 langues. 
    Construction: le router archive.js contient déjà des mots clés par langue, qui sont commun à toutes les pages;
    let keyf = "association, artistes, expositions, galerie, évenements, artistes sans frontières";
    pareil pour les autres langues. 
    Le module keywords definit 3 objets avec a:"nom du fichier" et k:"les keywords additionnels" 
    
    le module exporte les 3 objets
    Le router archive.js importe (requires) les objets. 
    Quand une page est appelée, il cherche l'index de la page (a) dans l'objet 
    et ajoute les keywords (k) de cet index aux keywords commun à toutes les pages (keyf)
    Attention: à cause de cette addition, keyf=kwf[i].k + " , " + keyf;  k se termine toujours avec un mot, pas une virgule"   
    
*/


'use strict';

const keywordsF = [
   { a: "21-1", k: "Projets 2021, heures d'ouverture, recherche stagiaires"},
   
    { a: "20-5", k: "nouveau site web, conseil du quartier Jean Moulin Porte d'Orléans, nouveau film, Body&Art, ZKM, Fatma-Zohra Zamoum, Karlsruhe, film et entretien"},
    { a: "20-4", k: "3 stagiaires, nouveau projet, site stagiaires, espace stagiaires, pandémie, accueil sur rendez-vous"},
    { a: "20-3", k: "exposition virtuelle Doug Petrovic, pandémie, accueil sur rendez-vous, nouveau stagiaire"},
    { a: "20-2", k: "fermeture, pandémie, accueil virtuel, horaires covid 19"},
    { a: "20-1", k: "exposition 2020, Ouverture de l'atelier, exposition Doug Petrovic"},

    { a: "19-6", k: "travaux en cours, nouveau sol"},
    { a: "19-5", k: "progés, fin de stage, nouveau stage, vider les lieux, sinistre" },
    { a: "19-4", k: "nouvel équipe, equipe engagé, nouveau site web, migration du site, Node.Js, sinistre, dégâts d'eau"},
    { a: "19-3", k: "annulation d'exposition"},
    { a: "19-2", k: "debut du projet, nouveau site, nouveau stagiaire, Saloum"},
    { a: "19-1", k: "annonces expos, portes ouvertes, 14 arts, nouveau site, offre, stagiaire"},

    // 2018 à 2011

    { a: "18-3", k: "les 14 arts 2018, art urbain, ateliers d'artistes, exposition, paris"},
    { a: "18-2", k: "les 14 arts 2018, annonces d'expositions, portes ouvertes, ateliers d'artistes, doug petrovic, suzan rasmussen, helga strobl, fatma-zohra zamoun, paris"},
    { a: "18-1", k: "Hommage, Paolo Boni, 2018"},

    { a: "17-2", k: "portes ouvertes, annonces d'expositions, ateliers d'artistes, doug petrovic, suzan rasmussen, helga strobl, paris, 2017"},
    { a: "17-1", k: "salon des photographes, mois de la photo à paris, inspirations, helga strobl, paris, 2017"},

    { a: "16-3", k: "rencontres d'artistes, dessinateurs, photographes, Alexandre Froment, Germain Kouassi, Françoise Orbey, Doug Petrovic, Suzan Rasmussen, Shannon Reggaro, Helga Strobl, annonce d'expositions, paris, 2016"},
    { a: "16-2", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, Rick Emory, Doug Petrovic, Suzan Rasmussen, Shannon Reggaro, Helga Strobl, photographie, peinture, sculpture, paris, 2016"},
    { a: "16-1", k: "artiste en résidence, Shannon Reggaro, atelier de l'association, Sète, annonce d'expositions, 2016"},

    { a: "15-2", k: "portes ouvertes, ateliers d'artistes, Doug Petrovic Mary Quartarone, Suzan Rasmussen, Helga Strobl, peinture, gravure, sculptures, photographie, exposition, paris, 2015"},
    { a: "15-1", k: "portes ouvertes, ateliers d'artistes, Doug Petrovic Mary Quartarone, Suzan Rasmussen, Helga Strobl, peinture, gravure, sculptures, photographie, exposition, arrêt de train, milburn heights, aquarelle, creation, sans titre, huile sur toile, paris, 2015"},

    { a: "14-3", k: "mois de la photo européen, paris, helga strobl, photographie, annonce d'expositions, vue du ciel, 2014"},
    { a: "14-2", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, peinture, sculpture, film, gravure, photographie, Auguste, perroquet, paris, 2014"},
    { a: "14-1", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, peinture, sculptures, gravure, photographie, film, Auguste, perroquet, huiles, blue woman, vue du ciel, histoire de terres, court-métrages, paris, 2014"},

    { a: "13-2", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, peinture, sculptures, gravure, photographie, film, paris, 2013"},
    { a: "13-1", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, peinture, sculptures, gravure, photographie, film, association littéraire, partenaire, les amis du roi des aulnes, LITTERall, appel à candidature, Goethe Institut, programmation culturelle, recherche de stagiaire, paris, 2013"},

    { a: "12-4", k: "mois de la photo à paris, salon des photographes, traces et pérégrinations, helga strobl, elisa souche, vernissage, paris, 2012"},
    { a: "12-3", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, exposition photo, paris, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2012"},
    { a: "12-2", k: "portes ouvertes, ateliers d'artistes, annonce d'expositions, exposition photo, paris, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2012"},
    { a: "12-1", k: "changement de bureau, décès, président-fondateur, Douglas Petrovic, nouveau bureau de l'association, élu, Helga Strobl, présidente, Alain Pasquier, vice-président, Ferdinand Winkler, trésorier et secrétaire, notice aux membres, 2012, annonce d'expositions, portes ouvertes des ateliers d'artistes, paris, Roland Erguy, Doug Petrovic, Helga Strobl, exposition photo, mois de la photo"},

    { a: "11-4", k: "décès, président des Artistes sans Frontières, Douglas Petrovic, notice aux membres, assemblée générale extraordinaire, sète, propositions, questions, souvenirs, 2011"},
    { a: "11-3", k: "portes ouvertes, ateliers d'artistes, paris, annonce d'expositions, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2011"},
    { a: "11-2", k: "membre, Lihidheb Mohsen, tunisie, liberté, bataille, dictat, reconstruction, Doug Petrovic, huiles, annonce d'expositions, grand hôtel, Sète, 2011"},
    { a: "11-1", k: "exposition douglas petrovic, daudet, 2010, 2011, hiver"},
    
    //2007 
    
    { a: "07-8", k: "pot d'adieu, marchand de journaux" },
    { a: "07-7", k: "Exposition à la loft gallery, Novembre 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos"},
    { a: "07-6", k: "annonce d'exposition 2007, fête de l'association 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos, Ulysse Belz, fribourg" },
    { a: "07-5", k: "annonce d'exposition 2007, fête de l'association 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos, Ulysse Belz" },
    { a: "07-4", k: "Nouveau sit web, annonce d'exposition, Suzan Rasmussen, Cuchi White" }, 
    { a: "07-3", k: "Portes ouvertes mai 2007, Paris, Roland Erguy, Val Gallard, Nicolas Ganter, Dirk Gruyters, Douglas Petrovic, Ada Villa" }, 
    { a: "07-2", k: "Exposition  avril 2007, annonce d'exposition, Gabriel Gebka, Frevarias, Galerie 3F" }, 
    { a: "07-1", k: "Nouveau service 2007"},

    //2006
    
    { a:"06-14", k: "Exposition 2006, galerie Thuillier, exposition Claire Pluvinage"},
    { a:"06-13", k: "Salon 2006, Salon Art du Nu, Paris"},
    { a:"06-12", k: "Salon Art du Nu, Exposition Septembre 2006, stand, Doug Petrovic, Suzan Rasmussen"}, 
    { a:"06-11", k: "Salon d'automne 2006, Mairie 14ème, Paris, Doug Petrovic, Suzan Rasmussen"},
    { a:"06-10", k: "finissage, exposition 2006, loftgallery, Roland Erguy, Doug Petrovic, Suzan Rasmussen"},
    { a:"06-9", k: "Exposition 2006, Loftgallery, Roland Erguy, Doug Petrovic, Suzan Rasmussen"},
    { a:"06-8", k: "Annonces, Expositions 2006, Portes Ouvertes, Paris, Nicolas Ganter, Suzan Rasmussen, Roland Erguy, Doug Petrovic, Cathérine Pillas"},
    { a:"06-7", k: "Tiki Joe, Paris 13ème, Août 2006"},
    { a:"06-6", k: " fête de l'association 2006"},
    { a:"06-5", k: "Annonces, Expositions 2006, Portes Ouvertes 2006, Paris, Munich, Ulysses Belz, Nicolas Ganter, Suzan Rasmussen, Roland Ergy, Doug Petrovic, Art du Nu, Cathérine Pillas"},
    { a:"06-4", k: "Portes Ouvertes mai 2006, Roland Erguy, Nicolas Ganter, Doug Petrovic"},
    { a:"06-3", k: "Exposition 2006, exposition de Roland Erguy, Zemrina"},
    { a:"06-2", K: "Annonces, Expositions 2006, Portes Ouvertes, Paris, Ulysses Belz, Suzan Rasmussen, Doug Petrovic, Roland Erguy, Nicolas Ganter, Ahmed Tajuddin, Valerie Gallard, Germain Kouassi, Pascal Plazanet"},
    { a:"06-1", k: "fête de l'association 2006, Nouveau site Internet"},
    
    //2005
    
    { a: "05-11", k: "Exposition 2005, Portes ouvertes, Exposition à Sète, affiche, Catherine Pillas, Doug Petrovic"},
    { a: "05-10", k: "Portes ouvertes 2005, Claire Pluvinage, Doug Petrovic"},
    { a: "05-9", k: "Portes ouvertes, ateliers d'artistes, Paris, Pascal Plazanet, Claire Pluvinage, Catherine Pillas"},
    { a: "05-8", k: "Salon des Arts, Mairie du 14e arrondissement, Paris, Doug Petrovic, Roland Erguy, Nicholas Wright" },
    { a: "05-7", k: "Exposition, Doug Petrovic, Suzan Rasmussen, peinture, sculture, gravure, Marché d'Art Pont Audemer"},
    { a: "05-6", k: "Exposition 2005, exposition à la loftgallery, Roland Erguy"},
    { a: "05-5", k: "Exposition 2005, exposition à la loftgallery, Roland Erguy, Suzan Rasmussen, Doug Petrovic"},
    { a: "05-4", k: "Portes ouvertes 2005, ateliers du 14ème, Roland Erguy, Suzan Rasmussen, Doug Petrovic"},
    { a: "05-3", k: "invitation Who's who in international, Exposition 2005, Vernissage, peinture, sculpture, gravure, Pascal Plazanet"},
    { a: "05-2", K: "Exposition 2005, exposition à la loftgallery, Roland Erguy, Doug Petrovic"},
    { a: "05-1", k: "projets 2005, artiste peintre, artiste de l'année, Tajuddin Ahmed"},
    
    //2004
    
    { a: "04-3", k: "Portes Ouvertes 2004, exposition, musée Adzak, Doug Petrovic, Tajuddin Ahmed"},
    { a: "04-2", K: "Exposition à Sète 2004, Doug Petrovic, affiche vernissage, musique" },
    { a: "04-1", k: "Portes Ouvertes 2004, ateliers du 14ème, tableaux, sculptures, Doug Petrovic, Christian Polansek, Eveline Krischan "}
  
];

const keywordsE =[
   { a: "e21-1", k: "Projects 2021, opening hours, internships offered"},
    
    { a: "e20-5", k: "new website, neighborhood council, new film, Body&Art, ZKM, Fatma-Zohra Zamoum, Karlsruhe, film and interview"},
    { a: "e20-4", k: "3 interns, new projet, website interns, virtual space intern, pandemic, reception on appointment"},
    { a: "e20-3", k: "virtual show Doug Petrovic, pandemic, reception on appointment, new intern"},
    { a: "e20-2", k: "administrative closure, pandemic, virtual reception, opening hours covid 19"},
    { a: "e20-1", k: "show 2020, reopening of the atelier, show Doug Petrovic"},

    { a: "e19-6", k: "construction work in progres, new flor"},
    { a: "e19-5", k: "progres, end of internship, new intern, clean out office space, flooding" },
    { a: "e19-4", k: "new team, motivated team, new website, migration of the website, Node.Js, flooding, water damage"},
    { a: "e19-3", k: "show cancelled"},
    { a: "e19-2", k: "new project, new website, new intern, Saloum"},
    { a: "e19-1", k: "announcements shows, open doors, 14 arts, new website,  new offer, intern"},

    { a: "e18-1", k: "Hommage, Paolo Boni"},

    // 2018 to 2011

    { a: "18-3", k: "14 arts 2018, map of events, urban art, artists' workshops, exposition, paris"},
    { a: "18-2", k: "14 arts 2018, exhibition announcements, open doors, artists' workshops, doug petrovic, suzan rasmussen, helga strobl, fatma-zohra zamoun, paris"},
    { a: "18-1", k: "tribute, Paolo Boni, 2018"},

    { a: "17-2", k: "open doors, exhibition announcements, artists' workshops, doug petrovic, suzan rasmussen, helga strobl, paris, 2017"},
    { a: "17-1", k: "photographers' salon, photo month, paris, inspirations, exhibition, helga strobl, paris, 2017"},

    { a: "16-3", k: "artists meeting, designers, photographers, Alexandre Froment, Germain Kouassi, Françoise Orbey, Doug Petrovic, Suzan Rasmussen, Shannon Reggaro, Helga Strobl, exhibition announcements, paris, 2016"},
    { a: "16-2", k: "open doors, artists' workshops, exhibition announcements, Rick Emory, Doug Petrovic, Suzan Rasmussen, Shannon Reggaro, Helga Strobl, photography, painting, sculpture, paris, 2016"},
    { a: "16-1", k: "artist in residence, Shannon Reggaro, association, workshop, Sète, exhibition announcements, 2016"},

    { a: "15-2", k: "open doors, artists' workshops, Doug Petrovic Mary Quartarone, Suzan Rasmussen, Helga Strobl, painting, engraving, sculpture, photography, exposition, paris, 2015"},
    { a: "15-1", k: "open doors, artists' workshops, Doug Petrovic Mary Quartarone, Suzan Rasmussen, Helga Strobl, painting, engraving, sculpture, photography, exposition, arrêt de train, milburn heights, water color, creation, sans titre, oil on canvas, paris, 2015"},

    { a: "14-3", k: "european photo month, paris, helga strobl, photography, exhibition announcements, the sky, 2014"},
    { a: "14-2", k: "open doors, artists' workshops, exhibition announcements, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, painting, sculpture, film, engraving, photography, clown, Auguste, parrot, paris, 2014"},
    { a: "14-1", k: "open doors, artists' workshops, exhibition announcements, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, painting, sculpture, engraving, photography, film, clown, Auguste, parrot, oil on canvas, blue woman, seen from the sky, azib zammoum, histoire de terres, paris, 2014"},

    { a: "13-2", k: "open doors, artists' workshops, exhibition announcements, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, painting, sculpture, engraving, photography, film, paris, 2013"},
    { a: "13-1", k: "open doors, artists' workshops, exhibition announcements, Doug Petrovic, Mary Quartarone, Suzan Rasmussen, Helga Strobl, Fatma-Zohra Zamoum, painting, sculpture, engraving, photography, film, litterature association, partner, les amis du roi des aulnes, LITTERall, appel à candidature, Goethe Institut, programmation culturelle, recherche de stagiaire, trainee, paris, 2013"},

    { a: "12-4", k: "photo month, paris, photographers' salon, traces et pérégrinations, helga strobl, elisa souche, vernissage, exhibition poster, paris, 2012"},
    { a: "12-3", k: "open doors, artists' workshops, exhibition announcements, photo shows, paris, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2012"},
    { a: "12-2", k: "open doors, artists' workshops, exhibition announcements, photo shows, paris, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2012"},
    { a: "12-1", k: "change of board, death, founder, president, Douglas Petrovic, new board, association, chosen, Helga Strobl, president, Alain Pasquier, vice-president, Ferdinand Winkler, treasurer et secretary, members, Douglas's adventure, 2012, exhibition announcements, open doors, artists' workshops, paris, Roland Erguy, Doug Petrovic, Helga Strobl, photo shows, photo month"},

    { a: "11-4", k: "death, president of Artistes sans Frontières, Douglas Petrovic, commemoration, bar restaurant, daudet, members, Douglas' adventure, assemblée générale extraordinaire, sète, propositions, questions, souvenirs, 2011"},
    { a: "11-3", k: "open doors, artists' workshops, paris, exhibition announcements, Roland Erguy, Doug Petrovic, Suzan Rasmussen, Helga Strobl, 2011"},
    { a: "11-2", k: "member, Lihidheb Mohsen, tunisie, liberté, bataille, dictat, reconstruction, Doug Petrovic, oil on canvas, exhibition announcements, grand hôtel, Sète, 2011"},
    { a: "11-1", k: "exposition douglas petrovic, bar restaurant, daudet, 2010, 2011, winter"},
    


    //2010

    { a: "e10-8", k:"photos of Doug Petrovic\'s exhibition"},
    { a: "e10-7", k:"photos of Salon de la photo in Town hall of 14e, Paris, 2010"},
    { a: "e10-6", k:"Exhibitions in winter 2010 / 2011, Doug Petrovic gouaches and oil paintings"},
    { a: "e10-5", k:" mois de la photo and Helga Strobl, Doug Petrovic gouaches and drawings, Roland Erguy"},
    { a: "e10-4", k:"Open Days in the workshops of contemporary artists in 14e in Paris"},
    { a: "e10-3", k:"Doug Petrovic exhibits in China"},
    { a: "e10-2", k:"Exhibitions 2010, Open Days in the workshops of contemporary artists in 14e in Paris,  Parc Floral de Paris, BASE’ART, Le Festival, Doug Petrovic exhibits in China"},
    { a: "e10-1", k:"Exhibition 2010, Open Days \"Portes Ouvertes du 14e\", Paris, Doug Petrovic exhibits in China"},


    //2009

    { a: "e09-10", k:"Exhibition 2009, Carole Freva"},
    { a: "e09-9", k:"African childhood day \"Journée de l\'enfance africaine\" 2009"},
    { a: "e09-8", k:"Exhibition Roland Erguy, Sur le fil de la pointe et du burin"},
    { a: "e09-7", k:"Exhibition October 2009, Laurent Loizeau, Exposition Doug Petrovic, Helga Strobl"},
    { a: "e09-6", k:"Exhibition Doug Petrovic, Helga Strobl"},
    { a: "e09-5", k:"Exhibition Roland Erguy, Exhibition Doug Petrovic, Helga Strobl"},
    { a: "e09-4", k:"Open Days \"Portes Ouvertes du 14e\", Paris, June 2009"},
    { a: "e09-3", k:"Open Days \"Portes Ouvertes du 14e\", Paris"},
    { a: "e09-2", k:"Open Days \"Portes Ouvertes du 14e\", Exhibition Gabriella Carbone, photographs"},
    { a: "e09-1", k:"Next exhibitions 2009 Gabriella Carbone, Open Days  \"Portes Ouvertes du 14e\", Paris"},

    
    //2007

    { a: "e07-8", k:"photo of the goodbye drink, newspaper merchant"},
    { a: "e07-7", k:"Exhibition at the loft gallery November 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos"},
    { a: "e07-6", k:"exhibition announcement 2007, association feast 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos, Ulysse Belz"},
    { a: "e07-5", k:"exhibition announcement 2007, association feast 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos, Ulysse Belz"},
    { a: "e07-4", k:"New website, exhibition announcement, Suzan Rasmussen, Cuchi White"},
    { a: "e07-3", k:"Open Doors May 2007, 14th arrondissement, Paris, Roland Erguy, Val Gallard, Nicolas Ganter, Dirk Gruyters, Douglas Petrovic"},
    { a: "e07-2", k:"Exhibition April 2007, exhibition announcement, galerie thuilier"},
    { a: "e07-1", k:"New service 2007"},

    //2006

    { a:"e06-14", k: "Exhibition 2006, gallery, thuillier, exhibition Pluvinage" },
    { a:"e06-13", k: "Salon 2006, Salon Art du Nu, paris" },
    { a:"e06-12", k: "Salon Art du Nu, Exhibition September 2006, stand, Artistes sans frontières" },
    { a:"e06-11", k: "Salon Autumn 2006, Mairie 14th, Paris"},
    { a:"e06-10", k: "finishing, exhibition 2006, loftgallery" },
    { a:"e06-9", k: "exhibition 2006, loftgallery" },
    { a:"e06-8", k: "Announcements, Exhibitions 2006, Open Doors, Paris" },
    { a:"e06-7", k: "Tiki Joe, Paris 13th, August 2006" },
    { a:"e06-6", k: "party, Ascension , Ascension party 2006" },
    { a:"e06-5", k: "Announcements, Exhibitions 2006, Open Doors 2006, Paris, Munich" },
    { a:"e06-4", k: "Open Doors May 2006, Artistes sans frontières" },
    { a:"e06-3", k: "Exhibition 2006, exhibition of Roland Erguy" },
    { a:"e06-2", K: "Announcements, Exhibitions 2006,Open Doors, Paris," },
    { a:"e06-1", k: "party 2006, New site" },


    //2005
    { a: "e05-11", k: "Exhibition 2005, Open doors, Exhibition in Sète, poster, catherine pillas, Doug petrovic" },
    { a: "e05-10", k: "Open Doors 2005, Claire Pluvinage, Doug Petrovic" },
    { a: "e05-9", k: "Open doors, artists studios, paris, Pascal Plazanet, Claire Pluvinage,catherine pillas" },
    { a: "e05-8", k: "salon des Arts, Mairie of 14th arrondissement, paris" },
    { a: "e05-7", k: "Exhibition, Doug petrovic, painting, sculpture, Suzan Rasmussen, painting, engraving" },
    { a: "e05-6", k: "Exhibition 2005, exhibition at the loftgallery, Roland Erguy" },
    { a: "e05-5", k: "Exhibition 2005, exhibition at the loftgallery, Roland Erguy, suzan rasmussen,doug petrovic" },
    { a: "e05-4", k: "Open doors 2005, exhibition, 14th arrondissement, Roland Erguy, suzan rasmussen, doug petrovic" },
    { a: "e05-3", k: "invitation Who's who in international, Exhibition 2005, Vernissage,painting,sculpture,engraving" },
    { a: "e05-2", K: "Exhibition 2005, exhibition at the loftgallery, Roland Erguy, Doug Petrovic" },
    { a: "e05-1", k: "projects 2005, artist, trimester"},


    //2004
    { a: "e04-3", k: "Open Doors 2004, exhibition, Adzak Museum, Doug Petrovic" },
    { a: "e04-2", K: "Exhibition 2004,Exhibition in Sète 2004,poster vernissage, music" },
    { a: "e04-1", k: "Portes Ouvertes 2004, 14th arrondissement, paintings, sculptures, Doug, Christian Polansek, Eveline Krischan" }

];
const keywordsD = [
   { a: "d21-1", k: "Projekte 2021,Öffunfszeiten, Praktika"},
    
    { a: "d20-5", k: "neue Website, Nachbarschaftsrat, neuer Film, Kunstfilm, Body&Art, ZKM, Fatma-Zohra Zamoum, Karlsruhe, Film und Gespräch"},
    { a: "d20-4", k: "3 Praktikanten, Auszubildende, neues Projekt, Website Praktikanten, virtueller Bereich der Praktikanten, Pandemie, Empfang nach Terminvereinbarung"},
    { a: "d20-3", k: "Virtuelle Ausstellung Doug Petrovic, Pandemie, Empfang nach Terminvereinbarung,neuer Praktikant, Auszubildender"},
    { a: "d20-2", k: "Schliessung, Pandemie, Empfang nach Terminvereinbarung, Geschäftszeiten Covid 19"},
    { a: "d20-1", k: "Ausstellung 2020, Wiedereröffnung des Ateliers, Ausstellung Doug Petrovic"},

    { a: "d19-6", k: "Bauarbeiten, neuer Boden"},
    { a: "d19-5", k: "Fortschritte, Ende des Praktikums, neuer Praktikant, Auszubildender, Wasserschaden, leere Räume" },
    { a: "d19-4", k: "neues Team, engagiertes Team, neue Website,  Node.Js, Wasserschaden"},
    { a: "d19-3", k: "Ausstellung Absage"},
    { a: "d19-2", k: "neues Projekt, neue Website, neuer Praktikant, , Auszubildender, Saloum"},
    { a: "d19-1", k: "Ausstellungs Ankündigungen, Offene Türen, 14 arts, neue Website, neues Angebot, Praktikant, Auszubildender"},

    { a: "d18-1", k: "Hommage, Paolo Boni"},




    //2010

    { a: "e10-8", k:"Fotos der Ausstellung Doug Petrovic"},
    { a: "e10-7", k:"Fotos von Salon de la photo du 14e, 2010"},
    { a: "e10-6", k:"Ausstellungen Winter 2010 / 2011, Doug Petrovic Gouachen und Ölbilder"},
    { a: "e10-5", k:"\"Mois de la Photo\", Monat der Fotografie und Helga Strobl, Doug Petrovic Gouachen und Zeichnungen, Roland Erguy"},
    { a: "e10-4", k:"Open Days in the workshops of contemporary artists in 14e in Paris"},
    { a: "e10-3", k:"Doug Petrovic exhibits in China"},
    { a: "e10-2", k:"Exhibitions 2010, Open Days in the workshops of contemporary artists in 14e in Paris,  Parc Floral de Paris, BASE’ART, Le Festival, Doug Petrovic exhibits in China"},
    { a: "e10-1", k:"Exhibition 2010, Open Days \"Portes Ouvertes du 14e\", Paris, Doug Petrovic exhibits in China"},


    //2009

    { a: "e09-10", k:"Ausstellung 2009, Carole Freva"},
    { a: "e09-9", k:" Afrikanischer Kindheitstag \"Journée de l\'enfance africaine\" 2009"},
    { a: "e09-8", k:"Ausstellung Roland Erguy, Sur le fil de la pointe et du burin"},
    { a: "e09-7", k:"Ausstellung Oktober 2009, Laurent Loizeau, Ausstellung Doug Petrovic, Helga Strobl"},
    { a: "e09-6", k:"Ausstellung Doug Petrovic, Helga Strobl"},
    { a: "e09-5", k:"Ausstellung Roland Erguy, Ausstellung Doug Petrovic, Helga Strobl"},
    { a: "e09-4", k:"Offene Türen im 14. Arondissement von Paris, Juni 2009"},
    { a: "e09-3", k:"Offene Türen im 14. Arondissement von Paris"},
    { a: "e09-2", k:"Offene Türen im 14. Arondissement von Paris, Ausstellung Gabriella Carbone, Fotos"},
    { a: "e09-1", k:"Nächste Ausstellungen 2009 Gabriella Carbone, Offene Türen im 14.Arondissement von Paris"},

    //2008

    { a: "e08-4", k:"Fotos von der Veranstaltung und Teilnehmer während des Offene Türen 14ème arrondissement September 2008 : Fatma-Zohra Zamoum, Roland Erguy, Germain Kouassi, Helga Strobl, Douglas \"Doug\" Petrovic, Jochen Schwertfeger"},
    { a: "e08-3", k:"Neue Website und Nächste Ausstellungen 2008, Offene Türen in Paris und Sète"},
    { a: "e08-2", k:"Nächste Ausstellungen 2008, Germain Kouassi, Doug Petrovic, Jochen Schwertfeger, Roland Erguy, Helga Strobl, Fatma-Zohra Zamoum"},
    { a: "e08-1", k:"Nächste Ausstellungen 2008 Rangel Amorim, Dreharbeiten zum Film Bunker, Nicolas Ganter"},

    //2007

    { a: "e07-8", k:"photo of the goodbye drink, newspaper merchant"},
    { a: "e07-7", k:"Fotos von der Veranstaltung und Teilnehmer während Loft Gallery 2007 : Roland Erguy, Ada Villa, Douglas Petrovic et Helga Strobl"},
    { a: "e07-6", k:"Nächste Ausstellungen 2007, Roland Erguy, Ada Villa, Douglas Petrovic, , Helga Strobl, Ulysse Belz"},
    { a: "e07-5", k:"Fotos von der Veranstaltung und Teilnehmer während Das Sommerfest der Association"},
    { a: "e07-4", k:"Nächste Ausstellungen 2007"},
    { a: "e07-3", k:"Fotos von der Veranstaltung und Teilnehmer während des Offene Türen 14ème arrondissement Mai 2007 : Roland Erguy, Val Gallard, Nicolas Ganter, Dirk Gruyters, Douglas \"Doug\" Petrovic"},
    { a: "e07-2", k:"Ausstellungen 2007 : Gabriel Gebka et Frevarias"},
    { a: "e07-1", k:"Neues Service, 2007"},

    //2006

    { a:"e06-14", k: "Fotos von der Veranstaltung und Teilnehmer Ausstellung 2006 : Claire Pluvinage" },
    { a:"e06-13", k: "Salon 2006, Salon Art du Nu, paris" },
    { a:"e06-12", k: "Fotos von der Veranstaltung und Teilnehmer am Salon Art du Nu 2006 : Airelle, Douglas \"Doug\" Petrovic, Suzan Rasmussen" },
    { a:"e06-11", k: "Fotos von der Veranstaltung und Teilnehmer am Salon d\'automne de la mairie du XIV : Airelle, Douglas \"Doug\" Petrovic, Suzan Rasmussen"},
    { a:"e06-10", k: "Fotos von der Veranstaltung und Teilnehmer Loft Gallery : Roland Erguy, Douglas \"Doug\" Petrovic, Suzan Rasmussen" },
    { a:"e06-9", k: "Fotos von der Veranstaltung und Teilnehmer  Loft Gallery : Roland Erguy, Douglas \"Doug\" Petrovic, Suzan Rasmussen" },
    { a:"e06-8", k: "Nächste Ausstellungen  2006" },
    { a:"e06-7", k: "Fotos von der Veranstaltung und Teilnehmer Tiki Joe 2006" },
    { a:"e06-6", k: "Fotos von der Veranstaltung und Teilnehmer während des Fest der Association 2006" },
    { a:"e06-5", k: "Nächste Ausstellungen 2006" },
    { a:"e06-4", k: "Fotos von der Veranstaltung und Teilnehmer während des Offene Türen , \"les Portes Ouvertes du 14e\" 2006 : Roland Erguy, Nicolas Ganter, Doug Petrovic" },
    { a:"e06-3", k: "Fotos von der Veranstaltung und Teilnehmer während des Roland Erguy, Zemrina Ausstellung 2006" },
    { a:"e06-2", K: "Nächste Ausstellungen 2006" },
    { a:"e06-1", k: "Neue Website, Fotos von des improvisiertes Fest" },


];

module.exports = {
   keywordsF:keywordsF,
   keywordsE:keywordsE,
   keywordsD:keywordsD
};