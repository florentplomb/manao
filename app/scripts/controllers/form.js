'use strict';

/**
 * @ngdoc function
 * @name manaoApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the manaoApp
 */


 angular.module('manaoApp')
 .controller('FormCtrl', function ($scope, $location) {


 	//** socket **//

 	console.log("hostname : " + window.location.hostname);
	var socket = io.connect(window.location.hostname);
	//var socket = io.connect("http://localhost:3000");


 	//** form **//
 	$scope.master = {test : "flo"};
 	$scope.update = function(form) {
 		//$scope.master = angular.copy(form);
 		// socket.emit('formToSave', form); // enregistrement dans la BD ng-click="update()"
 	};

   // on ecoute sur getAnswers.
 	socket.on('getAnswers',function(answers){
 		console.log(answers);
 	});

 	$scope.sendForm = function(formulaire){
        socket.emit('formToSave', formulaire);
      }

 	$scope.reset = function() {
 		$scope.form = angular.copy($scope.master);
 	};

 	$scope.reset();

 	$scope.go = function(path){
 		console.log(path);
 		$location.path(path);
 	};
 	$scope.console = function(form){
 		console.log(form);
 	};

 });


