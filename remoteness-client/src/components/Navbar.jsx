import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <Link to="/">Generate Landscape</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
