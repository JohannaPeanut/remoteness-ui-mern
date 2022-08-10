import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="section" id="about-section">
      <div>
        <h1 className="oleo">Work in a unique landscape!</h1>

        <p>
          A data set was created from landscape photographs of travel
          destinations that were most frequently searched for in Corona spring
          2020 when the home office and video calls became the new normal for
          many office workers. An AI has learned to create images of longing. On
          <i>remoteness.art</i> you can get your individual AI generated
          landscape background.
        </p>
      </div>
      <div className="center">
        <a
          href="http://start.johannamichel.com/remoteness-insularity-difficult-topography/"
          target="_blank"
          className="btn no-outline"
          rel="noreferrer"
        >
          Read more
        </a>
      </div>
      <div className="center">
        <HashLink smooth to="/#generate-section" className="arrow">
          <BiDownArrowAlt />
        </HashLink>
      </div>
    </section>
  );
};

export default AboutSection;
