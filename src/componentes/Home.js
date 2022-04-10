import List from "./List";
import { Box } from "@mui/material";
import Carrousel from "./Carrousel";

const Home = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Carrousel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: 5,
          flexWrap: "wrap",
        }}
      >
        <List titulo="Peliculas populares" url="popular" />
        <List titulo="Peliculas mejor puntuadas" url="top_rated" />
      </Box>
    </Box>
  );
};

export default Home;
