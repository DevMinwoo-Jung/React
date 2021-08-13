import React from 'react';

const VideoPara = (props) => {
  return (
    <div className="contens">
      <span className="content-para">{props.data.snippet.title.length > 15 ? props.data.snippet.title.slice(0, 15)+"..." : props.data.snippet.title}</span>
    </div>
  );
};

export default VideoPara;