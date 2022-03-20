import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";
import PeliculaItem from "./PeliculaItem";

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
        <PeliculaItem
          titulo={movie.title}
          imagen={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          link={`/{${movie.id}`}
        />
      ))}
    </div>
  );
};

export default List;
