import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { createNewLandscape } from "./../services/landscape";

import "./GenerateSection.scss";

const GenerateSection = ({
  landscape,
  onLandscapeChange,
  isGenerated,
  onIsGeneratedChange,
  onChangeHelpDiv,
}) => {
  const generateLandscape = () => {
    createNewLandscape().then((newDoc) => {
      onLandscapeChange(newDoc.data.displayedLandscape.image);
      onIsGeneratedChange(true);
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
      {!isGenerated && (
        <button className="btn oleo" onClick={generateLandscape}>
          Generate
        </button>
      )}
      {!isGenerated ? (
        <div className="imageFrame"></div>
      ) : (
        <img
          className="imageFrame"
          src={landscape}
          alt="AI generated landscape"
        />
      )}
      {isGenerated && (
        <>
          <a
            href={landscape}
            className="btn oleo"
            download="my-unique-landscape.jpg"
          >
            Download
          </a>
          <button onClick={onChangeHelpDiv} className="help-btn">
            ?
          </button>
        </>
      )}

      <Link to="/" className="arrow">
        <BiDownArrowAlt />
      </Link>
    </section>
  );
};

export default GenerateSection;
