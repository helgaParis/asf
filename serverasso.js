'use strict';

const express = require('express');
const app = express();
const path = require('path');
//dynamic routes via router
const site = require('./routes/site');
const galerie = require('./routes/galerie');
const past = require('./routes/archive');

const http = require('http').Server(app);


const session = require('express-session');
const uuidv1 = require('uuid/v1');

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Gestion des fichiers statiques
app.use('/css', express.static(__dirname + '/sources/css'));
app.use('/js', express.static(__dirname + '/sources/js'));
app.use('/images', express.static(__dirname + '/sources/images'));
app.use('/photos', express.static(path.join(__dirname +'/sources/photos')));
app.use('/pdf', express.static(path.join(__dirname +'/sources/pdf')));

//View engine for pug files
app.set('view engine', 'pug');
app.set('views',  './public/views');


//////  les reponses /////
// Gestion des routes /…

//une route pour la periode de transit pour la partie ancienne (graffel=bric à brac)
app.get('/graffel' , function (req, res,next) {
    res.sendFile('node-index.html', {root:'./public/html/'}); //marche avec le point, pas sans
  });

 /*
app.get('/index.html' , function (req, res) {
    res.sendFile('node-index.html', {root:'./public/html/'});
  });
*/

// Routers for dynamic files (site=everything asso, gallery=artists, past=archive)

app.use('/galerie', galerie);
app.use ('/news', past);
app.use('/',site);

app.use(express.static(path.join(__dirname, './public/html/')));

//le fichier 404
app.get('*',function (req, res, next) {
	return res.status(404).sendFile('404.html', {root:'./public/html/err/'});
});
app.listen(8080,function() {   
    console.log('serveur http disponible port 8080');
});