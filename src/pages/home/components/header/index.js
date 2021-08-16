import Styles from "./header.module.scss";
import firstScreen from "../../../../images/first-screen.png";
import HeaderBackGrounds from "../header-backgrounds";

const Header = (props) => {
  return (
    <header className={Styles.header}>
      <HeaderBackGrounds />
      <div className={`${Styles.header__content} container`}>
        <div className={Styles.header__left}>
          <h2 className={Styles.header__heading}>
            A crypto wallet &#38; gateway to blockChain apps{" "}
          </h2>
          <p className={Styles.header__details}>
            Start exploring blockchain applications in secons. Trusted by over 1
            million users worldwide.
          </p>
          <button className={`btn big-btn ${Styles.header__button}`}>
            Install now
          </button>
        </div>
        <div className={Styles.header__right}>
          <img
            src={firstScreen}
            alt='wallet-image'
            className={Styles.header__extensionImage}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
