'use strict';

/**
 * @ngdoc service
 * @name moviemaniaApp.Movies
 * @description
 * # Movies
 * Factory in the moviemaniaApp.
 */
angular.module('moviemaniaApp')
  .factory('Movies', function ($q) {
    var key = 'movies';
    function loadMovies() {
      return JSON.parse(localStorage.getItem(key)) || [];
    }
    return {
      load: function () {
        return $q.when(loadMovies());
      },
      get: function(id) {
        var foundMovie,
        movies = loadMovies();
        for(var i in movies){
          var movie = movies[i];
          if(movie.id === id) {
            foundMovie = movie;
            break;
          }
        }
        return $q.when(foundMovie);
      },
      add: function(obj) {
        var movies = loadMovies();
        obj.id = movies.length;
        obj.slug = obj.title.toLowerCase().replace(/ /g, '-');
        movies.push(obj);
        localStorage.setItem(key, JSON.stringify(movies));
      }
    };
  });
