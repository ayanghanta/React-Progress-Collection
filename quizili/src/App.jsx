import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Loader from "./components/Loader";
import Question from "./components/Question";
import ScoreBord from "./components/ScoreBord";
import StartQuiz from "./components/StartQuiz";
import Herosection from "./components/HeroSection";
import SelectQuantity from "./components/SelectQuantity";
import SelecetDificulity from "./components/SelecetDificulity";

import { useQuiz } from "./context/QuizContext";

// choose[topic,quantity,dificulity], loading/quation, quiz[ready,active.finish]

function App() {
  const { stage } = useQuiz();
  return (
    <div className="container">
      <Header />

      <MainSection>
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
      </MainSection>

      <Footer />
    </div>
  );
}

export default App;
