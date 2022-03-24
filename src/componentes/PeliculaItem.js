import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const PeliculaItem = ({ titulo, imagen, link }) => {
  return (
    <Box
      className="pelicula-item"
      sx={{ bgcolor: "black", borderColor: "#9899D0" }}
    >
      <Avatar className="pelicula-item-imagen" src={imagen} sx={{ mt: 1 }} />
      <p>{titulo}</p>
      <a href={link}>
        <Box sx={{ mt: 2 }}>
          <AddIcon color="secondary"></AddIcon>
        </Box>
      </a>
    </Box>
  );
};

export default PeliculaItem;
