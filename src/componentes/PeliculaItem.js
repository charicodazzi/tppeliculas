const PeliculaItem = ({ titulo, imagen, link }) => {
  return (
    <div className="pelicula-item">
      <img className="pelicula-item-imagen" src={imagen} />
      <p>{titulo}</p>
      <a href={link}>
        <span>{"<"}</span>
      </a>
    </div>
  );
};

export default PeliculaItem;
