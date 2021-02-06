'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {
    },
    actors: {
    },
    genres: [
    ],
    privat: true,
    startNumberOfFilms: start,
    questionOfNumberOfFilms: detectPersonalLevel,
    questionRememberMyfilms: rememberMyFilms,
    questionWriteYourGenres: writeYourGenres,
    questionToggleVisibleMyDB: toggleVisibleMyDB
};


function start() {
    let numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели?");// + для того щ9об вертало цисло а не строку//

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
           numberOfFilms = prompt("Сколько фильмов ви уже посмотрели?");
    }
    this.count = numberOfFilms;
}



function detectPersonalLevel() {
    if (this.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(this.count <= 30) {
        console.log("Вы классический зритель");
    } else if(this.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из просмотрених фильмов?');
        while(a == "" || a == null || a.length > 50) {
             a = prompt('Один из просмотрених фильмов?');
         }
        let b = prompt('На сколько оцените его?');
         
        while(b == "" || b == null || b.length > 50) {
            b = prompt('На сколько оцените его?');
         }
        this.movies[a] = b;
    }
}


function toggleVisibleMyDB() {
    if (this.privat === true) {
        this.privat = false;
    } else {
        this.privat = true;
    }
}


function writeYourGenres () {
    let list = [];
    for(let i = 1; i <= 3; i++) {
        let c = prompt(`Ваш любимый жанр под номером ${i}`);
        while(c == '' || c == null) {
             c = prompt(`Ваш любимый жанр под номером ${i}`);  
        }
        list.push(c); 
    }
    list.forEach(function(item, i) {
        console.log(`Favorite genre ${++i} - ${item}`);
    });
    
    return list;
}


personalMovieDB.startNumberOfFilms();
personalMovieDB.questionOfNumberOfFilms();
personalMovieDB.questionRememberMyfilms();
personalMovieDB.questionToggleVisibleMyDB();
personalMovieDB.genres = writeYourGenres();


console.log(personalMovieDB);
