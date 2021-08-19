import Styles from "./header.module.scss";

const Header = (props) => {
  return (
    <div className={`container ${Styles.header}`}>
      <h3 className={Styles.header__heading}>Frequently Asked questions</h3>
      <p className={Styles.header__details}>
        Answers to commonly asked questions
      </p>
    </div>
  );
};
export default Header;
