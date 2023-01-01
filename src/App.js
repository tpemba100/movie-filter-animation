import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

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
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;

//DBMovie API -->
//https://api.themoviedb.org/3/movie/popular?api_key=98b22f0552b8ce5723f7be5b60b409da&language=en-US&page=1
//DBMovie API KEY --> 98b22f0552b8ce5723f7be5b60b409da

// STRICT MODE IS OFF
