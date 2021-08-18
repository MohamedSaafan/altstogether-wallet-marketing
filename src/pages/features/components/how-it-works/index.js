import Styles from "./how-it-works.module.scss";

const HowItWorks = (props) => {
  return (
    <div className={Styles.how}>
      <h3 className={Styles.how__heading}>How it works</h3>
      <video controls className={Styles.how__video}>
        Your browser does not support the video tag.
      </video>
      <p className={Styles.how__details}>
        Unlike other crypto wallets out there, AltsTogether Wallet is built to
        be privacy-first. We empower you to access, store and swap tokens,
        without having to worry about dapps or exchanges accessing more personal
        data than you've consented to give. Whether you'are participating in
        decentralized finance, or surfing web 3.0, with AltsTogether, you are
        always in complete control of your data.
      </p>
    </div>
  );
};
export default HowItWorks;
