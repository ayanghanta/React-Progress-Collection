import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const POINT_PER_QUESTION = 10;
const MAX_QUIZ_QUESTION = 100;

function QuizProvider({ children }) {
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
        if (!action.payload || action.payload.length < 2) return { ...state };
        return {
          ...state,
          stage: "choose/quantity",
          quizTopic: action.payload,
        };

      case "quantitySelected":
        return {
          ...state,
          stage: "choose/difficulity",
          numberofQuestions:
            action.payload > MAX_QUIZ_QUESTION
              ? MAX_QUIZ_QUESTION
              : action.payload,
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
      case "finishQuiz":
        return { ...state, stage: "quiz/finish" };
      case "quizRestart":
        return {
          ...state,
          stage: "quiz/ready",
          answer: null,
          index: 0,
          totalPoint: 0,
        };
      case "home":
        return initialState;

      default:
        throw new Error("Unkonwn Action type");
    }
  }

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
    <QuizContext.Provider
      value={{
        allQuestions,
        quizTopic,
        numberofQuestions,
        difficulityLabel,
        poinstPerQuestion,
        answer,
        index,
        totalPoint,
        stage,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("You use useQuiz context outside QuizProvider");

  return context;
}

export { QuizProvider, useQuiz };
