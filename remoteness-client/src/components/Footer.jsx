import neustartLogo from "./neustart-logo.jpg";

const Footer = () => {
  return (
    <footer>
      <p>
        <b>remoteness.art</b> is an art project by <br /> Johanna Käthe Michel.
        <br />
        Web Design Code by <br /> Johanna Michel. <br /> Images by AI.
        <br /> Supported by Neustart Kultur Galerie Saalbau Neukölln.
      </p>
      <img src={neustartLogo} alt="Logo Neustart Kultur" />
    </footer>
  );
};

export default Footer;
