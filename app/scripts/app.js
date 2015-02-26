'use strict';

/**
 * @ngdoc overview
 * @name moviemaniaApp
 * @description
 * # moviemaniaApp
 *
 * Main module of the application.
 */
angular
  .module('moviemaniaApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movie', {
        templateUrl: 'views/singlemovie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
