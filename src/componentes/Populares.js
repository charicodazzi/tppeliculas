import PresentacionPeliculas from "./PresentacionPeliculas";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import Box from "@mui/material/Box";

const Populares = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}popular?api_key=${APIkey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <Box sx={{ bgcolor: "rgba(27,40,54,1.00)" }}>
      <PresentacionPeliculas titulo="Peliculas Populares" peliculas={movies} />
    </Box>
  );
};

export default Populares;
