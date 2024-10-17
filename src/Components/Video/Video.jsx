import React from "react";
import "./Video.css";
import vid_pic from "../../assets/vid-pic.png";

const Video = () => {
  return (
    <div className="video">
      {<img src={vid_pic} alt="video" loading="lazy" />}
    </div>
  );
};

export default Video;
