'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели?");// + для того щ9об вертало цисло а не строку//

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
           numberOfFilms = prompt("Сколько фильмов ви уже посмотрели?");
    }
}
start();

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

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из просмотрених фильмов?');
        // do {
        //     a = prompt('Один из просмотрених фильмов?');
        // } while (a == "" ||   a == null || a.length > 50);
       
       
//            // for (;;){
//            //     if (a == "") {
//            //         a = prompt('Один из просмотрених фильмов?');
//            //     }else if (a == null) {
//            //         a = prompt('Один из просмотрених фильмов?');
//            //     }else if (a.length > 50) {
//            //         a = prompt('Один из просмотрених фильмов?');
//            //     }else {
//            //         break;
//            //     }
//            // }
       
    
    
    
        while(a == "" || a == null || a.length > 50) {
             a = prompt('Один из просмотрених фильмов?');
         }
        let b = prompt('На сколько оцените его?');
         
        while(b == "" || b == null || b.length > 50) {
            b = prompt('На сколько оцените его?');
         }
        personalMovieDB.movies[a] = b;
    }
}
rememberMyFilms();



// let a = prompt('Один из просмотрених фильмов?');
// let b = prompt('На сколько оцените его?');
// do {
//     a = prompt('Один из просмотрених фильмов?');
// } while (a != "" &&   a != null && a.length > 50);


// obj.key3 = "value3"; 
function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB();


function writeYourGenres () {
    let list = [];
    for(let i = 1; i <= 3; i++) {
        let c = prompt(`Ваш любимый жанр под номером ${i}`);  
        list.push(c);  
    }
    return list;
}

personalMovieDB.genres = writeYourGenres();
