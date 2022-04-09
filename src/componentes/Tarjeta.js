import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const Tarjeta = ({ imagen, titulo, linkTarjeta }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        m: 4,
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={imagen}
        alt={`Img-${titulo}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            width: 200,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          {titulo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={linkTarjeta}>
          <IconButton aria-label="Icono ver detalle">
            <RemoveRedEyeIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Tarjeta;
