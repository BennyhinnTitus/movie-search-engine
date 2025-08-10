import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Favorites = () => {
    const { favorites } = useMovieContext()

    const mappedFavorites = favorites.map(movie => {
        return <MovieCard movie={movie} key={movie.id}/>
    })

    return (
        <>
        {mappedFavorites.length ? (
            <>
                <h2 className="fav-title">Your Favorite Movies</h2>
                <div className="Favorites">{mappedFavorites}</div>
            </>
        ) : (
            <div className="Favorites empty">Nothing to see here...</div>
        )}
        </>
    )
}

export default Favorites
