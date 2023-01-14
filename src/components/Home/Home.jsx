import { useEffect, useState } from "react"
import * as movieAPI from "../../services/api"

export const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

useEffect(() => {
    movieAPI.trendingMovies().then(console.log)
},[])

    return <div>Home</div>
}