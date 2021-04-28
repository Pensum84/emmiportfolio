import React from "react";
import PropTypes from "prop-types";

const VideoFrame3 = ({ playlist }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?list=PLNlcDJEimHiGTaTl3QxQG3Z0KYHrTP2Uj"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

VideoFrame3.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoFrame3;
