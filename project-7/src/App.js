import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [allowToggle, setAllowToggle] = useState(false);
  const [showPara, setShowPara] = useState(false);

  console.log("app running!");

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow toggle!</Button>
      <Button onClick={toggleParaHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
