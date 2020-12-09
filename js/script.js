const numberOfFilms=+prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останіх переглянутих фільмів', ''),
      b = prompt('На скільки ви його оцінюєте?', ''),
      c = prompt('Один з останіх переглянутих фільмів', ''),
      d = prompt('На скільки ви його оцінюєте?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
