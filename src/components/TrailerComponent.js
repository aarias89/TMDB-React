import React from "react";

const TrailerComponent = props => {
  const video = props.video;

  if (video.length === 0) {
    return <div></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="trailer-container">
      <div className="vid-box">
        <iframe title={video.snippet.title} src={url}></iframe>
      </div>
      <div className="trailer-details">
        <div id="movie-overview">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default TrailerComponent;
