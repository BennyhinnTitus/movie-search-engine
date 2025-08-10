import { useMovieContext } from "../contexts/MovieContext"
import clsx from "clsx"

const MovieCard = ({movie}) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()

    const isFav = isFavorite(movie.id)
    
    const className = clsx(
        "heart-btn",
        isFav && "favorite",
        !isFav && "not-favorite"
    )

    function toggleFavorite(event) {
        event.preventDefault()
        if (isFav) {
            removeFromFavorites(movie.id)
        }
        else {
            addToFavorites(movie)
        }
    }

    return (
        <div className="MovieCard">
            <div className="poster">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="overlay">
                    <button onClick={toggleFavorite} className={className}></button>
                </div>
            </div>

            <div className="information">
                <h3 className="title">{movie.title}</h3>
                <p className="release-date">{movie.release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard
