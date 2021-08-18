import Styles from "./swap-from-any-where.module.scss";
import firstScreen from "../../../../images/first-screen.png";
import walletSend from "../../../../images/wallet-send.png";
import wallet2 from "../../../../images/wallet-3.png";

const SwapFromAnyWhere = (props) => {
  return (
    <div className={`container ${Styles.swap}`}>
      <h3 className={Styles.swap__heading}>Swap from anywhere, anytime</h3>
      <p className={Styles.swap__details}>
        Swap tokens directly from your desktop or mobile wallet. The Swaps
        feature combines data from decentralized exchange aggregators, market
        makers, and DEXs, to ensure you get the very best price with the lowest
        network fees.
      </p>
      <div className={Styles.swap__screens}>
        <div className={Styles.swap__screens__image}>
          <img src={firstScreen} alt='first-screen' />
        </div>
        <div className={Styles.swap__screens__image}>
          <img src={walletSend} alt='first-screen' />
        </div>
        <div className={Styles.swap__screens__image}>
          <img src={wallet2} alt='first-screen' />
        </div>
        <div className={Styles.swap__screens__image}>
          <img src={wallet2} alt='first-screen' />
        </div>
      </div>
    </div>
  );
};

export default SwapFromAnyWhere;
