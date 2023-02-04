import { useEffect, useRef } from "react";

const MyVideo = ({ videoSource }) => {
  const videoref = useRef(null);
  useEffect(() => {
    videoref.current.play();
  }, [videoSource]);
  return (
    <video key={videoSource} ref={videoref} autoplay controls={false} loop>
      <source src={videoSource} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default MyVideo;
