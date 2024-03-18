import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );
};