import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainConatiner">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
