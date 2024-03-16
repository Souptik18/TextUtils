import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleDark = () => {
    setDarkMode(!darkMode);
    if (darkMode == false) {
      document.body.style.backgroundColor = "#404040";
      showAlert("Dark Mode was Enabled", "success");
      setTimeout(() => {
        setAlert();
      }, 2000);
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode was Enabled", "success");
      setTimeout(() => {
        setAlert();
      }, 2000);
    }
  };

  const capitalize = (text) => {
    let sliced = text.slice(1);
    let firstCharLower = text.charAt(0).toLowerCase();
    let firstCharUpper = firstCharLower.toUpperCase();
    return firstCharUpper + sliced; // Capitalize first character
  };

  return (
    <>
      <Navbar toggleDark={toggleDark} darkMode={darkMode} />
      <Alert alert={alert} capitalize={capitalize} />
      <Container
        darkMode={darkMode}
        showAlert={showAlert}
        setAlert={setAlert}
        capitalize={capitalize}
        text={text}
        setText={setText}
      />
    </>
  );
}

export default App;
