import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import MenuMobile from "./MenuMobile";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "rgba(27,40,54,1.00)" }}>
        <Toolbar>
          <MovieIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></MovieIcon>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inline",
              },
            }}
          >
            <Button color="inherit">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/UltimosLanzamientos"
              >
                Últimos Lanzamientos
              </Link>
            </Button>
            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Populares"
              >
                Populares
              </Link>
            </Button>
            <Button color="inherit">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Buscador"
              >
                Buscador
              </Link>
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "inline",
                sm: "inline",
                md: "none",
              },
            }}
          >
            <MenuMobile />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Nav;
