import React from "react";
import styles from "./Home.module.scss";
import QuizCard from "../../components/QuizCard/QuizCard";

const QUIZZES = [
  {
    id: 1,
    title: "Science Quiz: Basic Physics",
    description:
      "Test your knowledge of fundamental physics concepts in this engaging quiz.",
    difficulty: "Easy",
    duration: 15,
  },
  {
    id: 2,
    title: "World History Trivia",
    description:
      "Journey through time with this comprehensive world history quiz.",
    difficulty: "Medium",
    duration: 15,
  },
  {
    id: 3,
    title: "Advanced Mathematics",
    description:
      "Challenge yourself with complex mathematical problems and concepts.",
    difficulty: "Hard",
    duration: 15,
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {QUIZZES.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
