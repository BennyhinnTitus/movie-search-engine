import MovieCard from "../components/MovieCard"
import React from "react"
import { getPopularMovies } from "../api"

const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [movies, setMovies] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function loadPopularMovies() {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log("Error:", err)
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

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
                {error && <div className="error">{error}</div>}
                
                {loading ? 
                <div className="loading">Loading...</div> 
                : 
                mappedMovies}
            </div>
        </div>
    )
}

export default Home
