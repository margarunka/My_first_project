'use strict';

let numberOfFilms = prompt("Сколько фильмов ви уже посмотрели?");

while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms.length > 50) {
      numberOfFilms = prompt("Сколько фильмов ви уже посмотрели?");
}

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
if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
// const a = prompt('Один из просмотрених фильмов?'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из просмотрених фильмов?'),
//       d = prompt('На сколько оцените его?');

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из просмотрених фильмов?');
    do {
        a = prompt('Один из просмотрених фильмов?');
       } while (a == "" ||   a == null || a.length > 50);
   
   
       // for (;;){
       //     if (a == "") {
       //         a = prompt('Один из просмотрених фильмов?');
       //     }else if (a == null) {
       //         a = prompt('Один из просмотрених фильмов?');
       //     }else if (a.length > 50) {
       //         a = prompt('Один из просмотрених фильмов?');
       //     }else {
       //         break;
       //     }
       // }
   



    // while(a == "" || a == null || a.length > 50) {
    //     a = prompt('Один из просмотрених фильмов?');
    // }
    let b = prompt('На сколько оцените его?');
     
    while(b == "" || b == null || b.length > 50) {
        b = prompt('На сколько оцените его?');
     }
    personalMovieDB.movies[a] = b;
}


// let a = prompt('Один из просмотрених фильмов?');
// let b = prompt('На сколько оцените его?');
// do {
//     a = prompt('Один из просмотрених фильмов?');
// } while (a != "" &&   a != null && a.length > 50);


// obj.key3 = "value3"; 


console.log(personalMovieDB); 