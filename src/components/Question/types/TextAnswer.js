import React from "react";
import styles from "../Question.module.scss";

const TextAnswer = ({ question, answer, onAnswerChange, submitted }) => {
  return (
    <>
      <textarea
        placeholder="Type your answer here..."
        value={answer || ""}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
        className={styles.textAnswer}
        disabled={submitted}
      />
      {submitted && (
        <div className={styles.feedback}>
          <p>Possible answer: {question.correctAnswer}</p>
        </div>
      )}
    </>
  );
};

export default TextAnswer;
