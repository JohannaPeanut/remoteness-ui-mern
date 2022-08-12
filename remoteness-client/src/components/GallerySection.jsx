import { HashLink } from "react-router-hash-link";
import { BiDownArrowAlt } from "react-icons/bi";

import "./GallerySection.scss";

const GallerySection = () => {
  return (
    <section className="section" id="gallery-section">
      <img id="phone" src="landscape-on-screen.png" alt="landscape on screen" />
      {/* <Link className="share-link oleo" to="/">
        Share
      </Link> */}
      <h2 className="share-link oleo" to="/">
        enjoy your remoteness!
      </h2>
      {/* <Link to="/gallery" className="btn no-outline">
        Gallery
      </Link> */}
      <div className="center">
        <HashLink smooth to="/#gallery-page" className="arrow">
          <BiDownArrowAlt />
        </HashLink>
      </div>
    </section>
  );
};

export default GallerySection;
