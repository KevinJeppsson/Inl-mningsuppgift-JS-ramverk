function SortButtons({ onSortByTitle, onSortByRating }) {
  return (
    <div className="mb-3 d-flex gap-2">
      <button className="btn btn-secondary" onClick={onSortByTitle}>
        Sortera alfabetiskt
      </button>
      <button className="btn btn-secondary" onClick={onSortByRating}>
        Sortera efter betyg (högsta först)
      </button>
    </div>
  )
}

export default SortButtons