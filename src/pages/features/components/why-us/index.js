import Styles from "./why-us.module.scss";
import altsLogo from "../../../../images/alts-logo.svg";
import featuresCurve from "../../../../images/features-curve.svg";
import featuresStatistics from "../../../../images/features-statistics.svg";
const WhyUs = (props) => {
  return (
    <div className={`container ${Styles.why}`}>
      <h3 className={Styles.why__heading}>why swap with AltsTogether</h3>
      <div className={Styles.why__details}>
        <div className={Styles.why__details__item}>
          <div className={`${Styles.why__leftFirst} ${Styles.why__left}`}>
            <div
              className={`${Styles.why__left__imageFirst} ${Styles.why__left__image}`}
            >
              <img src={altsLogo} alt='alts-logo' />
            </div>
          </div>
          <div className={Styles.why__right}>
            <h4 className={Styles.why__details__item__heading}>
              Find the best price every time
            </h4>
            <p className={Styles.why__details__item__details}>
              Swaps ensures that you always has access to the largest selectionn
              of tokens and the most competitive prices, by providing prices
              from multiple aggregators and individual market makers in one
              place A service fee of 0.875% is automatically factored into each
              quote, which supports ongoing development to make AltsTogether
              even better.
            </p>
          </div>
        </div>

        <div
          className={`${Styles.why__details__itemSecond} ${Styles.why__details__item}`}
        >
          <div className={Styles.why__left}>
            <h4 className={Styles.why__details__item__heading}>
              Reduced gas costs
            </h4>
            <p className={Styles.why__details__item__details}>
              We pursue a different path to locate the best trade. Each route
              requires a varying amount of gas fees to execute the transaction.
              Swaps sources the best prices and determines which liquidity
              source is the most gas efficient for every trade.
            </p>
          </div>
          <div className={` ${Styles.why__right}`}>
            <div
              className={` ${Styles.why__curves} ${Styles.why__right__image}`}
            >
              <img
                src={featuresCurve}
                alt='Curve'
                className={Styles.why__curves__curve}
              />
              <img
                src={featuresStatistics}
                alt='statistics'
                className={Styles.why__curves__statistics}
              />
            </div>
          </div>
        </div>

        <div className={Styles.why__details__item}>
          <div className={`${Styles.why__leftSecond} ${Styles.why__left}`}>
            <div
              className={`${Styles.why__left__imageSecond} ${Styles.why__left__image}`}
            >
              <div className={Styles.why__left__imageSecond__bar}>
                This Will enable{" "}
                <span className={Styles.why__left__imageSecond__bar__weighted}>
                  DAI{" "}
                </span>
                for swapping{" "}
                <span className={Styles.why__left__imageSecond__bar__link}>
                  Edit limit
                </span>
              </div>
            </div>
          </div>
          <div className={Styles.why__right}>
            <h4 className={Styles.why__details__item__heading}>
              Fewer approvals
            </h4>
            <p className={Styles.why__details__item__details}>
              With Swaps, you only need to approve each token once to gain
              access to all the available liquidity on DeFi, reducing time and
              gas costs.
            </p>
          </div>
        </div>

        <div
          className={`${Styles.why__details__itemFourth} ${Styles.why__details__item}`}
        >
          <div className={Styles.why__left}>
            <h4 className={Styles.why__details__item__heading}>
              Slippage Protection
            </h4>
            <p className={Styles.why__details__item__details}>
              Large Swaps are Often subject to wild price swings when there is
              insufficient liquidity available on a particular DEX. When
              swapping with AltsTogether, orders are spread across virtually all
              DEXs to reduce slippage impact on the final price.
            </p>
          </div>
          <div className={` ${Styles.why__right}`}>
            <div className={Styles.why__slippage}>
              <div className={Styles.why__slippage__circle}></div>

              <div
                className={`${Styles.why__slippage__barTop} ${Styles.why__slippage__bar}`}
              >
                <div className={Styles.why__slippage__bar__message}>2%</div>
              </div>

              <p className={Styles.why__slippage__details}>
                With Swaps, you only need to approve each token once to gain
                access to all the available liiquidity on DeFi, reducing time
                and gas Costs.
              </p>

              <div
                className={`${Styles.why__slippage__barTop} ${Styles.why__slippage__bar}`}
              >
                <div className={Styles.why__slippage__bar__message}>4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
