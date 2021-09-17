import React from 'react';
import Receipt from '../recepit/receipt';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './receipts.module.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", background: "gray"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Receipts = ({records}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const ex =   Object.keys(records)
  .map(key => records[key])
  .filter(record => record['fileURL'] !== '')
  .map(record => record);
  console.log(ex.length);

  return (
    <>
    <div className={styles.receipts}>
      
    <Slider {...settings} slidesToShow={Math.min(ex.length, 3)}>
      {
          Object.keys(records)
          .map(key => records[key])
          .filter(record => record['fileURL'] !== '')
          .map(record => (<Receipt key={record['key']} record={record}/>))
      }
    </Slider>
    </div>
      </>
  );
};

export default Receipts;