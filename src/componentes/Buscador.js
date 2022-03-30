import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIkey } from "./FuncionesAuxiliares";
import Tarjeta from "./Tarjeta";

const Buscador = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=es&query=${searchParams.get(
        "query"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [searchParams]);

  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        onChange={handleChange}
        value={searchParams.get("query")}
      ></input>

      {movies &&
        movies.map((movie) => (
          <Tarjeta
            titulo={movie.title}
            imagen={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          />
        ))}
    </div>
  );
};
export default Buscador;
