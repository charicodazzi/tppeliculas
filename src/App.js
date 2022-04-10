import "./App.css";
import Nav from "./componentes/Nav";
import Home from "./componentes/Home";
import Buscador from "./componentes/Buscador";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
import Populares from "./componentes/Populares";
import Footer from "./componentes/Footer";
import DetalleTarjeta from "./componentes/DetalleTarjeta";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UltimosLanzamientos" element={<UltimosLanzamientos />} />
        <Route path="/Populares" element={<Populares />} />
        <Route path="/Buscador" element={<Buscador />} />
        <Route
          path="/DetalleTarjeta/:idpelicula"
          element={<DetalleTarjeta />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
