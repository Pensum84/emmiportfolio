import React from "react";
import VideoFrame from "../components/VideoFrame";
import VideoFrame2 from "../components/VideoFrame2";
import VideoFrame3 from "../components/VideoFrame3";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <VideoFrame embedId="k294X7BIanM" />
      <br />
      <VideoFrame2 embedId="hjnEIkMQR7I" />
      <br />
      <VideoFrame3 embedId="playlist" />
  
    </div>
  );
}