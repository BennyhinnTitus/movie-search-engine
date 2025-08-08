import MovieCard from "../components/MovieCard"
import movies from "../movies"
import React from "react"

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState("")

    function submitForm(event) {
        event.preventDefault()
    }

    function updateSearchQuery(event) {
        const newSearchQuery = event.target.value
        setSearchQuery(newSearchQuery)
    }

    const mappedMovies = movies.map(movie => {
        return <MovieCard movie={movie} key={movie.id}/>
    })

    return (
        <div className="Home">
            <form onSubmit={submitForm} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies" 
                    className="search-input" 
                    name="searchBar" 
                    value={searchQuery} 
                    onChange={updateSearchQuery}
                />
                <button type="submit" className="search-submit">Search</button>
            </form>

            <div className="movies">
                {mappedMovies}
            </div>
        </div>
    )
}

export default Home
