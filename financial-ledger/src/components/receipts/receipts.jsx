import React from 'react';
import Receipt from '../recepit/receipt';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './receipts.module.css'

const Receipts = ({records}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,

  };
  const length =   Object.keys(records)
  .map(key => records[key])
  .filter(record => record['fileURL'] !== '')
  .map(record => record);

  return (
    <>
    <div className={styles.receipts}>
      
    <Slider {...settings} slidesToShow={Math.min(length.length, 3)}>
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