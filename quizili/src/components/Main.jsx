import { useQuiz } from "../context/QuizContext";

import Topics from "./Topics";
import Loader from "./Loader";
import Question from "./Question";
import ScoreBord from "./ScoreBord";
import StartQuiz from "./StartQuiz";
import Herosection from "./HeroSection";
import SelectQuantity from "./SelectQuantity";
import SelecetDificulity from "./SelecetDificulity";

function Main() {
  const { stage } = useQuiz();
  return (
    <div className="mainConatiner">
      {stage == "choose/topic" && (
        <>
          <Herosection />
          <Topics />
        </>
      )}
      {stage == "choose/quantity" && (
        <>
          <Herosection />
          <SelectQuantity />
        </>
      )}
      {stage == "choose/difficulity" && (
        <>
          <Herosection />
          <SelecetDificulity />
        </>
      )}
      {stage == "loading/questions" && <Loader />}

      {stage == "quiz/ready" && <StartQuiz />}

      {stage === "quiz/active" && <Question />}

      {stage === "quiz/finish" && <ScoreBord />}
    </div>
  );
}

export default Main;
