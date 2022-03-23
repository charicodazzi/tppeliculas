import Tarjeta from "./Tarjeta";
const PresentacionPeliculas = ({ titulo, peliculas }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      {peliculas.map((pelicula) => (
        <>
          <Tarjeta
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
          />
        </>
      ))}
      <h3>Paginación</h3>
    </div>
  );
};

export default PresentacionPeliculas;
