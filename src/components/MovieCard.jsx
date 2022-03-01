export default function MovieCard(props) {
    const {movie, deleteMovieById} = props
    return (
      <div key={movie._id} className="MovieCard">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>
        <button onClick={()=>deleteMovieById(movie._id)} className="btn-delete"> Delete me</button>
      </div>
    );
  }
  