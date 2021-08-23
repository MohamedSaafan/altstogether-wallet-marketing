import Styles from "./header.module.scss";
import headerImage from "../../../../images/blog-header-image.svg";
const Header = (props) => {
  return (
    <header className={Styles.header}>
      <h3 className={Styles.header__heading}>AltsTogether Blog</h3>
      <p className={Styles.header__details}>
        Here you will find our Latest News, Partnerships, and Advisors added to
        our team.
      </p>
      <div className={Styles.header__image}>
        <img src={headerImage} alt='Blog' />
      </div>
    </header>
  );
};

export default Header;
