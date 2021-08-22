import Footer from "../../components/footer";
import HeaderBackGrounds from "../../components/header-backgrounds";
import NavBar from "../../components/navbar";
import Styles from "./about.module.scss";
import Header from "./components/header";
import Team from "./components/team";

const About = (props) => {
  return (
    <div className={Styles.about}>
      <NavBar />
      <Header />
      <HeaderBackGrounds />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
