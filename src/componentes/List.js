import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";
import PeliculaItem from "./PeliculaItem";
import { Box } from "@mui/material";

const List = ({ titulo, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}${url}?api_key=${APIkey}&language=es`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 6,
            fontSize: 24,
          }}
        >
          {titulo}
        </Box>

        <Box
          sx={{
            overflow: "scroll",
            height: "80vh",
          }}
        >
          {movies.map((movie) => (
            <PeliculaItem
              key={movie.id}
              titulo={movie.title}
              imagen={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              linkItem={`/DetalleTarjeta/${movie.id}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default List;
