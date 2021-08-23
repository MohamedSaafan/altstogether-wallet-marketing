import Styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import NavBarDropdown from "../navbar-dorpdown";

const aboutLinks = [
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
];

const supportLinks = [{ name: "FAQs", path: "/support" }];

const featuresLinks = [{ name: "Swap", path: "/features" }];

const NavBar = (props) => {
  return (
    <nav className={Styles.navbar}>
      <div className='container'>
        <div className={Styles.navbar__logo}>
          <div className={Styles.navbar__logo__container}></div>
          <h1 className={Styles.navbar__logo__heading}>
            <span>Alts</span>Together
          </h1>
        </div>
        <ul className={Styles.navbar__navs}>
          <li className={Styles.navbar__nav}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`${Styles.navbar__navActive} ${Styles.navbar__nav}`}>
            <Link to='/features'>
              Features
              <NavBarDropdown links={featuresLinks} />
            </Link>
          </li>
          <li className={Styles.navbar__nav}>
            <Link to='/support'>
              Support
              <NavBarDropdown links={supportLinks} />
            </Link>
          </li>
          <li className={Styles.navbar__nav}>
            <Link to='/about'>
              About
              <NavBarDropdown links={aboutLinks} />
            </Link>
          </li>
        </ul>
        <button className={`big-btn ${Styles.navbar__download}`}>
          Download
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
