import Navbar from "./../components/Navbar";
import { BiDownArrowAlt } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

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

        <HashLink smooth to="/#generate-section" className="btn oleo">
          Generate
        </HashLink>
        <HashLink smooth to="/#about-section" className="arrow">
          <BiDownArrowAlt />
        </HashLink>
      </div>
    </section>
  );
};

export default HeaderSection;
