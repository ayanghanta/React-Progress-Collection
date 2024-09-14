import Button from "./Button";
import styles from "./Topics.module.css";

const quizTopics = ["HTML", "JavaScript", "React", "Python"];

function Topics({ dispatch }) {
  return (
    <div className="quizCustomizeContainer">
      <h2>Choose Your Topic</h2>
      <ul>
        {quizTopics.map((topic) => (
          <TopicCard topic={topic} key={topic} />
        ))}
      </ul>
      <Button type="next" onClick={() => dispatch({ type: "topicSelected" })}>
        next &rarr;
      </Button>
    </div>
  );
}

function TopicCard({ topic }) {
  return <li>{topic}</li>;
}

export default Topics;
