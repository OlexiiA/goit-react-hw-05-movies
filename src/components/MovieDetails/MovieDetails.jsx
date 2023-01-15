import {Outlet, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as movieAPI from '../../services/api'

export const MovieDetails = () => {
const {movieId} = useParams();
const [movieDetails, setMovieSetails] = useState(null);


useEffect(() => {
    movieAPI.movieDetails(movieId).then(setMovieSetails);
},[movieId])

console.log(movieId)

if(!movieDetails){
    return null;
}

const { poster_path, title, vote_average, overview, genres } = movieDetails

    return (
        <>
        <img src={poster_path} alt={title}/>
        <h3>{title}</h3>
        <p>User Score: {vote_average}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <p>{genres.map(e => <span key={e.id}>{e.name}</span>)}</p>
        <Outlet/>
        </>
        
        
    )
}