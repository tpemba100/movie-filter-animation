import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opcaity: 1 }}
      initial={{ opcaity: 0 }}
      exit={{ opcaity: 0 }}
      layout
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
        alt=""
      />
      {/* only movie path was provided so have to add --> https://image.tmdb.org/t/p/w500 */}
    </motion.div>
  );
}

export default Movie;
