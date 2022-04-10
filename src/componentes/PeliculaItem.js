import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const PeliculaItem = ({ titulo, imagen, linkItem }) => {
  return (
    <Box
      className="pelicula-item"
      sx={{ bgcolor: "black", borderColor: "#9899D0" }}
    >
      <Avatar className="pelicula-item-imagen" src={imagen} sx={{ mt: 1 }} />
      <p>{titulo}</p>
      <MenuItem component={Link} to={linkItem}>
        <Box sx={{ mt: 2 }}>
          <AddIcon color="secondary"></AddIcon>
        </Box>
      </MenuItem>
    </Box>
  );
};

export default PeliculaItem;
