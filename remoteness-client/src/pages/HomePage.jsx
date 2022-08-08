import { Link } from "react-router-dom";
import { BiDownArrowAlt } from "react-icons/bi";
import { createNewLandscape } from "./../services/landscape";
import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const HomePage = () => {
  const [landscape, setLanscape] = useState("/leer.png");

  const [isGenerated, setIsGenerated] = useState(false);

  // useEffect(()=> {
  //   const newLandscape = '';
  //   createNewLandscape()
  //   .then((newDoc) => console.log(newDoc) )
  // }, [])

  const generateLandscape = () => {
    createNewLandscape().then((newDoc) => {
      setLanscape(newDoc.data.displayedLandscape.image);
      setIsGenerated(true);
    });
  };

  return (
    <div>
      <section className="section" id="headerSection">
        <Navbar />
        <h1 id="header">
          remoteness
          <br />
          .art
        </h1>
        <Link to="/" className="btn">
          Generate
        </Link>
        <Link to="/" className="arrow">
          <BiDownArrowAlt />
        </Link>
      </section>

      <section className="section" id="aboutSection">
        <h1>Work in a unique landscape!</h1>
        <p>
          A data set was created from landscape photographs of travel
          destinations that were most frequently searched for in Corona spring
          2020 when the home office and video calls became the new normal for
          many office workers. An AI has learned to create images of longing. On
          <i>remoteness.art</i> you can get your individual AI generated
          landscape background.
        </p>
        <Link
          to="http://start.johannamichel.com/remoteness-insularity-difficult-topography/"
          className="btn no-outline"
        >
          Read more
        </Link>
        <Link to="/" className="arrow">
          <BiDownArrowAlt />
        </Link>
      </section>

      <section className="section" id="generateSection">
        <h1>
          {isGenerated
            ? "Your unique landscape!"
            : "A unique landscape for you!"}
        </h1>
        <p>
          {isGenerated
            ? "This landscape is only for you. Feel free to share this AI, but let it work only once for you. "
            : "A unique landscape, an ideal background can be generated for you..."}
        </p>
        {!isGenerated && (
          <button className="btn" onClick={generateLandscape}>
            Generate
          </button>
        )}
        {!isGenerated ? (
          <div className="imageFrame"></div>
        ) : (
          <img src={landscape} alt="AI generated landscape" />
        )}
        {isGenerated && (
          <>
            <a
              href={landscape}
              className="btn"
              download="my-unique-landscape.jpg"
            >
              Download*
            </a>

            <div id="help-div">
              The download should work perfectly with chrome / safari. In case
              of problems with the browser of your mobile device: press on the
              image and store it manually.
            </div>
          </>
        )}
        <Link to="/" className="arrow">
          <BiDownArrowAlt />
        </Link>
      </section>

      <section className="section" id="gallerySection">
        <img
          id="phone"
          src="landscape-on-screen.png"
          alt="landscape on screen"
        />
        <h2>Share</h2>
        <Link to="/gallery" className="btn no-outline">
          Gallery
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
