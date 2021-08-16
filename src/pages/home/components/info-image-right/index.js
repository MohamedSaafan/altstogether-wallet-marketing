import Styles from "../info-image-left/info.module.scss";
import infoRight from "../../../../images/info-right.svg";

const InfoImageRight = (props) => {
  return (
    <div className={`container ${Styles.info}`}>
      <div className={Styles.info__left}>
        <h3 className={Styles.info__heading}>Explore blockchain apps</h3>
        <p className={Styles.info__details}>
          AltsWallet provides the simplest yest most secure way to connect to
          blockchain-based applications. You are always in control when
          interacting on the new decentralized web.
        </p>
      </div>
      <div className={Styles.info__right}>
        <img src={infoRight} alt='info-left' />
      </div>
    </div>
  );
};

export default InfoImageRight;
