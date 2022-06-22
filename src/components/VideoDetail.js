import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div>
        <iframe
          src={videoSrc}
          title="video Player"
          className="w-100"
          style={{ height: "800px" ,width: "1200px" }}
        ></iframe>
      </div>
      <div className="border p-10">
        <h1>{video.snippet.title}</h1>
        <h2>{video.snippet.channelTitle}</h2>
        <h3>{video.snippet.description}</h3>
        
      </div>
    </>
  );
};

export default VideoDetail;   