import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";

const List = ({ titulo, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}${url}?api_key=${APIkey}`)
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
