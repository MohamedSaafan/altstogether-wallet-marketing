import Styles from "./post-details.module.scss";
import NavBar from "../../components/navbar";
import HeaderBackgrounds from "../../components/header-backgrounds";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const PostDetails = (props) => {
  return (
    <div className={Styles.postdetails}>
      <NavBar />
      <HeaderBackgrounds />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default PostDetails;
