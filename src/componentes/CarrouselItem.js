import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

// usa camelCase: la prop deberia llamarse linkCarrousell
const CarrousellItem = ({ titulo, imagen, descripcion, linkcarrousell }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imagen})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "50% 30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "800px",
          bgcolor: "rgba(27,40,54,1.00)",
          color: "white",
          fontWeight: "regular",
          borderRadius: 2,
          mt: 8,
        }}
      >
        <Typography sx={{ mt: 1 }} variant="h5">
          {titulo}
        </Typography>
        <Typography sx={{ p: 2, textContent: "center" }} variant="body2">
          {descripcion}
        </Typography>
        <MenuItem component={Link} to={linkcarrousell}>
          <Button
            sx={{ bgcolor: "rgba(27,40,54,1.00)", mb: 2 }}
            variant="contained"
          >
            Ver mas...{" "}
          </Button>
        </MenuItem>
      </Box>
    </Box>
  );
};

export default CarrousellItem;
