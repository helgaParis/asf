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
    { a:"20-3", k: "exposition virtuelle Doug Petrovic, pandémie, accueil sur rendez-vous, nouveau stagiaire"},
    { a:"20-2", k: "ferméture, pandémie, accueil virtuel, horaires covid 19"},
    { a:"20-1", k: "exposition 2020, Ouverture de l'atelier, exposition Doug Petrovic"},
    { a:"19-6", k: "travaux en cours, nouveau sol"},
    { a:"19-5", k: "progès, fin de stage, nouveau stage, vider les lieux, sinistre"},
    { a:"19-4", k: "nouvel équipe, equipe engagé, nouveau site web, migration du site, Node.Js, sinistre, dégâts d'eau"},
    { a:"19-3", k: "annulation d'exposition"},
    { a:"19-2", k: "debut du projet, nouveau site, nouveau stagiaire, Saloum"},
    { a:"19-1", k: "annonces expos, portes ouvertes, 14 arts, nouveau site, offre, stagiaire"}
    
    
    

    
];

const keywordsE =[
    { a:"e20-1", k: "show 2020, reopening of the atelier, show Doug Petrovic"},
];
const keywordsD = [
    { a:"d20-1", k: "Ausstellung 2020, Wiedereröffnung des Ateliers, Ausstellung Doug Petrovic"},
];

module.exports = {
   keywordsF:keywordsF,
   keywordsE:keywordsE,
   keywordsD:keywordsD
};