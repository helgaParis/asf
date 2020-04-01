'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//dynamic routes via router
const site = require('./routes/site');
const galerie = require('./routes/galerie');
const archive = require('./routes/archive');

const http = require('http').Server(app);


const session = require('express-session');
const uuidv1 = require('uuid/v1');



//const db = require('./db/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Gestion des fichiers statiques - 
app.use(express.static('sources'));
app.use(express.static('public'));

app.use('/css', express.static('/sources/css'));
app.use('/js', express.static('/sources/js'));
app.use('/images', express.static('/sources/images'));
app.use('/images-galerie', express.static('/sources/images-galerie'));
app.use('/images-news', express.static('/sources/images-news'));
app.use('/photos', express.static('/sources/photos'));
app.use('/pdf', express.static('/sources/pdf'));
app.use('/html', express.static(path.join(__dirname, 'public/html')));



//View engine for pug files
app.set('view engine', 'pug');
app.set('views',  './public/views');




//////  les reponses /////
// Gestion des routes 


// Routers for dynamic files (site=everything asso, gallery=artists, past=archive)

app.use('/galerie', galerie);
app.use ('/archive', archive.router);
app.use('/site',site);




app.get('/',function(req,res,next) {
    res.render('index',{title:'Artistes sans Frontières - des sites artistiques pour des artistes !', canon:"https://artistessansfrontieres.fr/index"});
});
app.get('/d-index',function(req,res,next) {
  res.render('d-index',{title:'Artistes sans Frontières - Kunst Websiten für Künstler !',  canon:"https://artistessansfrontieres.fr/d-index"});
});
app.get('/e-index',function(req,res,next) {
    res.render('e-index',{title:'Artistes sans Frontières - artistic websites for artists !', canon:"https://artistessansfrontieres.fr/e-index"});
});
  app.get('/index',function(req,res,next) {
    res.render('index',{title:'Artistes sans Frontières - Sites Internet pour des artistes !', canon:"https://artistessansfrontieres.fr/index"});
});


app.use(function(req, res, next){
    res.status(404).render('404', {title: "Sorry, page not found -  page introuvable" });
});
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('505', {title:'500: Internal Server Error', error: error});
});

app.listen(8080,function() {   
    console.log('serveur http disponible port 8080');
});