import React, { useEffect } from "react";
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
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    const pages = document.querySelectorAll(".page");

    const handleClick = (e) => {
      const pageId = e.target.dataset.page;
      pages.forEach((page) => {
        if (page.classList.contains(`page-${pageId}`)) {
          page.style.top = "0%";
        } else {
          page.style.top = "100%";
        }
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <SubmitContext.Provider
      value={{ handleSubmit, handleOptionClick, selectedOption }}
    >
      <>
        <div className="App">
          <div className="left">
            <MyVideo videoSource={videono.video_1} />
          </div>
          <div className="right">
            <form>
              <BottomWrapper data_pag="A" letter={"A"} content={"welcome"} />
              <BottomWrapper
                data_pag="B"
                letter={"B"}
                content={"Visit my website"}
              />
              <BottomWrapper data_pag="C" letter={"C"} content={"Thank You"} />
            </form>
          </div>
          <Page1 />
          <Page2 />
          <Page3 />
        </div>
      </>
    </SubmitContext.Provider>
  );
}

export default App;
