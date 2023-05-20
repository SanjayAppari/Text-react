import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeReverse, setModeReverse] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeReverse("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabeld", "success");
    } else {
      setMode("dark");
      setModeReverse("light");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabeld", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} modeReverse={modeReverse} handleMode={handleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            <Textform mode={mode} modeReverse={modeReverse} showAlert={showAlert} heading="Converting To UpperCase" />
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform
              mode={mode}
              modeReverse={modeReverse}
              showAlert={showAlert}
              heading="Converting To UpperCase"
            />}/>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
