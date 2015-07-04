'use strict';

/**
 * @ngdoc service
 * @name moviemaniaApp.Movies
 * @description
 * # Movies
 * Factory in the moviemaniaApp.
 */
angular.module('moviemaniaApp')
  .factory('Movies', function ($q, $http) {
    var key = 'movies';
    function loadMovies() {
      return $http.get('./movies.json').then(function(resp) {
        return resp.data;
      });
    }
    return {
      load: function () {
        return $q.when(loadMovies());
      },
      get: function(id) {
        return loadMovies().then(function(movies) {
          for(var i in movies){
            var movie = movies[i];
            if(movie.id === id) {
              return movie;
            }
          }
        });
      },
      add: function(obj) {
        var movies = loadMovies();
        obj.id = movies.length;
        obj.slug = obj.title.toLowerCase().replace(/ /g, '-');
        movies.push(obj);
        localStorage.setItem(key, JSON.stringify(movies));
      },
      moreInfo: function(movie) {
        return $http.jsonp('http://api.duckduckgo.com', {
          params: {
            q: movie.searchTerms,
            format: 'json',
            pretty: 1,
            callback: 'JSON_CALLBACK'
          }
        }).then(function(resp) {
          var data = resp.data;
          return {
            abstract: data.AbstractText,
            abstractSource: data.AbstractSource
          }
        });
      }
    };
  });
