import React from 'react';

const VideoPara = () => {
  return (
    <div className="contens">
      <span className="content-para">{this.props.data.snippet.title.length > 15 ? this.propsdata.snippet.title.slice(0, 15)+"..." : this.props.data.snippet.title}</span>
    </div>
  );
};

export default VideoPara;