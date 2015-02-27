'use strict';

angular.module('moviemaniaApp')
  .controller('MovieCtrl', function ($scope) {
    var movieList = [{
      id: 23,
      title: 'Usual Suspects',
      image: 'http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg',
      description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.',
      category: 'Awesome',
      cast: [
        'McManus: Stephen Baldwin',
        'Fenster: Benicio del Toro',
        'Verbal: Kevin Spacey'
      ]
    },
    {
      id: 42,
      title: 'Star Wars',
      image: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg',
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      category: 'Epic',
      cast: [
        'Han Solo: Harrison Ford',
        'Luke Skywalker: Mark Hamill'
      ]
    }];
  });
