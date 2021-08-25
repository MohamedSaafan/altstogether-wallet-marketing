import Styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={`container ${Styles.header}`}>
      <div className={Styles.header__left}>
        <h3 className={Styles.header__heading}>
          Budget Spring Cleaning : Part 1 of 2
        </h3>
        <p className={Styles.header__details}>
          While global climate change may be confusing the birds and the trees
          this year, it is still technically spring across the Northern
          Hemisphere (soryy Australia!). It's time to clean up your budget!
          <br /> <br /> A new year, a new pile of bills you may want to look
          into. Most of us collect at least a few unwanted services here and
          there that we can cancel but a deep cleaning of your budget means more
          than justcancelling that video streaming subscription you don't really
          use anymore. It also means establishing better planning habits for
          your future spending. So here are 11 (or more?) tips on how to
          thoroughly spring Clean Your Budget. This will be a mix of money
          saving, and smarter money spending habits you can establish with the
          Budgeting features in Wallet.
          <br /> <br />
          (Note: All finks to features in this post are for Andriod Users. IOS
          users can still find these tools in their app)
        </p>
      </div>
    </header>
  );
};

export default Header;
