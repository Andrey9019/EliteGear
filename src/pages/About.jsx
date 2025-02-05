import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page.</p>
      <ul>
        <li>
          <Link to="/contact">Go to Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
