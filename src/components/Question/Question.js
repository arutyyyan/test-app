import React from "react";
import styles from "./Question.module.scss";
import MultipleChoice from "./types/MultipleChoice";
import TextAnswer from "./types/TextAnswer";

const Question = ({ question, index, onAnswerChange, answer, submitted }) => {
  const renderQuestionType = () => {
    switch (question.type) {
      case "multiple-choice":
      case "true-false":
        return (
          <MultipleChoice
            question={question}
            answer={answer}
            onAnswerChange={onAnswerChange}
            submitted={submitted}
          />
        );
      case "text":
        return (
          <TextAnswer
            question={question}
            answer={answer}
            onAnswerChange={onAnswerChange}
            submitted={submitted}
          />
        );
      default:
        return <p>Unsupported question type</p>;
    }
  };

  return (
    <div className={styles.questionCard}>
      <h3>
        {index + 1}. {question.question}
      </h3>
      {renderQuestionType()}
    </div>
  );
};

export default Question;
