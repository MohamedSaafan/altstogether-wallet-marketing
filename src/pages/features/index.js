import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import BestPrice from "./components/best-price";
import Header from "./components/header";
import HowItWorks from "./components/how-it-works";
import InstallAltsTogether from "./components/install-altstogether";
import SwapFromAnyWhere from "./components/swap-from-any-where";
import WhyUs from "./components/why-us";
import Styles from "./features.module.scss";

const Features = (props) => {
  return (
    <div className={Styles.features}>
      <NavBar />
      <Header />
      <SwapFromAnyWhere />
      <HowItWorks />
      <WhyUs />
      <BestPrice />
      <InstallAltsTogether />
      <Footer />
    </div>
  );
};

export default Features;
