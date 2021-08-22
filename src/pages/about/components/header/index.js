import Styles from "./header.module.scss";
import aboutHeaderImage from "../../../../images/about-header-image.svg";

const Header = (props) => {
  return (
    <div className={`container ${Styles.header}`}>
      <div className={Styles.header__left}>
        <h3 className={Styles.header__heading}>About</h3>
        <p className={Styles.header__details}>
          AltsTogether is a global community of developers and designers
          dedicated to making the world a better place with blockchain
          technology. Our mission is to democratize access to the decentralized
          web, and through this mission, to transform the internet and world
          economy to one that empowers individuals through interactions based on
          consent, privacy, and free association. <br />
          <br /> We join our amazingly talented colleagues in the wider
          ConsenSys product family in working to deliver a more fair, free and
          decentralized internet-based economy for all.
        </p>
      </div>
      <div className={Styles.header__right}>
        <div className={Styles.header__img}>
          <img src={aboutHeaderImage} alt='hello' />
        </div>
      </div>
    </div>
  );
};

export default Header;
