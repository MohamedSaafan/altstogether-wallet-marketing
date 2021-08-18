import Styles from "./header-backgrounds.module.scss";

const HeaderBackGrounds = (props) => {
  return (
    <div>
      <div className={Styles.bigBlueCircle}></div>
      <div className={Styles.topBigYellowCircle}></div>
      <div className={Styles.middleTopYellowCircle}></div>
      <div className={Styles.middleBottomYellowCircle}></div>
      <div className={Styles.middleBottomBlueCircle}></div>
    </div>
  );
};

export default HeaderBackGrounds;
