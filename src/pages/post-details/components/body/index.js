import Styles from "./body.module.scss";
import blogImage from "../../../../images/blog-image-full.svg";

const Body = (props) => {
  return (
    <div className={`container ${Styles.body}`}>
      <h3 className={Styles.body__heading}>
        Automate a Savings and Investment Budget
      </h3>
      <p className={Styles.body__details}>
        peaking of monthly payments, there may be another category of items you
        actually do want to "set and forget." These are savings or investment
        payments. If you already have a master monthly spending budget, then
        adding a savings or investment category is easy. Its's also easy to set
        up planned payments for a new investment or savings fund, and set
        recurring payments in your bank management software to either a 3rd
        party investment fund like an IRA, or a separate savings account that is
        "off the books" when it comes to your monthly budget.
      </p>

      <div className={Styles.body__image}>
        <img src={blogImage} alt='post-image' />
      </div>
      <p className={Styles.body__details}>
        Conserfvatively, personal finace experts recommend you try and save or
        invest at least 25% of your net monthly income - meanining 25% of the
        money left over after taxes, social, and medical insurance payments.
        That can be a lofty goal for some of us, but the higher your savings and
        investment is earlier in life, the more money you'll have later
        on.thThis is particularly true for investments: a simple mutual fund
        that tracks the S&#38;P 500 would have returned earnly 10% per year on
        average over the last 30 years. This would mean that a recurring monthly
        investment of just $100 would have returned $245,00, including nearly
        $100,000 in interest after ust 10 years. <br /> <br /> Does that number
        astonish you? It shouldn't. You can use free tools like the Interest
        Calculator to find out for yourself how much comppounding interest
        really multiplies your wealth.
      </p>
    </div>
  );
};
export default Body;
