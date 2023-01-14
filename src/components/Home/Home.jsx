import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as movieAPI from "../../services/api"

export const Home = () => {

    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        movieAPI.trendingMovies().then(setTrendMovie)
    }, [])

    return (
        <>
            <ul>
                {trendMovie.map(({ id, title }) => {
                return <li key={id}>
                    <Link to={`movies/${id}`}>{title}</Link>
                </li>})}
            </ul>
        </>
    )
}