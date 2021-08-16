import Styles from "./info.module.scss";
const InfoImageLeft = ({ image, heading, details }) => {
  return (
    <div className={`container ${Styles.info}`}>
      <div className={Styles.info__left}>
        <img src={image} alt='info-left' />
      </div>
      <div className={Styles.info__right}>
        <h3 className={Styles.info__heading}>{heading}</h3>
        <p className={Styles.info__details}>{details}</p>
      </div>
    </div>
  );
};

export default InfoImageLeft;
