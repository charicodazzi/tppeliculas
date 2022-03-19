import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";

const List = ({ titulo, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=1e2f4ae9cf56f3e1c8367fb458677972`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>{titulo}</h1>
      {movies.map((movie) => (
        <span>{movie.title}</span>
      ))}
    </div>
  );
};

export default List;
