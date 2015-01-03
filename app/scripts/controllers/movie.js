'use strict';

/**
 * @ngdoc function
 * @name moviemaniaApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the moviemaniaApp
 */
angular.module('moviemaniaApp')
  .controller('MovieCtrl', function ($scope, $routeParams, $http, $timeout) {
    var movies = [{
      title: 'Usual Suspects',
      searchTerms: 'the+usual+suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.'
    },
    {
      title: 'Star Wars',
      searchTerms: 'star+wars+1977',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader."
    }];
    $scope.movie = movies[$routeParams.id];
    $scope.loading = true;
    $timeout( function() {
      $http.jsonp('http://api.duckduckgo.com/?q='+$scope.movie.searchTerms+'&format=json&pretty=1&callback=JSON_CALLBACK').success(function(data) {
        $scope.loading = false;
        $scope.movie.abstract = data.AbstractText;
        $scope.movie.abstractSource = data.AbstractSource;
      });
    }, 2000);
  });
