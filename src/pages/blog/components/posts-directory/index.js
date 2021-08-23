import Styles from "./posts-directory.module.scss";
import Post from "../post";
const PostsDirectory = (props) => {
  return (
    <div className={`container ${Styles.posts}`}>
      <Post />
      <Post />
    </div>
  );
};

export default PostsDirectory;
