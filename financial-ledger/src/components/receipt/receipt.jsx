import React from 'react';

const Receipt = ({records}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const {fileURL, etc} = records;
  const url = fileURL;

  return (
    <>
    { (fileURL !== null) && 
    (
      <div>
        <img src={url} alt="" />
        <p>{etc}</p>
      </div>
    )}
    </>
  );
};

export default Receipt;