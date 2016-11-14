'use strict';

/**
 * @ngdoc overview
 * @name manaoApp
 * @description
 * # manaoApp
 *
 * Main module of the application.
 */
angular
  .module('manaoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/designer', {
        templateUrl: 'views/designer.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/particulier', {
        templateUrl: 'views/particulier.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl',
        controllerAs: 'form'
      })
      .when('/dform', {
        templateUrl: 'views/dform.html',
        controller: 'FormCtrl',
        controllerAs: 'dform'
      })
      .when('/pform', {
        templateUrl: 'views/pform.html',
        controller: 'FormCtrl',
        controllerAs: 'dform'
      })
      .when('/no', {
        templateUrl: 'views/no.html',
        controller: 'noCtrl',
        controllerAs: 'dform'
      })
      .otherwise({
        redirectTo: '/form'
      });
  });
