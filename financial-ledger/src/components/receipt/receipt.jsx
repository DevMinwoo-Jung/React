import React from 'react';

const Receipt = ({records}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const {fileURL, etc} = records;
  const url = fileURL;

  return (
    <>
      <div>
        <img alt="" src={url} />
        <p>{etc}</p>
        <p>sibal</p>
      </div>
    </>
  );
};

export default Receipt;