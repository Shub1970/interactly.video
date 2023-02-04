import React from "react";
import "./App.css";
import MyVideo from "./component/MyVideo";
import { useEffect, useState } from "react";
import wel from "./video/welcome.mp4";
import thak from "./video/thankyou.mp4";
import web from "./video/my-web.mp4";

function App() {
  const [vid, setVid] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSubmit = (event, video) => {
    event.preventDefault();
    setVid(video);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    setVid(wel);
  }, []);

  return (
    <div className="App">
      <div className="left">
        <MyVideo videoSource={vid} />
      </div>
      <div className="right">
        <form>
          <button
            className={`option-button ${selectedOption === "A" && "selected"}`}
            onClick={(event) => {
              handleSubmit(event, wel);
              handleOptionClick("A");
            }}
            type="submit"
          >
            <span className="Letter">A</span>
            <span className="Content">Welcome</span>
          </button>
          <button
            className={`option-button ${selectedOption === "B" && "selected"}`}
            onClick={(event) => {
              handleSubmit(event, web);
              handleOptionClick("B");
            }}
            type="submit"
          >
            <span className="Letter">B</span>
            <span className="Content">Visit my website</span>
          </button>
          <button
            className={`option-button ${selectedOption === "C" && "selected"}`}
            onClick={(event) => {
              handleSubmit(event, thak);
              handleOptionClick("C");
            }}
            type="submit"
          >
            <span className="Letter">C</span>
            <span className="Content">Thank you</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
