import React from "react";
import PropTypes from "prop-types";

const VideoFrame = ({ k294X7BIanM }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/k294X7BIanM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

VideoFrame.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoFrame;
