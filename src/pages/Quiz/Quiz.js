import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Quiz.module.scss";
import Question from "../../components/Question/Question";

const QUIZ = {
  title: "Science Quiz: Basic Physics",
  duration: 15,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      id: 3,
      type: "true-false",
      question: "Is water a renewable resource?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: 4,
      type: "true-false",
      question: "Does sound travel faster in water than in air?",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      id: 5,
      type: "text",
      question: "Explain how photosynthesis works in your own words.",
      correctAnswer:
        "Photosynthesis is the process where plants convert sunlight, water, and carbon dioxide into glucose and oxygen.",
    },
  ],
};

const Quiz = () => {
  const { id } = useParams();
  const [quiz] = useState(QUIZ);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0 || submitted) {
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const calculateScore = (userAnswers) => {
    let correct = 0;
    quiz.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correct += 1;
      }
    });
    return correct;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setSubmitted(true);
  };

  return (
    <div className={styles.quizContainer}>
      <header className={styles.header}>
        <button
          onClick={() => window.history.back()}
          className={styles.backButton}
        >
          ← Back
        </button>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🧠</span>
          <span>Quiz #{id}</span>
        </div>
        <div className={styles.timer}>
          {submitted ? (
            <>
              <span>
                Score: {score}/{quiz.questions.length}
              </span>
              <span>
                ({((score / quiz.questions.length) * 100).toFixed(2)}%)
              </span>
            </>
          ) : (
            <>
              <span className={styles.timerIcon}>⏱️</span>
              <span>{formatTime(timeLeft)}</span>
            </>
          )}
        </div>
      </header>

      <form onSubmit={handleSubmit} className={styles.quizForm}>
        {quiz.questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            index={index}
            answer={answers[question.id]}
            onAnswerChange={handleAnswerChange}
            submitted={submitted}
          />
        ))}

        {!submitted && (
          <button type="submit" className={styles.submitButton}>
            Submit Quiz
          </button>
        )}
      </form>
    </div>
  );
};

export default Quiz;
