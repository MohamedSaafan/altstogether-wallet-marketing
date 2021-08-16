import Styles from "./get-started.module.scss";

import getStartedLogo from "../../../../images/get-started-logo.svg";
const GetStarted = (props) => {
  return (
    <div className={Styles.started}>
      <div className={Styles.started__logo}>
        <img src={getStartedLogo} alt='AltsTogether' />
      </div>
      <h3 className={Styles.started__heading}>Get started</h3>
      <button className={`${Styles.started__btn} btn big-btn`}>
        Install AltsWallet Today
      </button>
    </div>
  );
};

export default GetStarted;
