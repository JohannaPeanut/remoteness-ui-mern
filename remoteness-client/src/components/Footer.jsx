import neustartLogo from "./neustart-logo.jpg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>
        <b>remoteness.art</b> is an art project by{" "}
        <a href="http://start.johannamichel.com/" target="_blank">
          Johanna Käthe Michel
        </a>
        .
        <br />
        Web Design and Code by <br />
        <a href="https://github.com/JohannaPeanut" target="_blank">
          Johanna Michel
        </a>
        . <br /> Images by AI.
        <br /> Supported by Neustart Kultur <br /> and Galerie Saalbau Neukölln.
      </p>
      <div>
        <img
          src={neustartLogo}
          className="filtered"
          alt="Logo Neustart Kultur"
        />
      </div>
    </footer>
  );
};

export default Footer;
