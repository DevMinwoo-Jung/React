import React from 'react';

const Receipt = ({record}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const {fileURL, etc} = record;
  const url = fileURL;
  return (
    <>
    {
      url !== '' &&
      <div>
      <img src={url} alt="" />
      <p>{etc}</p>
      </div>
    }
    </>
  );
};

export default Receipt;