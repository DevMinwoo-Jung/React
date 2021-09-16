import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Receipt = ({record}) => {
  const {fileURL, etc, date} = record;
  const url = fileURL;
  return (
    <>
    {
      url !== '' &&
      <div>
      <p>{date}</p>  
      <img src={url} alt="" />
      <p>{etc}</p>
      </div>
    }
    </>
  );
};

export default Receipt;