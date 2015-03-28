'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'Movies', function ($scope, $routeParams, Movies) {
    var id = parseInt($routeParams.id, 10);
    Movies.get(id).then(function(movie) {
      $scope.movie = movie;
    });
  }]);
