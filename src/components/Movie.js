import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opcaity: 1 }}
      initial={{ opcaity: 0 }}
      exit={{ opcaity: 0 }}
      layout
      className="movie-card"
    >
      <img
        src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
        alt=""
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
      {/* only movie path was provided so have to add --> https://image.tmdb.org/t/p/w500 */}
    </motion.div>
  );
}

export default Movie;
