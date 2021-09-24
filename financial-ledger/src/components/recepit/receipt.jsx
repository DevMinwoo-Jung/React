import React, { memo } from 'react';
import styles from './receipt.module.css';



const Receipt = memo(({record, showModal}) => {
  const {fileURL, etc, date} = record;
  const url = fileURL;

  const goShow = (event) => {
    showModal(event);
  }

  return (
    <>
    {
      url !== '' &&
        <div className={styles.receipt}>
        <p>{date}</p>  
        <img className={styles.receipt__img} src={url} alt="" onClick={goShow} />
        <p>{etc}</p>
      </div>
    }
    </>
  );
});

export default Receipt;