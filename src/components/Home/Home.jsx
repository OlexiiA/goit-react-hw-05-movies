import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as movieAPI from "../../services/api"

// const imgUrl = 'https://image.tmdb.org/t/p/w400';
//{/* <img src= {poster_path && `${imgUrl}${poster_path}`} alt={title}/> 

export const Home = () => {

    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        movieAPI.trendingMovies().then(setTrendMovie)
    }, [])

    return (
        <>
            <ul>
                {trendMovie.map(({ id, title, poster_path }) => {
                    return <li key={id}>
                        <Link to={`movies/${id}`}>{title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}