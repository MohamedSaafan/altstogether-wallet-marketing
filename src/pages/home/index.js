import NavBar from "../../components/navbar";
import Styles from "./home.module.scss";

const Home = (props) => {
  return (
    <div className={Styles.home}>
      <NavBar />
    </div>
  );
};

export default Home;
