import PresentacionPeliculas from "./PresentacionPeliculas";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";

const Populares = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}popular?api_key=${APIkey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <PresentacionPeliculas titulo="Peliculas Populares" peliculas={movies} />
  );
};

export default Populares;
