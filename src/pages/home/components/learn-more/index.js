import Styles from "./learn-more.module.scss";
import arrowDown from "../../../../images/arrow-down.png";
const LearnMore = (props) => {
  return (
    <div className={Styles.learnmore}>
      <button className='btn'>
        LEARN MORE{" "}
        <span className={Styles.arrowDown}>
          {" "}
          <img src={arrowDown} alt='arrow' />
        </span>
      </button>
    </div>
  );
};

export default LearnMore;
