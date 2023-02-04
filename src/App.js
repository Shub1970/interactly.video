import "./App.css";
import MyVideo from "./component/MyVideo";
import { useEffect, useState } from "react";
import wel from "./video/welcome.mp4";
import thak from "./video/thankyou.mp4";
import web from "./video/my-web.mp4";
function App() {
  const [vid, setVid] = useState(null);
  // const [display, setDisplay] = useState(false);
  useEffect(() => {
    setVid(wel);
  }, []);
  return (
    <div className="App">
      <div className="left">
        <MyVideo videoSource={vid} />
      </div>
      <div className="right">
        <div className="btn">
          <button className="Opetion-a" onClick={() => setVid(wel)}>
            <span className="Letter">A</span>
            <span className="Content">Welcome</span>
          </button>
          <button
            className="Opetion-b"
            onClick={() => {
              setVid(web);
              // setDisplay(true);
            }}
          >
            <span className="Letter">B</span>
            <span className="Content">visit my website</span>
          </button>
          <button className="Opetion-c" onClick={() => setVid(thak)}>
            <span className="Letter">C</span>
            <span className="Content">Thank You</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
