import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard ajalah</Link>
    </div>
  );
};

export default Home;
