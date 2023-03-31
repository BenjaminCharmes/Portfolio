// Components
import FooterTitle from "./FooterTitle";
import FooterIcons from "./FooterIcons";

// SCSS
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <FooterTitle />
      <FooterIcons />
    </div>
  );
};

export default Footer;
