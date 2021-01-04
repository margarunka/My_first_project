'use strict';

const numberOfFilms = prompt("Сколько фильмов ви уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [
    ],
    privat: false
};
console.log(personalMovieDB.count);

const a = prompt('Один из просмотрених фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из просмотрених фильмов?'),
      d = prompt('На сколько оцените его?');
personalMovieDB.movies = {
    [a] : b,
    [c] : d
};
console.log(personalMovieDB.movies);