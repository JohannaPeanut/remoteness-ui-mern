import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { createNewLandscape } from "./../services/landscape";
import { useState } from "react";

import "./GenerateSection.scss";

const GenerateSection = ({
  landscape,
  onLandscapeChange,
  isGenerated,
  onIsGeneratedChange,
  onChangeHelpDiv,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const generateLandscape = () => {
    createNewLandscape().then((newDoc) => {
      setIsLoading(true);
      // imitating the API loading time with setInterval
      setInterval(() => {
        onLandscapeChange(newDoc.data.displayedLandscape.image);
        onIsGeneratedChange(true);
        setIsLoading(false);
      }, 1500);
    });
  };

  return (
    <section className="section" id="generate-section">
      <div>
        <h1 className="oleo">
          {isGenerated
            ? "Your unique landscape!"
            : "Generate a unique landscape!"}
        </h1>
        <p>
          {isGenerated
            ? "This landscape is generated exclusively for you. Please let this AI run only once. "
            : "A unique landscape, an ideal background can be generated for you..."}
        </p>
      </div>
      <div className="center">
        {!isGenerated && (
          <button className="btn oleo" onClick={generateLandscape}>
            Generate
          </button>
        )}
      </div>
      <div className="center">
        {!isGenerated ? (
          <div className="imageFrame"></div>
        ) : (
          <img
            className="imageFrame"
            src={landscape}
            alt="AI generated landscape"
          />
        )}
      </div>

      {isGenerated && (
        <>
          <div className="center">
            <a
              href={landscape}
              className="btn oleo"
              download="my-unique-landscape.jpg"
            >
              Download
            </a>
          </div>
          <div className="center">
            <button onClick={onChangeHelpDiv} className="help-btn">
              ?
            </button>
          </div>
        </>
      )}

      <Link to="/" className="arrow center">
        <BiDownArrowAlt />
      </Link>
    </section>
  );
};

export default GenerateSection;
