import logo from "./logo.svg";
import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [flag, setFlag] = useState(false);

  const getFlag = (flagValue) => {
    setFlag(flagValue);
  };

  return (
    <div className="App">
      <Header></Header>
      {flag ? <Main></Main> : <Login enableValue={getFlag}></Login>}
      <Footer></Footer>
    </div>
  );
}

export default App;
