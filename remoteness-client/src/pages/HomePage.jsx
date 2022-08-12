import { useEffect, useState } from "react";
import HeaderSection from "./../components/HeaderSection";
import AboutSection from "../components/AboutSection";
import GenerateSection from "../components/GenerateSection";
import GallerySection from "../components/GallerySection";
import GalleryPage from "../components/GalleryPage";
import Footer from "./../components/Footer";

import "./HomePage.scss";

const HomePage = () => {
  const [landscape, setLanscape] = useState("/leer.png");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isHelpDiv, setIsHelpDiv] = useState(false);

  const toggleHelpDiv = () => {
    setIsHelpDiv(!isHelpDiv);
  };

  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <GenerateSection
        landscape={landscape}
        onLandscapeChange={setLanscape}
        isGenerated={isGenerated}
        onIsGeneratedChange={setIsGenerated}
        onChangeHelpDiv={toggleHelpDiv}
      />
      {isHelpDiv && (
        <div id="help-div">
          The download should work perfectly with chrome / safari. In case of
          problems with the browser of your mobile device: press on the image
          and store it manually.
        </div>
      )}
      <GallerySection />
      <GalleryPage />

      <Footer />
    </div>
  );
};

export default HomePage;
