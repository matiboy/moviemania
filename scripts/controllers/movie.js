'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'Movies', '$timeout', function ($scope, $routeParams, Movies, $timeout) {
    var id = parseInt($routeParams.id, 10);
    Movies.get(id).then(function(movie) {
      $scope.movie = movie;
      // Load duckgogo
      $scope.loading = true;
      Movies.moreInfo(movie).then(function(info) {
        $timeout(function() {
          $scope.loading = false;
          $scope.movie.abstract = info.abstract;
          $scope.movie.abstractSource = info.abstractSource;
        }, 1200);
      });
    });
  }]);
