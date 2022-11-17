import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Link to="/login">Masuk Pak Eko</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
