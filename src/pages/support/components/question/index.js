import Styles from "./question.module.scss";
import arrow from "../../../../images/arrow.svg";
import { useState } from "react";

const Question = ({ question, answer }) => {
  const [isQuestionOpened, setIsQuestionOpened] = useState(false);
  const handleQuestionClick = (e) => {
    setIsQuestionOpened((state) => !state);
  };
  return (
    <div className={Styles.question}>
      <div className={Styles.question__question} onClick={handleQuestionClick}>
        <span
          className={`${isQuestionOpened ? Styles.question__arrowDown : ""} ${
            Styles.question__arrow
          }`}
        >
          <img src={arrow} alt='arrow' />
        </span>
        <h5 className={Styles.question__heading}>{question}</h5>
      </div>
      <div
        className={`${isQuestionOpened ? Styles.question__answerActive : ""} ${
          Styles.question__answer
        }`}
      >
        {answer}
      </div>
    </div>
  );
};
export default Question;
