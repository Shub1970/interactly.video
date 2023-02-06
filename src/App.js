import React, { useEffect, useRef } from "react";
import "./App.css";
import MyVideo from "./component/MyVideo";
import BottomWrapper from "./component/page/BottomWrapper";
import { useState } from "react";
import videono from "./component/videosrc";
import Page1 from "./component/page/Page1";
import Page2 from "./component/page/Page2";
import Page3 from "./component/page/Page3";
export const SubmitContext = React.createContext();
function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [choosen, setChoosen] = useState("");
  const containerRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedOption(event.currentTarget.value);
    setChoosen(event.currentTarget.value);
  };
  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [choosen]);

  return (
    <SubmitContext.Provider value={{ handleSubmit, selectedOption }}>
      <>
        <div className="App ">
          <div className="left">
            <MyVideo videoSource={videono.video_1} />
          </div>
          <div className="right">
            <form>
              <BottomWrapper letter={"A"} content={"welcome"} />
              <BottomWrapper letter={"B"} content={"Visit my website"} />
              <BottomWrapper letter={"C"} content={"Thank You"} />
            </form>
          </div>
          <div ref={containerRef}>
            {choosen === "A" && <Page1 />}
            {choosen === "B" && <Page2 />}
            {choosen === "C" && <Page3 />}
          </div>
        </div>
      </>
    </SubmitContext.Provider>
  );
}

export default App;
