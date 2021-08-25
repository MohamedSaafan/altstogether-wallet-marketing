import Styles from "./footer.module.scss";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = (props) => {
  return (
    <footer className={`container ${Styles.footer}`}>
      <div className={Styles.footer__symbols}>
        <div className={Styles.footer__symbols__icon}>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className={Styles.footer__symbols__icon}>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className={Styles.footer__symbols__icon}>
          <a href='#'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className={Styles.footer__copyright}>
        <p>
          Copyright 2021 BudgetBakers s.r.o | All Rights Reserved |{" "}
          <span>
            <a href='#'>Privacy Plicy</a>
          </span>{" "}
          |{" "}
          <span>
            <a href='#'>Terms of Service</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
