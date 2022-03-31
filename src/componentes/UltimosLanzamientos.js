import PresentacionPeliculas from "./PresentacionPeliculas";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import Box from "@mui/material/Box";

const UltimosLanzamientos = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}now_playing?api_key=${APIkey}&language=es`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <Box>
      <PresentacionPeliculas titulo="Ultimos lanzamientos" peliculas={movies} />
    </Box>
  );
};

export default UltimosLanzamientos;
