'use strict';

/**
 * @ngdoc function
 * @name moviemaniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviemaniaApp
 */
angular.module('moviemaniaApp')
  .controller('MainCtrl', function ($scope) {
    var movie = {
      title: 'Usual Suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.'
    };

    $scope.movie = movie;
  });
