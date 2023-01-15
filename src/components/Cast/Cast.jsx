import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {actorsInfo} from '../../services/api'

const imgUrl = 'https://image.tmdb.org/t/p/w200';

export const Cast = () => {
    const {movieId}= useParams();
    const [actorDetails, setActorDetails] = useState();


    useEffect(() => {
        actorsInfo(movieId)
        .then(({data}) => setActorDetails(data.cast))
        .catch(error => error)
    },[movieId])



if (!actorDetails) {
    return null;
}

 
    return(

        <ul>
            {actorDetails.map(({profile_path, name, character, cast_id}) => {
                return (<li key={cast_id}>
                    <img src={`${imgUrl}${profile_path}`} alt={name}/>
                    <h4>{name}</h4>
                    <p>Character: {character}</p>
                </li>)
            })}
        </ul>
    )
}