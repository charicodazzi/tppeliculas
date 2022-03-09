import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/UltimosLanzamientos">Últimos Lanzamientos</Link>
        </li>
        <li>
          <Link to="/Populares">Populares</Link>
        </li>
        <li>
          <Link to="/Buscador">Buscador</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
