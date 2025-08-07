import MovieCard from "./MovieCard"
import movies from "../movies"

const Home = () => {
    const mappedMovies = movies.map(movie => {
        return <MovieCard movie={movie} />
    })

    return (
        <div className="Home">
            {mappedMovies}
        </div>
    )
}

export default Home
