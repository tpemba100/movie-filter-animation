function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
      {/* only movie path was provided so have to add --> https://image.tmdb.org/t/p/w500 */}
    </div>
  );
}

export default Movie;
