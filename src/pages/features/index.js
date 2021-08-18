import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import Header from "./components/header";
import HowItWorks from "./components/how-it-works";
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
      <Footer />
    </div>
  );
};

export default Features;
