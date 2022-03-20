const PresentacionPeliculas = ({ titulo, peliculas }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      {peliculas.map((pelicula) => (
        <h3>{pelicula.title}</h3>
      ))}
      <h3>Paginación</h3>
    </div>
  );
};

export default PresentacionPeliculas;
