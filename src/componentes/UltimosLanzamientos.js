import PresentacionPeliculas from "./PresentacionPeliculas";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import Box from "@mui/material/Box";

const UltimosLanzamientos = () => {
  const [movies, setMovies] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`${URLBASE}now_playing?api_key=${APIkey}&language=es&page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [pagina]);

  const handleClickSiguiente = () => {
    setPagina(pagina + 1);
  };

  const handleClickAnterior = () => {
    setPagina(pagina - 1);
  };

  return (
    <Box>
      <PresentacionPeliculas
        titulo="Ultimos lanzamientos"
        peliculas={movies}
        clickBotonPagSiguiente={handleClickSiguiente}
        clickBotonPagAnterior={handleClickAnterior}
        pagina={pagina}
      />
    </Box>
  );
};

export default UltimosLanzamientos;
