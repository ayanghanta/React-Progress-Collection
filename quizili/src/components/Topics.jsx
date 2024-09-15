import { useState } from "react";
import Button from "./Button";
import { useQuiz } from "../context/QuizContext";
// import styles from "./Topics.module.css";

const quizTopics = ["HTML", "JavaScript", "React", "Python"];

function Topics() {
  const { dispatch } = useQuiz();

  const [choosenTopic, setChoosenTopic] = useState("");

  return (
    <div className="quizCustomizeContainer">
      <h2>Choose Your Topic</h2>
      <ul>
        {quizTopics.map((topic) => (
          <TopicCard
            topic={topic}
            key={topic}
            onChooseTopic={setChoosenTopic}
            choosenTopic={choosenTopic}
          />
        ))}
      </ul>
      {choosenTopic && (
        <Button
          type="next"
          onClick={() =>
            dispatch({ type: "topicSelected", payload: choosenTopic })
          }
        >
          next &rarr;
        </Button>
      )}
    </div>
  );
}

function TopicCard({ topic, onChooseTopic, choosenTopic }) {
  return (
    <li
      onClick={() => onChooseTopic(topic)}
      className={topic === choosenTopic ? "selected" : ""}
    >
      {topic}
    </li>
  );
}

export default Topics;
