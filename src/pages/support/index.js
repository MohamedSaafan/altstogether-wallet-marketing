import Styles from "./support.module.scss";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import Header from "./components/header";
import HeadersBackgrounds from "../../components/header-backgrounds";
import QuestionsGroup from "./components/questions-group";
import Question from "./components/question";

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
    id: "1",
  },
  {
    question: "How do i get funcs (digital currency) in AltsTogether",
    id: "2",
  },
  {
    question: "How do I transfer my existing ETH and tokens to AltsTogether ?",
    id: "3",
  },
  {
    question: "How do I  send ETH and tokens ?",
    id: "4",
  },
];

const manageDigitalAssetsQuestions = [
  {
    question: "Which tokens does AltsTogether support?",
    answer: "",
    id: "0",
  },
  {
    question: "Does AltsTogether mobile support collectibles?",
    answer: "",
    id: "1",
  },
  {
    question: "Can I exchange my tokens",
    answer: "",
    id: "2",
  },
  {
    question: "Can I use a hardware wallet with AltsTogether?",
    answer: "",
    id: "3",
  },
];
const paymentsQuestions = [
  { question: "What is my public address ?", answer: "", id: "0" },
  { question: "How to deposit / receive / send ?", answer: "", id: "0" },
];
const swapsQuestions = [
  { question: "How do I swap tokens on AltsTogether?", answer: " ", id: "0" },
  { question: "Why did my swap fail", answer: " ", id: "1" },
  {
    question: "Why cannot I find a token on AltsTogether swaps ? ",
    answer: " ",
    id: "2",
  },
  { question: "What is slippage ?", answer: " ", id: "3" },
  {
    question: "Why do I need to approve a token before swapping ?",
    answer: " ",
    id: "4",
  },
  {
    question: "Does AltsTogether charge a fee on swaps ?",
    answer: " ",
    id: "5",
  },
];

const securityCollections = [
  {
    question: "How do I keep my wallet safe ?",
    answer: " ",
    id: "0",
  },
  {
    question: "How do I import my wallet in AltsTogether ?",
    answer: " ",
    id: "1",
  },
  {
    question: "How do I import my account in AltsTogether ?",
    answer: " ",
    id: "2",
  },
  {
    question: "Lost my password: How do I restore my wallet ?",
    answer: " ",
    id: "3",
  },
  {
    question: "Lost my seed phrase: Can I restore my wallet",
    answer: " ",
    id: "4",
  },
  { question: "Privacy of my accounts", answer: " ", id: "5" },
];
const troubleshooting = [
  { question: "Why did my AltsTogether app crash?", answer: " ", id: "0" },
  { question: "Why has not my balance updated ?", answer: " ", id: "1" },
  { question: "Why do not I see my tokens ?", answer: " ", id: "2" },
  {
    question: "Questions not answered - How do I contact support ?",
    answer: " ",
    id: "3",
  },
  { question: "I found bug, What do I do?", answer: " ", id: "4" },
  {
    question: "How do I give feedback to the developer team ?",
    answer: " ",
    id: "5",
  },
  { question: "Unable to connect with a site", answer: " ", id: "6" },
  { question: "Updating to latest version", answer: " ", id: "7" },
];

const additionalSupport = [
  {
    question: "Where can I go if I have more questions ?",
    answer: " ",
    id: "0",
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
      <QuestionsGroup
        heading='Manage my digital assets'
        questions={manageDigitalAssetsQuestions}
      />
      <QuestionsGroup heading='Payments' questions={paymentsQuestions} />
      <QuestionsGroup heading='Swaps' questions={swapsQuestions} />
      <QuestionsGroup heading='Security' questions={securityCollections} />
      <QuestionsGroup
        heading='Troubleshooting: Support FAQs'
        questions={troubleshooting}
      />
      <QuestionsGroup
        heading='Additional Support & Contentr'
        questions={additionalSupport}
      />
      <Footer />
    </div>
  );
};

export default Support;
