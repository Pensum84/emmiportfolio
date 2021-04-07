import React from "react";
import PropTypes from "prop-types";

const VideoFrame2 = ({ hjnEIkMQR7I }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/hjnEIkMQR7I"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

VideoFrame2.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoFrame2;
