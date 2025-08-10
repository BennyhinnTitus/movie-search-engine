import React from "react"

const MovieContext = React.createContext()

const useMovieContext = () => {
    return React.useContext(MovieContext)
}

const StateProvider = ({ children }) => {
    const [favorites, setFavorites] = React.useState(() => {
        const favoriteMovies = localStorage.getItem("favoriteMovies")
        try {
            return favoriteMovies ? JSON.parse(favoriteMovies) : []
        } catch {
            return []
        }
    })

    React.useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (newFavoriteMovie) => {
        setFavorites(prevFavorites => {
            return [...prevFavorites, newFavoriteMovie]
        })
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prevFavorites => {
            return prevFavorites.filter(movie => movie.id !== movieId)
        })
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const values = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

export { StateProvider, useMovieContext }
