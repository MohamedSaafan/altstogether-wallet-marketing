import Styles from "./support.module.scss";
import NavBar from "../../components/navbar";
import Header from "./components/header";
import HeadersBackgrounds from "../../components/header-backgrounds";
import QuestionsGroup from "./components/questions-group";

const gettingStartedQuestions = [
  {
    question: "How can i Install AltsWallet",
    answer:
      "you can go through the chrome extensions store and search about it in the search bar then add it to your extensions list and then you can create an account there!",
    id: "0",
  },
  {
    question:
      "I am an AltsTogether extension user, how do the same wallet in AltsTogether mobile app ?",
    key: "1",
  },
  {
    question: "How do i get funcs (digital currency) in AltsTogether",
    key: "2",
  },
  {
    question: "How do I transfer my existing ETH and tokens to AltsTogether ?",
    key: "3",
  },
  {
    question: "How do I  send ETH and tokens ?",
    key: "4",
  },
];

const Support = (props) => {
  return (
    <div className={Styles.support}>
      <NavBar />
      <Header />
      <HeadersBackgrounds />
      <QuestionsGroup
        heading='Getting Started'
        questions={gettingStartedQuestions}
      />
    </div>
  );
};

export default Support;
