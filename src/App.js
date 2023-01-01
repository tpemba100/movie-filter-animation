import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=98b22f0552b8ce5723f7be5b60b409da&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  console.log(popular);

  return (
    <div className="App">
      <h1>www.freebollyhollywoodmovies.com</h1>
      <h3>watch free bollywood and holywood movies</h3>
      <p>Super SAFE and No Virus Website</p>
      {/* passing down data using properties */}
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {/* filtering thru the filtered data. returning component while passing key and movie data */}
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

//DBMovie API -->
//https://api.themoviedb.org/3/movie/popular?api_key=98b22f0552b8ce5723f7be5b60b409da&language=en-US&page=1
//DBMovie API KEY --> 98b22f0552b8ce5723f7be5b60b409da

// STRICT MODE IS OFF

// Framer- motion for animation
// Hooks -> use Effect and useState
//
