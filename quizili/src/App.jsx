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

// choose[topic,quantity,dificulity], loading/quation, quiz[ready,active.finish]
const initialState = {
  stage: "choose/topic",
};

function reducer(state, action) {
  switch (action.type) {
    case "topicSelected":
      return { ...state, stage: "choose/quantity" };
    case "quantitySelected":
      return { ...state, stage: "choose/difficulity" };
    case "difficulitySelected":
      return { ...state, stage: "loading/questions" };
    case "questionLoaded":
      return { ...state, stage: "quiz/ready" };
    default:
      throw new Error("Unkonwn Action type");
  }
}

function App() {
  const [{ stage }, dispatch] = useReducer(reducer, initialState);
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
        {stage == "loading/questions" && <Loader />}
        {stage == "quiz/ready" && <StartQuiz />}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
