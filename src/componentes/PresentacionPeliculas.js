const PresentacionPeliculas = ({ titulo, peliculas, imagen }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      {peliculas.map((pelicula) => (
        <>
          <h3>{pelicula.title}</h3>
          <img src={imagen} />
        </>
      ))}

      <h3>Paginación</h3>
    </div>
  );
};

export default PresentacionPeliculas;
