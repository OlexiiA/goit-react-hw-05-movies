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
                    <img src={ profile_path !== null
                        ? `${imgUrl}${profile_path}`
                        : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt={name} width='150'/>
                    <h4>{name}</h4>
                    <p>Character: {character}</p>
                </li>)
            })}
        </ul>
    )
}