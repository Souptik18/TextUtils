import React, { useState } from "react";

function Container({ darkMode, capitalize, showAlert, setAlert }) {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    showAlert("Text converted to uppercase ", "success");
    capitalize(text);
    setTimeout(() => {
      setAlert();
    }, 2000);
  };

  const handleLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    showAlert("Text converted to lowercase ", "success");
    setTimeout(() => {
      setAlert();
    }, 2000);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert("Text copied! ", "success");
      setTimeout(() => {
        setAlert();
      }, 2000);
    });
  };

  const handleClearText = () => {
    setText("");
    showAlert("Text cleared ", "success");
    setTimeout(() => {
      setAlert();
    }, 2000);
  };
  const wordCounter = () => {
    if (text.trim() === "") {
      return 0;
    } else {
      let letters = text.trim().split(/\s+/).length;
      return letters;
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: darkMode ? "#404040" : "white",
          color: darkMode ? "white" : "black",
        }}
      >
        <h2 className="mb-4">Enter your text in the textarea</h2>
        <textarea
          style={{
            width: "100%",
            backgroundColor: darkMode ? "#404040" : "white",
            color: darkMode ? "white" : "black",
          }}
          name=""
          id=""
          cols="100"
          placeholder="Enter the text you want.....!"
          value={text}
          rows="10"
          onChange={handleText}
        ></textarea>
        <br />
        <button className="btn btn-primary m-2" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopyText}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary m-2" onClick={handleClearText}>
          Clear Text
        </button>

        <span className="btn btn-success m-2">Word/s {wordCounter()}</span>
        <span className="btn btn-success m-2">Characters {text.length}</span>
        <span className="btn btn-success">
          Time to Read
          {" " + wordCounter() / 200 + " "}
          Minutes
        </span>
      </div>
    </>
  );
}

export default Container;
