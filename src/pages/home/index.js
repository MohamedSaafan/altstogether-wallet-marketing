import NavBar from "../../components/navbar";
import Header from "./components/header";
import InfoImageLeft from "./components/info-image-left";
import InfoImageRight from "./components/info-image-right";
import LearnMore from "./components/learn-more";
import Styles from "./home.module.scss";
import infoLeft from "../../images/info-left.svg";
import infoLeftSecond from "../../images/info-left-second.svg";
import GetStarted from "./components/get-started";
import Trends from "./components/trends";
import Footer from "../../components/footer";

const Home = (props) => {
  return (
    <div className={Styles.home}>
      <NavBar />
      <Header />
      <LearnMore />
      <InfoImageLeft
        image={infoLeft}
        heading='Buy, store, send and swap tokens'
        details='Available as a browser extension and as a mobile app, AltsWallet
          equips you with a key vault, secure login, token wallet, and token
          exchange everything you need to manage your digital assets.'
      />
      <InfoImageRight />
      <InfoImageLeft
        image={infoLeftSecond}
        heading='Own your data'
        details='AltsWallet generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private'
      />
      <GetStarted />
      <Trends />
      <Footer />
    </div>
  );
};

export default Home;
