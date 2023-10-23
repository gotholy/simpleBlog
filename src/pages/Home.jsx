import Header from "../components/Header";
import "../pages/Home.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="homeHeader">
        <Header />
      </header>
      <main>
        <h2>Welcome to my simple Blog</h2>
        <Link to="/Blog">
          <Button text="Go to Articles" />
        </Link>
      </main>
    </>
  );
};

export default Home;
