const MovieCard = ({movie}) => {
    function addToFavorite() {}

    return (
        <div className="MovieCard">
            <div className="poster">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="overlay">
                    <button onClick={addToFavorite} className="favorite">🤍</button>
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
