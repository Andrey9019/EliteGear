import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <ul>
        <li>
          <Link to="/about">Go to About Page</Link>
        </li>
        <li>
          <Link to="/contact">Go to Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
