import { useState } from "react";
import Button from "./Button";
import { useQuiz } from "../context/QuizContext";
// import styles from "./Topics.module.css";

const quizTopics = [
  "HTML",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "Rust",
  "Swift",
  "Go",
];

function Topics() {
  const { dispatch } = useQuiz();

  const [choosenTopic, setChoosenTopic] = useState("");
  const [isChooseOther, setChooseOther] = useState(false);

  function handleOptionSelect(topic) {
    setChooseOther(false);
    setChoosenTopic(topic);
  }

  function handleOtherSelect() {
    setChooseOther(true);
    setChoosenTopic("");
  }

  return (
    <div className="quizCustomizeContainer">
      <h2>Choose Your Topic</h2>
      <ul>
        {quizTopics.map((topic) => (
          <TopicCard
            topic={topic}
            key={topic}
            onChooseTopic={handleOptionSelect}
            choosenTopic={choosenTopic}
          />
        ))}
      </ul>

      <div className="otherSelectContainer">
        <Button
          type={isChooseOther ? "chooseSelect" : "choose"}
          onClick={handleOtherSelect}
        >
          Other Topic
        </Button>
        {isChooseOther && (
          <input
            type="text"
            value={choosenTopic}
            onChange={(e) => setChoosenTopic(e.target.value)}
          />
        )}
      </div>

      {choosenTopic && (
        <Button
          type="next"
          onClick={() =>
            dispatch({ type: "topicSelected", payload: choosenTopic.trim() })
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
