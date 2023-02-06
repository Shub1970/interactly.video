import React from "react";
import MyVideo from "../MyVideo";
import BottomWrapper from "./BottomWrapper";
import videono from "../videosrc";

function Page1() {
  const buttonType = ["A", "B", "C"];
  return (
    <div className="App page page-A">
      <div className="left">
        <MyVideo videoSource={videono.video_2} />
      </div>
      <div className="right">
        <form>
          {buttonType.map((bt) => (
            <BottomWrapper key={bt} letter={bt} content={`demoButton ${bt}`} />
          ))}
        </form>
      </div>
    </div>
  );
}

export default Page1;
