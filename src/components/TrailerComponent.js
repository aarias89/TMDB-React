import React from "react";

const TrailerComponent = props => {
  //   return console.log(props);
  const video = props.video;
  //   debugger;
  //   if (!video) {
  if (video.length === 0) {
    // debugger;
    // console.log('YOU SHALL NOT PASS!');
    return <div> Loading ...</div>;
    // alert('not loaded');
  }
  //   debugger;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //   console.log('these are props: ' + props);
  //   console.log(props);
  //   debugger;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default TrailerComponent;
