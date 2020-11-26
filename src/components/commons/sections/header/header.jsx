import Logo from "../../logo/logo";
import UserBlock from "../../user-block/user-block.connect";
import headerProps from "./header.prop";

const Header = (props) => {
  const {title, additionalClassNames, children, logoIsLink} = props;
  return (
    <header className={`page-header ${additionalClassNames ? additionalClassNames.join(` `) : ``}`}>
      <div className="logo">
        <Logo isLink={logoIsLink}/>
      </div>
      {children}
      <UserBlock />
      {title && (<h1 className="page-title user-page__title">{title}</h1>)}
    </header>
  );
};

Header.propTypes = headerProps;

export default Header;
