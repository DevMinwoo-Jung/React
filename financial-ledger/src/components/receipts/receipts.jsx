import React, { useState } from 'react';
import Receipt from '../recepit/receipt';
import Slider from "react-slick";
import styles from './receipts.module.css'
import Modal from '../modal/modal';
import uuid from 'react-uuid';

const Receipts = ({records}) => {

  const [img, setImg] = useState(null);
  const [show, setShow] = useState(false);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
  };
  const length =   Object.keys(records)
  .map(key => records[key])
  .filter(record => record['fileURL'] !== '')
  .map(record => record);
  
  const showModal = (event) => {
    setShow(true);
    const img = event.target.src;
    setImg(img);
  };

  const onRequestClose = () => {
    setShow(false);
  }

  

  return (
    <>
    <div className={styles.receipts}>
    {
      show === false ? null : <Modal img={img} onRequestClose={onRequestClose}/>
    }
    <Slider {...settings} slidesToShow={Math.min(length.length, 3)}>
      {
          Object.keys(records)
          .map(key => records[key])
          .filter(record => record['fileURL'] !== '')
          .map(record => (<Receipt key={uuid()} record={record} showModal={showModal}/>))
      }
    </Slider>
    </div>
      </>
  );
};

export default Receipts;