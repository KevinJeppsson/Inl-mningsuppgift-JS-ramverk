import { useState } from 'react'
import AddMovieForm from "./components/AddMovieForm"
import MovieList from "./components/MovieList"
import SortButtons from "./components/SortButtons"

function App() {
  const [movies, setMovies] = useState([])

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

   const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const sortByTitle = () => {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    setMovies(sorted)
  }

  const sortByRating = () => {
    const sorted = [...movies].sort((a, b) => b.rating - a.rating)
    setMovies(sorted)
  }

  return (
    <div className="container mt-4">
      <h1>Min filmlista</h1>
      <p>Lägg till en film</p>
      <AddMovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onRemoveMovie={removeMovie} />
      <SortButtons onSortByTitle={sortByTitle} onSortByRating={sortByRating} />
    </div>
  )
  
}

export default App
