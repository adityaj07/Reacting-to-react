import React, { useState } from "react"; //useState is a hook to update the state

const TextForm = (props) => {
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text.", "danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      // props.showAlert("Converted to Upper case", "success");
    }
    // let newText = text.toUpperCase();
    // setText(newText); //updating the state from already set default state-variable, ie, text = "Enter text here" to the value in the update-function, ie, setText(newText), which converts the text to uppercase
    // props.showAlert("Converted to upper case", "success");
  };

  const handleLoClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text.", "danger");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      // props.showAlert("Converted to lower case", "success");
    }
  };

  const handleClearClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text.", "danger");
    } else {
      let newText = "";
      setText(newText);
      // props.showAlert("Text cleared", "success");
    }
  };
  const handleRemoveClick = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text.", "danger");
    } else {
      let newText = text.trim();
      setText(newText);
      // props.showAlert("Extra spaces trimmed", "success");
    }
  };
  const handleCopy = () => {
    if (text.length === 0) {
      props.showAlert("Please enter some text.", "danger");
    } else {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      // props.showAlert("Copied Text !!", "success");
    }
  };

  const handleOnChange = (event) => {
    //we get a event when the user tries to change the textarea, ie an onChange
    // console.log("On change");
    setText(event.target.value); //Thru event.target.value we set text to text+the value that user has input
  };
  const [text, setText] = useState(""); // so here text is state-variable and setText is an update-function with which we can update text and the value that is passed in the function useState("Enter text here") is the default value of the text state-variable which can be updated thru setText
  // console.log(useState("Enter text here"));
  // text = "new text";// Wrong way to change the state
  // setText ("new text");// Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "primary" ? "#021028" : "whitesmoke" }}
      >
        <div className="container">
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            style={{
              border:
                props.mode === "light"
                  ? "1px solid  #021028"
                  : "1 px solid black",
            }}
            onChange={handleOnChange}
            aria-describedby="emailHelp"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            {
              //handling event
            }
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 m-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-3 m-2"
            onClick={handleRemoveClick}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary my-3 m-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary my-3 m-2" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
        <div className="container my-2">
          <h3>Your text summary</h3>
          <p>
            {text === "" ? 0 + " " : text.split(" ").length + " "}
            {
              //split(" ") wil return an array of words splitted at space
            }
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "Enter some text to preview it here."}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
