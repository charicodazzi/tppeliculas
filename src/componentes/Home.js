import List from "./List";

const Home = () => {
  return (
    <div>
      <List titulo="Peliculas populares" url="popular" />
      <List titulo="Peliculas mejor puntuadas" url="top_rated" />
    </div>
  );
};

export default Home;
