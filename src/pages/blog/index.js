import Styles from "./blog.module.scss";
import NavBar from "../../components/navbar";
import HeaderBackGrounds from "../../components/header-backgrounds";
import Footer from "../../components/footer";
import Header from "./components/header";
import PostsDirectory from "./components/posts-directory";

const Blog = (props) => {
  return (
    <div className={Styles.blog}>
      <NavBar />
      <HeaderBackGrounds />
      <Header />
      <PostsDirectory />
      <Footer />
    </div>
  );
};

export default Blog;
