'use strict';

var express = require('express')

/// *** Partie de la base de données  *** /// 

// glob = require('glob'),
// mongoose = require('mongoose');
// //mongoose.connect(config.db);
// var mongoose = require('mongoose');
// var mongoURI = 'mongodb://localhost/manao';
// mongoose.connect(process.env.MONGOLAB_URI || mongoURI);
// //mongoose.connect("mongodb://localhost/balademap");

// var db = mongoose.connection;
// db.on('error', function() {
// 	throw new Error('unable to connect to database at ');
// });

/// *** Partie de la webapp sauf les routes   *** /// 

var app = express();

//require('./config/express')(app);
//require('./config/routes')(app);


var port = process.env.PORT || 3000;
var server = app.listen(port);

// var io = require('socket.io').listen(server);
// var routeSocket = require('./api/sockets')(io);
// io.sockets.on('connection', function (socket) {
//     console.log('Un client est connecté, vive le Socket Matttthieu !');
// });

app.use(express.static(__dirname + '/app'));
console.log("Listening on " + port)


// Expose app
 exports = module.exports = app;
// exports = module.exports = io;


