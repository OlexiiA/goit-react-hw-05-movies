import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import * as movieAPI from '../../services/api'
import {movieInfo} from '../../services/api';

const imgUrl = 'https://image.tmdb.org/t/p/w200';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const navigate = useNavigate();


    // useEffect(() => {
    //     movieAPI.movieDetails(movieId).then(setMovieDetails);
    // },[movieId])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2913964819360854cc0ff757d62600b5&language=en-US`).then(res => res.json()).then(setMovieDetails);
    // }, [movieId]);

    useEffect(() => {
        movieInfo(movieId)
          .then(({ data }) => setMovieDetails(data))
          .catch(error => error);
      }, [movieId]);

    console.log(movieId)

    if (!movieDetails) {
        return null;
    }

    const { poster_path, title, vote_average, overview, genres } = movieDetails
    const vote = Math.round(vote_average) * 10;
    
    return (
        <>
            <button type='button' onClick={() => navigate(-1)}>Back</button>
            <div>
                <img src={`${imgUrl}${poster_path}`} alt={title} />
                <h3>{title}</h3>
                <p>User Score: {vote}%</p>
                <p>Overview</p>
                <p>{overview}</p>
                <p>Genres</p>
                <p>{genres.map(e => <span key={e.id}>{e.name}</span>)}</p>
            </div>
            <hr />
            <div>
                <Link to='cast'>Cast</Link>
            </div>
            
            <div>
                <Link to='Reviews'>Reviews</Link>
            </div>
            <Outlet />
        </>


    )
}