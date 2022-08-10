import neustartLogo from "./neustart-logo.jpg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>
        <b>remoteness.art</b> is an art project by <br /> Johanna Käthe Michel.
        <br />
        Web Design and Code by <br /> Johanna Michel. <br /> Images by AI.
        <br /> Supported by Neustart Kultur <br /> and Galerie Saalbau Neukölln.
      </p>
      <div>
        <img src={neustartLogo} alt="Logo Neustart Kultur" />
      </div>
    </footer>
  );
};

export default Footer;
