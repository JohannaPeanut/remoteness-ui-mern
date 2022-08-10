import Navbar from "./../components/Navbar";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./HeaderSection.scss";

const HeaderSection = () => {
  return (
    <section className="section" id="header-section">
      <Navbar />
      <div id="header-div">
        <h1 id="header">
          remote
          <br />
          ness
          <br />
          .art
        </h1>

        <Link to="/" className="btn oleo">
          Generate
        </Link>
        <Link to="/" className="arrow">
          <BiDownArrowAlt />
        </Link>
      </div>
    </section>
  );
};

export default HeaderSection;
