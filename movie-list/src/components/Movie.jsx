import star from "../assets/star.png"
import remove from "../assets/delete.png"

// Funktion för att skapa stjärnor 
const renderStars = (rating) => {
  const stars = []

  for (let i = 1; i <= rating; i++) {
    stars.push(
      <img key={i} src={star} alt="stjärna" width="16"
      />
    )
  }

  return stars
}

function Movie({ movie, onRemove }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{movie.title}</strong>
        <br />
        <span>{renderStars(movie.rating)}</span>
      </div>

      <button className="btn btn-danger btn-sm" onClick={() => onRemove(movie.id)} >
        <img src={remove} alt="ta bort" width="14" />
      </button>
    </li>
  )
}

export default Movie