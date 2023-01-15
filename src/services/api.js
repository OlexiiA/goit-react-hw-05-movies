const KEY = '2913964819360854cc0ff757d62600b5'

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


//Movies details
export const movieDetails = (movieId) => {
    const queryParams = new URLSearchParams({
        api_key: KEY,
    });
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?${queryParams}&language=en-US`)
    .then(res => res.json())
    .then(res => res.results)
    .catch(error => error);
}


