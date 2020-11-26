import Logo from "../../logo/logo";
import {LogoClasses} from "../../../../consts";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Logo isLink={true} additionalClassNames={[LogoClasses.LOGO_LINK_LIGHT]} />
      </div>

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
