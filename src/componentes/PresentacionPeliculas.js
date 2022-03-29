import Tarjeta from "./Tarjeta";
import { Box } from "@mui/material";
const PresentacionPeliculas = ({ titulo, peliculas }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ color: "white", fontSize: 30 }}>{titulo}</Box>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {peliculas.map((pelicula) => (
          <>
            <Tarjeta
              titulo={pelicula.title}
              imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
            />
          </>
        ))}
      </Box>
      <h3>Paginación</h3>
    </Box>
  );
};

export default PresentacionPeliculas;
