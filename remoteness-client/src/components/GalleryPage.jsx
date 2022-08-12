import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { fetchRandomLandscapes } from "../services/landscape";

import "./GalleryPage.scss";

const GalleryPage = () => {
  const [galleryLandscapes, setGalleryLandscapes] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    fetchRandomLandscapes().then((landscapes) => {
      setGalleryLandscapes(landscapes.data);
      setCurrentImage(landscapes.data[0].image);
    });
  }, []);

  return (
    <div id="gallery-page">
      <div id="top-gallery" className="section">
        <div>
          <h1 className="oleo">Gallery</h1>
          <p>
            These are other people’s individually generated backgrounds. Do not
            steal. Generate your own landscape{" "}
            <HashLink to="/#generate-section">here.</HashLink>
          </p>
        </div>
        <div className="center">
          {galleryLandscapes && galleryLandscapes.length !== 0 && (
            <Carousel images={galleryLandscapes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
