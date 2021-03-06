import Tarjeta from "./Tarjeta";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const PresentacionPeliculas = ({
  titulo,
  peliculas,
  clickBotonPagSiguiente,
  clickBotonPagAnterior,
  pagina,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          color: "white",
          fontSize: 30,
          marginTop: "2%",
        }}
      >
        {titulo}
      </Box>
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
              linkTarjeta={`/DetalleTarjeta/${pelicula.id}`}
            />
          </>
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{ m: 2, bgcolor: "white" }}
          onClick={clickBotonPagAnterior}
          disabled={pagina === 1}
        >
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>

        <IconButton
          sx={{ m: 2, bgcolor: "white" }}
          onClick={clickBotonPagSiguiente}
        >
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PresentacionPeliculas;
