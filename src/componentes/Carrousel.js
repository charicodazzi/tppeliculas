import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { URLBASE, APIkey } from "./FuncionesAuxiliares";
import CarrouselItem from "./CarrouselItem";

const Carrousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${URLBASE}now_playing?api_key=${APIkey}&language=es`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Carousel animation="slide" duration="800">
      {movies.map((movie) => (
        <CarrouselItem
          key={movie.id}
          titulo={movie.title}
          imagen={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          descripcion={movie.overview}
          linkcarrousell={`/DetalleTarjeta/${movie.id}`}
        />
      ))}
    </Carousel>
  );
};

export default Carrousel;
