import React from 'react';

const VideoImg = (props) => {

  return (
    <div className ="imgs">
      <img className ="thumbnails" src={props.data.snippet.thumbnails.high.url} alt="" />
    </div>
  );
};

export default VideoImg;