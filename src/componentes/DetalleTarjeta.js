import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const DetalleTarjeta = () => {
  const params = useParams();
  const [peliculaDetalle, setPeliculaDetalle] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}${params.idpelicula}?api_key=${APIkey}&language=es`)
      .then((res) => res.json())
      .then((data) => {
        setPeliculaDetalle(data);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${peliculaDetalle.backdrop_path})`,
      }}
    >
      <Card key={peliculaDetalle.id}>
        <Box>
          <CardMedia
            sx={{ width: "300px", height: "400px" }}
            component="img"
            image={`https://image.tmdb.org/t/p/original/${peliculaDetalle.poster_path}`}
          ></CardMedia>
        </Box>
      </Card>
    </Box>
  );
};
export default DetalleTarjeta;
