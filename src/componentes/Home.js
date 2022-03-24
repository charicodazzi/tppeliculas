import List from "./List";
import PeliculaItem from "./PeliculaItem";
import { Box } from "@mui/material";
import Carrousel from "./Carrousel";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "rgba(27,40,54,1.00)", color: "white" }}>
      <Carrousel />
      <Box sx={{ display: "flex", justifyContent: "space-around", padding: 5 }}>
        <List titulo="Peliculas populares" url="popular" />
        <List titulo="Peliculas mejor puntuadas" url="top_rated" />
      </Box>
    </Box>
  );
};

export default Home;
