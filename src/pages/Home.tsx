import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Go to orders page</h1>
      <Link to="orders">orders</Link>
    </div>
  );
};

export default Home;
