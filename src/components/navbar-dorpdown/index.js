import Styles from "./navbar-dropdown.module.scss";
import { Link } from "react-router-dom";
const NavBarDropdown = ({ links }) => {
  return (
    <ul className={Styles.dropdown}>
      {links.map(({ name, path }) => {
        return (
          <li key={name}>
            <Link to={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarDropdown;
