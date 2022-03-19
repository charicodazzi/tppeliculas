import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1e2f4ae9cf56f3e1c8367fb458677972"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <h2>{movie.title}</h2>
      ))}
    </div>
  );
};

export default List;
