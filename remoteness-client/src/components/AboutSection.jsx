import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="section" id="about-section">
      <div>
        <h1 className="oleo">Work where other people go on vacation?</h1>

        <p>
          On <i>remoteness.art</i> you can create a unique landscape background
          for your next video call. The AI generates these images based on a
          dataset of the most popular travel destination backgrounds in Corona
          spring 2020 when remote work became the new normal.
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
