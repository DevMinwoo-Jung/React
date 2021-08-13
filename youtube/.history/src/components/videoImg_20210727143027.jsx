import React from 'react';

const VideoImg = () => {

  return (
    <div className ="imgs">
      <img className ="thumbnails" src={this.props.data.snippet.thumbnails.high.url} alt="" />
    </div>
  );
};

export default VideoImg;