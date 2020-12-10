const numberOfFilms=+prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останіх переглянутих фільмів', ''),
          b = prompt('На скільки ви його оцінюєте?', '');

    if(a !=null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else{
        console.log('error');
        i--;
    }      
}

if(personalMovieDB.count < 10){
    console.log('Переглядів мало');
}else if(personalMovieDB.count >=10 && personalMovieDB.count < 30){
    console.log('Ви класний глядач');
}else if (personalMovieDB.count >= 30){
    console.log('Ви кіноман');
}else{
    console.log('error');
}

console.log(personalMovieDB);
