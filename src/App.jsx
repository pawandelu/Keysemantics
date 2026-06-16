import "./App.css";
import Accodian from "./components/home/Accodian";
import Card from "./components/home/Card";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Herosec from "./components/home/Herosec";
import Semantics from "./components/home/Semantics";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Semantics />
      <Accodian />
      <Herosec />
      <Footer />
    </>
  );
}

export default App;
