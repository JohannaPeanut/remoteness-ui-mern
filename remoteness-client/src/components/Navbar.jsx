import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div id="about-nav-links">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </div>
        <div>
          <li>
            <Link className="oleo" id="generate-nav-link" to="/">
              Generate Landscape
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
