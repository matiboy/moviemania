'use strict';

/**
 * @ngdoc service
 * @name moviemaniaApp.MoviesService
 * @description
 * # MoviesService
 * Service in the moviemaniaApp.
 */
angular.module('moviemaniaApp')
  .service('MoviesService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.a = 42;
  });
