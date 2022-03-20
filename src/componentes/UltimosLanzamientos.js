import PresentacionPeliculas from "./PresentacionPeliculas";

const UltimosLanzamientos = () => {
  return (
    <PresentacionPeliculas
      titulo="Ultimos lanzamientos"
      peliculas={["ultimos 1", "ultimos 2", "ultimos  3"]}
    />
  );
};

export default UltimosLanzamientos;
