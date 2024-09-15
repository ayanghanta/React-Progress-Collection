import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { QuizProvider } from "./context/QuizContext";

// choose[topic,quantity,dificulity], loading/quation, quiz[ready,active.finish]

function App() {
  return (
    <div className="container">
      <Header />
      <QuizProvider>
        <Main></Main>
      </QuizProvider>

      <Footer />
    </div>
  );
}

export default App;
