import Styles from "./about.module.scss";
import NavBar from "../../components/navbar";
const About = (props) => {
  return (
    <div className={Styles.about}>
      <NavBar />
    </div>
  );
};

export default About;
