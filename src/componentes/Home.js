import List from "./List";

const Home = () => {
  return (
    <div>
      <List titulo="peliculas populares" url="popular" />
      <List titulo="peliculas mejor puntuadas" url="top_rated" />
    </div>
  );
};

export default Home;
