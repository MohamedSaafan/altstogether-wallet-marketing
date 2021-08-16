import Styles from "./footer.module.scss";
import altsWhiteLogo from "../../images/alts-white-logo.svg";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__browncontainer}>
        <div className='container'>
          <div className={Styles.footer__header}>
            <img className={Styles.footer__logo} src={altsWhiteLogo} />
            <h4 className={Styles.footer__heading}>AltsTogether</h4>
          </div>
          <div className={Styles.footer__links}>
            <div className={Styles.footer__links__group}>
              <h4 className={Styles.footer__links__heading}>LEARN MORE</h4>
              <nav className={Styles.footer__navs}>
                <Link to='/' className={Styles.footer__nav}>
                  About
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Developers
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Install
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Documentation
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  AltsWallet Institutional
                </Link>
              </nav>
            </div>
            <div className={Styles.footer__links__group}>
              <h4 className={Styles.footer__links__heading}>GET INVOLVED</h4>
              <nav className={Styles.footer__navs}>
                <Link to='/' className={Styles.footer__nav}>
                  GitHub
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Gitcoin
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Open Positions
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Swag Shop
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Press & Partnerships
                </Link>
              </nav>
            </div>
            <div className={Styles.footer__links__group}>
              <h4 className={Styles.footer__links__heading}>CONNECT</h4>
              <nav className={Styles.footer__navs}>
                <Link to='/' className={Styles.footer__nav}>
                  FAQs
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Support
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Blog
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Twitter
                </Link>
              </nav>
            </div>
            <div className={Styles.footer__links__group}>
              <h4 className={Styles.footer__links__heading}>LEGAL</h4>
              <nav className={Styles.footer__navs}>
                <Link to='/' className={Styles.footer__nav}>
                  Privacy Policy
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Terms of Use
                </Link>
                <Link to='/' className={Styles.footer__nav}>
                  Contributor License Agreement
                </Link>
              </nav>
            </div>
          </div>
          <div className={Styles.footer__copyrights}>
            <p>&copy; 2021 AltsWallet . A ConsenSys Formation</p>
          </div>
        </div>
      </div>
      <div className={Styles.footer__bluecontainer}></div>
    </footer>
  );
};

export default Footer;
