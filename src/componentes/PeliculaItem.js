import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const PeliculaItem = ({ titulo, imagen, link }) => {
  return (
    <Box className="pelicula-item" sx={{ bgcolor: "black" }}>
      <Avatar className="pelicula-item-imagen" src={imagen} sx={{ mt: 1 }} />
      <p>{titulo}</p>
      <a href={link}>
        <span>
          <AddIcon color="secondary"></AddIcon>
        </span>
      </a>
    </Box>
  );
};

export default PeliculaItem;
