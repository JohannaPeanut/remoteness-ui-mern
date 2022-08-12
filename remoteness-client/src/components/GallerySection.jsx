import { Link } from "react-router-dom";

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
      <Link to="/gallery" className="btn no-outline">
        Gallery
      </Link>
    </section>
  );
};

export default GallerySection;
