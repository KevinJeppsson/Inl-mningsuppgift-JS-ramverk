import Movie from "./Movie"

function MovieList({ movies, onRemoveMovie }) {
  if (movies.length === 0) {
    return <p className="text-muted">Inga filmer än. Lägg till en ovan</p>
  }

  return (
    <ul className="list-group mt-3">
      {movies.map(movie => (
        <Movie
            key={movie.id}
            movie={movie}
            onRemove={onRemoveMovie}
        />
      ))}
    </ul>
  )
}

export default MovieList