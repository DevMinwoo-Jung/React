import React from 'react';
import styles from './date_search_form.module.css';


const DateSearchForm = ({onSubmit, startRef, endRef}) => {
  return (
    <div className={styles.search__div}>
      <form className={styles.search__form}>
        <input className={styles.datesPicker} ref={startRef} type="date"  />
        <input className={styles.datesPicker} ref={endRef} type="date" />
        <button onClick={onSubmit}>클릭</button>
      </form>
    </div>
  );
};

export default DateSearchForm;