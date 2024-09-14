import { useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Loader from "./components/Loader";
import Topics from "./components/Topics";
import StartQuiz from "./components/StartQuiz";
import Herosection from "./components/HeroSection";
import SelectQuantity from "./components/SelectQuantity";
import SelecetDificulity from "./components/SelecetDificulity";
import Question from "./components/Question";

const POINT_PER_QUESTION = 10;

// choose[topic,quantity,dificulity], loading/quation, quiz[ready,active.finish]
const initialState = {
  allQuestions: [],
  poinstPerQuestion: POINT_PER_QUESTION,
  answer: null,
  index: 0,
  totalPoint: 0,
  quizTopic: "",
  numberofQuestions: 0,
  difficulityLabel: "",
  stage: "choose/topic",
  // stage: "quiz/active",
};

function reducer(state, action) {
  switch (action.type) {
    case "giveAnswer":
      const currentQuestion = state.allQuestions.at(state.index);

      const isCorrent = currentQuestion.correctOption === action.payload;

      return {
        ...state,
        answer: action.payload,
        totalPoint: isCorrent
          ? state.totalPoint + currentQuestion.points
          : state.totalPoint,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "topicSelected":
      return { ...state, stage: "choose/quantity", quizTopic: action.payload };

    case "quantitySelected":
      return {
        ...state,
        stage: "choose/difficulity",
        numberofQuestions: action.payload,
      };

    case "difficulitySelected":
      return {
        ...state,
        stage: "loading/questions",
        difficulityLabel: action.payload,
      };

    case "questionLoaded":
      return { ...state, stage: "quiz/ready", allQuestions: action.payload };

    case "startQuiz":
      return { ...state, stage: "quiz/active" };

    default:
      throw new Error("Unkonwn Action type");
  }
}

function App() {
  const [
    {
      allQuestions,
      quizTopic,
      numberofQuestions,
      difficulityLabel,
      poinstPerQuestion,
      answer,
      index,
      totalPoint,
      stage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Header />
      <Main>
        {stage == "choose/topic" && (
          <>
            <Herosection />
            <Topics dispatch={dispatch} />
          </>
        )}
        {stage == "choose/quantity" && (
          <>
            <Herosection />
            <SelectQuantity dispatch={dispatch} />
          </>
        )}
        {stage == "choose/difficulity" && (
          <>
            <Herosection />
            <SelecetDificulity dispatch={dispatch} />
          </>
        )}
        {stage == "loading/questions" && (
          <Loader
            topic={quizTopic}
            numQuestions={numberofQuestions}
            diffLabel={difficulityLabel}
            poinstPerQuestion={poinstPerQuestion}
            dispatch={dispatch}
          />
        )}
        {stage == "quiz/ready" && (
          <StartQuiz
            numQuizQuestion={allQuestions.length}
            topic={quizTopic}
            dispatch={dispatch}
          />
        )}
        {stage === "quiz/active" && (
          <Question
            question={allQuestions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
