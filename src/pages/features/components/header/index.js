import Styles from "./header.module.scss";
import firstScreen from "../../../../images/first-screen.png";
import HeaderBackGrounds from "../../../../components/header-backgrounds";

const Header = (props) => {
  return (
    <header className={`container ${Styles.header}`}>
      <div className={Styles.header__left}>
        <h3 className={Styles.header__heading}>
          The most trusted way to access, store and swap Ethereum tokens
        </h3>
        <button className={`btn big-btn ${Styles.header__btn}`}>
          Install now
        </button>
        <div className={Styles.leftMiddleYellowCicle}></div>
      </div>
      <div className={Styles.header__right}>
        <img
          src={firstScreen}
          alt='altswallet-extension'
          className={Styles.header__img}
        />
      </div>

      <HeaderBackGrounds />
    </header>
  );
};
export default Header;
