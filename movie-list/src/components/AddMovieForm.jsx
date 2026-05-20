import { useState } from 'react'

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validering så att alla fält är ifyllda rätt
    if (!title.trim()) {
      alert("Var god ange en titel!")
      return
    }
    if (!rating || rating < 1 || rating > 5) {
      alert("Var god ange ett betyg mellan 1 och 5")
      return
    }

    // Skapa nytt filmobjekt
    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      rating: parseInt(rating, 10)
    }

    onAddMovie(newMovie)

    // Återställ formulär
    setTitle("")
    setRating("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
      <div className="mb-2">
        <label className="form-label">Titel:</label>
        <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ange filmtitel"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Betyg (1-5):</label>
        <input 
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            step="1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Lägg till film</button>
    </form>
  )
}

export default AddMovieForm