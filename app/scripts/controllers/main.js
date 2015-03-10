'use strict';

/**
 * @ngdoc function
 * @name moviemaniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviemaniaApp
 */
angular.module('moviemaniaApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.movie = {
      title: '',
      description: '',
      category: '',
      image: 'http://www.clipartbest.com/cliparts/LTK/dy5/LTKdy59jc.png'
    };

    $scope.goToRandomMovie = function() {
      var rand = Math.floor(Math.random() * $scope.movies.length);
      var randomMovie = $scope.movies[rand];
      var path = '/movie/'+randomMovie.id + '/' + randomMovie.slug;
      $location.url(path);
    };

    $scope.validateTitle = function() {
      if($scope.movie.title.length === 0) {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function() {
      if(!$scope.movie.category) {
        window.alert('Please select a category');
      }
    };

    $scope.checkDescription = function() {
      if($scope.movie.description.length === 0) {
        window.alert('Description is required');
      }
    };

    $scope.openForm = function() {
      $scope.closed = false;
    };

    $scope.closeForm = function() {
      $scope.closed = true;
    };

    $scope.isValid = function() {
      return $scope.movie.title && $scope.movie.category && $scope.movie.description;
    };

  });
