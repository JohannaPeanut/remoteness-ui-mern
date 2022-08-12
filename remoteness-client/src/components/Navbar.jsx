import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div id="about-nav-links">
          <li>
            <HashLink smooth to="/#about-section">
              About
            </HashLink>
          </li>
          <li>
            <Link to="/#gallery-page">Gallery</Link>
          </li>
        </div>
        <div>
          <li>
            <HashLink
              smooth
              className="oleo"
              id="generate-nav-link"
              to="/#generate-section"
            >
              Generate Landscape
            </HashLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
