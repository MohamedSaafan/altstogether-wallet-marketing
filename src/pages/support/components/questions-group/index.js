import Question from "../question";
import Styles from "./question-group.module.scss";

const QuestionsGroup = ({ questions, heading }) => {
  return (
    <div className={`container ${Styles.questions}`}>
      <h3 className={Styles.questions__heading}>{heading}</h3>
      <div className={Styles.questions__questions}>
        {questions.map(({ question, id, answer }) => (
          <Question key={id} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionsGroup;
