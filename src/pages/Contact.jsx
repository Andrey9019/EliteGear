import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      <ul>
        <li>
          <Link to="/">Go to Home Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
