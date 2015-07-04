'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', ['$scope', '$routeParams', 'Movies', function ($scope, $routeParams, Movies) {
    var id = parseInt($routeParams.id, 10);
    Movies.get(id).then(function(movie) {
      $scope.movie = movie;
      // Load duckgogo
      $scope.loading = true;
      Movies.moreInfo(movie).then(function(info) {
        $scope.loading = false;
        $scope.movie.abstract = info.abstract;
        $scope.movie.abstractSource = info.abstractSource;
      });
    });
  }]);
