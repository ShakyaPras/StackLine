import "./Header.css";
import stackLineLogo from "../../assets/images/stackline_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={stackLineLogo} className="logo" alt="logo"></img>
    </header>
  );
};

export default Header;
