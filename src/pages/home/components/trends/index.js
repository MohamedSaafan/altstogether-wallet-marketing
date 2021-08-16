import Styles from "./trends.module.scss";
import aave from "../../../../images/aave.svg";
import maker from "../../../../images/maker.svg";
import axie from "../../../../images/axie.svg";
import compound from "../../../../images/compound.svg";
import gitcoin from "../../../../images/gitcoin.svg";
import openSea from "../../../../images/opensea.svg";
import rarible from "../../../../images/rarible.svg";
import uniswap from "../../../../images/uniswap.svg";

const Trends = (props) => {
  return (
    <div className={`container ${Styles.trends}`}>
      <h3 className={Styles.trends__heading}>
        Your key to blockchain applications
      </h3>
      <p className={Styles.trends__details}>
        AltsTogether provides an essential utility for blockchain newcomers,
        token traders, crypto gamers, and developer. Over a million download and
        counting!
      </p>
      <div className={Styles.trends__row}>
        <div className={Styles.trends__element}>
          <img src={aave} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={axie} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={compound} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={gitcoin} alt='trend' />
        </div>
      </div>
      <div className={Styles.trends__row}>
        <div className={Styles.trends__element}>
          <img src={maker} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={openSea} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={rarible} alt='trend' />
        </div>
        <div className={Styles.trends__element}>
          <img src={uniswap} alt='trend' />
        </div>
      </div>
    </div>
  );
};

export default Trends;
