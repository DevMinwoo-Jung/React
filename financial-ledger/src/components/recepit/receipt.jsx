import React from 'react';
import styles from './receipt.module.css'


const Receipt = ({record}) => {
  const {fileURL, etc, date} = record;
  const url = fileURL;
  console.log(record);
  return (
    <>
    {
      url !== '' &&
        <div className={styles.receipt}>
        <p>{date}</p>  
        <img className={styles.receipt__img} src={url} alt="" />
        <p>{etc}</p>
      </div>
    }
    </>
  );
};

export default Receipt;