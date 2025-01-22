import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuizCard.module.scss";

const QuizCard = ({ title, description, difficulty, duration, id }) => {
  return (
    <Link to={`/quiz/${id}`} className={styles.card}>
      <div className={styles.header}>
        <span
          className={`${styles.difficulty} ${styles[difficulty.toLowerCase()]}`}
        >
          {difficulty}
        </span>
      </div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <div className={styles.stat}>
          <span>{duration} mins</span>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
