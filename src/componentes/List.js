import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { useState, useEffect } from "react";
import PeliculaItem from "./PeliculaItem";
import { Box } from "@mui/material";

const List = ({ titulo, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}${url}?api_key=${APIkey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 6, fontSize: 24 }}
      >
        {titulo}
      </Box>
      {movies.map((movie) => (
        <PeliculaItem
          key={movie.id}
          titulo={movie.title}
          imagen={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          link={`/{${movie.id}`}
        />
      ))}
    </div>
  );
};

export default List;
