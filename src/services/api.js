import axios from 'axios';

const KEY = '2913964819360854cc0ff757d62600b5';

//Trending movies
export const trendingMovies = () => {
  const queryParams = new URLSearchParams({
    api_key: KEY,
  });
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?${queryParams}`)
    .then(res => res.json())
    .then(res => res.results)
    .catch(error => error);
};
// export const trendingMovies = async () => {
//     const dataFetch = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
//     );
//     return dataFetch;
//   };

//Movies details
// export const movieDetails = (movieId) => {
//     const queryParams = new URLSearchParams({
//         api_key: KEY,
//     });
//     return fetch(`https://api.themoviedb.org/3/movie/${movieId}?${queryParams}&language=en-US`)
//     .then(res => res.json())
//     .then(res => res.results)
//     .catch(error => error);
// }

export const movieInfo = async movie_id => {
  const dataFetch = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
  );
  return dataFetch;
};

//Actors info

export const actorsInfo = async movie_id => {
  const dataFetch = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
  );
  return dataFetch;
};

//Reviews
export const reviewsFetch = async movie_id => {
  const dataFetch = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return dataFetch;
};

//Find film by name
export const findeFilm = async search => {
  const dataFetch = await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}&language=en-US&page=1&include_adult=false`);
  return dataFetch;
};
