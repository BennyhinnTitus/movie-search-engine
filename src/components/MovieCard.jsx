const MovieCard = ({movie}) => {
    function addToFavorite() {}

    return (
        <div className="MovieCard">
            <div className="poster">
                <img src={movie.imageSrc} alt={movie.title} />
                <div className="overlay">
                    <button onClick={addToFavorite} className="favorite">🤍</button>
                </div>
            </div>

            <div className="information">
                <h3 className="title">{movie.title}</h3>
                <p className="release-date">{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard
