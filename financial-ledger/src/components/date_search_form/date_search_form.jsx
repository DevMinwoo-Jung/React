import React from 'react';
import styles from './date_search_form.module.css';


const DateSearchForm = ({onSubmit, startRef, endRef}) => {
  return (
    <div className={styles.search__div}>
      <form className={styles.search__form}>
        <input className={styles.datesPicker} ref={startRef} type="date"  />
        <input className={styles.datesPicker} ref={endRef} type="date" />
        <div className={styles.container}>
          <img className={styles.searchImg} onClick={onSubmit} src="/images/search.png" alt="" />
        </div>
      </form>
    </div>
  );
};

export default DateSearchForm;