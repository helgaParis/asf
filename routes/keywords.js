/*  Ce module contient les keywords distincts pour l'archive, les 3 langues. 
    Construction: le router archive.js contient déjà des mots clés par langue, qui sont commun à toutes les pages;
    let keyf = "association, artistes, expositions, galerie, évenements, artistes sans frontières";
    pareil pour les autres langues. 
    Le module keywords definit 3 objets avec a:"nom du fichier" et k:"les keywords additionnels" 
    
    le module exporte les 3 objets
    Le router archive.js importe (requires) les objets. 
    Quand une page est appelé, il cherche l'index de la page (a) dans l'objet 
    et ajoute les keywords (k) de cet index aux keywords commun à toutes les pages (keyf)
    Attention: à cause de cette addition, keyf=kwf[i].k + " , " + keyf;  k se termine toujours avec un mot"   
    
*/

'use strict';

const keywordsF = [
    { a: "20-3", k: "exposition virtuelle Doug Petrovic, pandémie, accueil sur rendez-vous, nouveau stagiaire"},
    { a: "20-2", k: "fermeture, pandémie, accueil virtuel, horaires covid 19"},
    { a: "20-1", k: "exposition 2020, Ouverture de l'atelier, exposition Doug Petrovic"},
    { a: "19-6", k: "travaux en cours, nouveau sol"},
    { a: "19-5", k: "progés, fin de stage, nouveau stage, vider les lieux, sinistre" },
    { a: "19-4", k: "nouvel équipe, equipe engagé, nouveau site web, migration du site, Node.Js, sinistre, dégâts d'eau"},
    { a: "19-3", k: "annulation d'exposition"},
    { a: "19-2", k: "debut du projet, nouveau site, nouveau stagiaire, Saloum"},
    { a: "19-1", k: "annonces expos, portes ouvertes, 14 arts, nouveau site, offre, stagiaire"},
    { a:"18-1", k: "keywords français pour 18.1"},
    
    //2007 
    
    { a: "07-8", k: "photo du pot d'adieu, marchand de journaux" },
    { a: "07-7", k: "Exposition à la loft gallery Novembre 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos"},
    { a: "07-6", k: "annonce d'exposition 2007, fête de l'association 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos, Ulysse Belz, germany,fribourg" },
    { a: "07-5", k: "annonce d'exposition 2007, fête de l'association 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, peinture, Helga Strobl, photos, Ulysse Belz, germany,fribourg" },
    { a: "07-4", k: "Nouveau sit web, annonce d'exposition, Suzan Rasmussen, Cuchi White" }, 
    { a: "07-3", k: "Portes ouvertes mai 2007, paris, Roland Erguy, Val Gallard, Nicolas Ganter, Dirk Gruyters, Douglas Petrovic" }, 
    { a: "07-2", k: "Exposition  avril 2007, annonce d'exposition, galerie thuilier" }, 
    { a: "07-1", k: "Nouveau service 2007"},

    //2006
    
    { a:"06-14", k: "Exposition 2006, galerie, thuillier, exposition Pluvinage"},
    { a:"06-13", k: "Salon 2006, Salon Art du Nu, paris"},
    { a:"06-12", k: "Salon Art du Nu, Exposition Septembre 2006, stand, Artistes sans frontières"}, 
    { a:"06-11", k: "Salon d'automne 2006, Mairie 14ème, paris"},
    { a:"06-10", k: "finissage, exposition 2006, loftgallery"},
    { a:"06-9", k: "Exposition 2006, loftgallery"},
    { a:"06-8", k: "Annonces, Expositions 2006, Portes Ouvertes, paris"},
    { a:"06-7", k: "Tiki Joe, Paris 13ème, Août 2006"},
    { a:"06-6", k: "fête, Ascension, fête de l'ascension 2006"},
    { a:"06-5", k: "Annonces, Expositions 2006, Portes Ouvertes 2006, paris, Munich"},
    { a:"06-4", k: "Portes Ouvertes mai 2006, Artistes sans frontières"},
    { a:"06-3", k: "Exposition 2006, exposition de Roland Erguy"},
    { a:"06-2", K: "Annonces, Expositions 2006, Portes Ouvertes, paris"},
    { a:"06-1", k: "fête 2006, Nouveau site"},
    
    //2005
    
    { a: "05-11", k: "Exposition 2005, Portes ouvertes, Exposition à Sète, affiche, catherine pillas, Doug petrovic"},
    { a: "05-10", k: "Portes ouvertes 2005, Claire Pluvinage, Doug Petrovic"},
    { a: "05-9", k: "Portes ouvertes, ateliers d'artistes, paris, Pascal Plazanet, Claire Pluvinage,catherine pillas"},
    { a: "05-8", k: "salon des Arts, Mairie du 14e arrondissement, paris" },
    { a: "05-7", k: "Exposition, Doug petrovic, peinture,sculture,Suzan Rasmussen, peinture, gravure"},
    { a: "05-6", k: "Exposition 2005, exposition à la loftgallery, Roland Erguy"},
    { a: "05-5", k: "Exposition 2005, exposition à la loftgallery, Roland Erguy, suzan rasmussen,doug petrovic"},
    { a: "05-4", k: "Portes ouvertes 2005, exposition, ateliers du 14ème,Roland Erguy, suzan rasmussen,doug petrovic"},
    { a: "05-3", k: "invitation Who's who in international, Exposition 2005, Vernissage,peinture,sculpture,gravure"},
    { a: "05-2", K: "Exposition 2005, exposition à la loftgallery, Roland Erguy, Doug Petrovic"},
    { a: "05-1", k: "projets 2005,artiste, trimestre"},
    
    //2004
    
    { a: "04-3", k: "Portes Ouvertes 2004, exposition, musée Adzak, Doug Petrovic"},
    { a: "04-2", K: "Exposition 2004,Exposition à Sète 2004,affiche vernissage, musique" },
    { a: "04-1", k: "Portes Ouvertes 2004, ateliers du 14ème, tableaux, sculptures, Doug, Christian Polansek, Eveline Krischan "}
  
];

const keywordsE =[
    { a:"e20-1", k: "show 2020, reopening of the atelier, show Doug Petrovic"},


    //2007

    { a: "e07-8", k:"photo of the goodbye drink, newspaper merchant"},
    { a: "e07-7", k:"Exhibition at the loft gallery November 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos"},
    { a: "e07-6", k:"exhibition announcement 2007, association feast 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos, Ulysse Belz, germany,fribourg"},
    { a: "e07-5", k:"exhibition announcement 2007, association feast 2007, Roland Erguy, sculptures, Ada Villa, Douglas Petrovic, painting, Helga Strobl, photos, Ulysse Belz, germany,fribourg"},
    { a: "e07-4", k:"New website, exhibition announcement, Suzan Rasmussen, Cuchi White"},
    { a: "e07-3", k:"Open Doors May 2007, 14th arrondissement, paris, Roland Erguy, Val Gallard, Nicolas Ganter, Dirk Gruyters, Douglas Petrovic"},
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
    { a:"d20-1", k: "Ausstellung 2020, Wiedereröffnung des Ateliers, Ausstellung Doug Petrovic"},
];

module.exports = {
   keywordsF:keywordsF,
   keywordsE:keywordsE,
   keywordsD:keywordsD
};