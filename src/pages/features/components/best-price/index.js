import Styles from "./best-price.module.scss";
import infoLeft from "../../../../images/info-left.svg";
import uniswap from "../../../../images/uniswap-features.svg";
import totle from "../../../../images/totle.svg";
import paraswap from "../../../../images/paraswap.svg";
import curve from "../../../../images/curve.svg";
import airswap from "../../../../images/airswap.svg";
import inch from "../../../../images/1inch.svg";
import oxapi from "../../../../images/oxapi.svg";
const BestPrice = (props) => {
  return (
    <div className={`container ${Styles.best}`}>
      <div className={Styles.best__top}>
        <div className={Styles.best__top__left}>
          <img src={infoLeft} alt='The Best' />
        </div>
        <div className={Styles.best__top__right}>
          <h3 className={Styles.best__top__heading}>
            Find the <span>best swap</span> across...
          </h3>
          <div className={Styles.best__top__brands}>
            <div className={Styles.best__top__brands__row}>
              <div className={Styles.best__top__brands__brand}>
                <img src={uniswap} alt='uniswap' />
              </div>
              <div className={Styles.best__top__brands__brand}>
                <img src={totle} alt='totle' />
              </div>
              <div className={Styles.best__top__brands__brand}>
                <img src={paraswap} alt='paraswap' />
              </div>
            </div>
            <div className={Styles.best__top__brands__row}>
              <div className={Styles.best__top__brands__brand}>
                <img src={curve} alt='curve' />
              </div>
              <div className={Styles.best__top__brands__brand}>
                <img src={airswap} alt='airswap' />
              </div>
              <div className={Styles.best__top__brands__brand}>
                <img src={inch} alt='1inch' />
              </div>
            </div>
            <div className={Styles.best__top__brands__row}>
              <div className={Styles.best__top__brands__brand}>
                <img src={oxapi} alt='0X API' />
              </div>

              <div className={Styles.best__top__brands__brand}>
                <p>More coming soon !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.best__bottom}>
        <div className={Styles.best__bottom__left}>
          <h3>
            Get the <span>the best price </span> from the{" "}
            <span> top liquidity </span> sources.
          </h3>
        </div>
        <div className={Styles.best__bottom__right}>
          <h3 className={Styles.best__bottom__right__heading}>
            Review our official contracts audit
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BestPrice;
