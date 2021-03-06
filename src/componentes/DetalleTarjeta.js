import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const DetalleTarjeta = () => {
  const params = useParams();
  const [peliculaDetalle, setPeliculaDetalle] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}${params.idpelicula}?api_key=${APIkey}&language=es`)
      .then((res) => res.json())
      .then((data) => {
        setPeliculaDetalle(data);
      });
  }, [params.idPelicula]);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${peliculaDetalle.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Box key={peliculaDetalle.id}>
        <Box sx={{ display: "flex", p: "2%", justifyContent: "center" }}>
          <CardMedia
            sx={{ width: "300px", height: "400px" }}
            component="img"
            image={`https://image.tmdb.org/t/p/original/${peliculaDetalle.poster_path}`}
          ></CardMedia>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              bgcolor: "#232323",
              opacity: 0.8,
              width: "50%",
              ml: 2,
            }}
          >
            <Typography>{peliculaDetalle.title}</Typography>
            <Typography>{peliculaDetalle.release_date}</Typography>
            <Typography>{peliculaDetalle.overview}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DetalleTarjeta;
