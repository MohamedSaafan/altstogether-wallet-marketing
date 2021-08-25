import Styles from "./post.module.scss";
import blogImage from "../../../../images/blog-image-1.svg";
import { Link } from "react-router-dom";
const Post = (props) => {
  return (
    <div className={Styles.post}>
      <div className={Styles.post__image}>
        <img src={blogImage} alt='blog-image' />
      </div>
      <h4 className={Styles.post__heading}>
        Budget Spring Cleaning: Part 1 of 2
      </h4>
      <p className={Styles.post__details}>
        While global climate change may be confusing the birds and the trees
        this year, it is still technically spring across the Northern Hemisphere
        (sorry Australia!). It's time to clearn up your budget! A new year, a
        new pile of bills you may want to look into. Most of us collect at least
        a few unwanted...
      </p>

      <div className={Styles.post__footer}>
        <p className={Styles.post__author}>By LIoyd</p>
        <button className={`btn ${Styles.post__readmore}`}>
          <Link to='/blog/posts/1'>Read more</Link>
        </button>
      </div>
    </div>
  );
};
export default Post;
