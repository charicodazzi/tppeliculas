import PresentacionPeliculas from "./PresentacionPeliculas";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";

const UltimosLanzamientos = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}now_playing?api_key=${APIkey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <PresentacionPeliculas titulo="Ultimos lanzamientos" peliculas={movies} />
  );
};

export default UltimosLanzamientos;
