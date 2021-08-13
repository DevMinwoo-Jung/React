import React from 'react';

const VideoPara = () => {
  return (
    <div className="contens">
      <span className="content-para">{data.snippet.title.length > 15 ? data.snippet.title.slice(0, 15)+"..." : this.props.data.snippet.title}</span>
    </div>
  );
};

export default VideoPara;