import Styles from "./install-altstogether.module.scss";

const InstallAltsTogether = (props) => {
  return (
    <div className={Styles.install}>
      <h4 className={Styles.install__heading}>
        Install Altstogether and start swapping
      </h4>
      <button className={`btn big-btn ${Styles.install__btn}`}>
        Install now
      </button>
    </div>
  );
};

export default InstallAltsTogether;
