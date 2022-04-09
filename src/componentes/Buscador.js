import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIkey } from "./FuncionesAuxiliares";
import Tarjeta from "./Tarjeta";
import Box from "@mui/material/Box";

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
    <Box
      sx={{
        bgcolor: "rgba(27,40,54,1.00)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 5,
      }}
    >
      <Box sx={{ color: "white", fontSize: 20, p: 3 }}>Busca tu película</Box>
      <input
        type="text"
        onChange={handleChange}
        value={searchParams.get("query")}
        style={{ width: 800, borderRadius: 10, height: 28 }}
      ></input>
      <Box sx={{ display: "flex" }}>
        {movies &&
          movies.map((movie) => (
            <Tarjeta
              titulo={movie.title}
              imagen={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              linkTarjeta={`/DetalleTarjeta/${movie.id}`}
            />
          ))}
      </Box>
    </Box>
  );
};
export default Buscador;
