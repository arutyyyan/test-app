import React from "react";
import styles from "../Question.module.scss";

const MultipleChoice = ({ question, answer, onAnswerChange, submitted }) => {
  return (
    <div className={styles.options}>
      {question.options.map((option) => (
        <label
          key={option}
          className={`${styles.option} ${
            submitted && option === question.correctAnswer ? styles.correct : ""
          } ${
            submitted && answer === option && option !== question.correctAnswer
              ? styles.incorrect
              : ""
          }`}
        >
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={answer === option}
            onChange={() => onAnswerChange(question.id, option)}
            disabled={submitted}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default MultipleChoice;
