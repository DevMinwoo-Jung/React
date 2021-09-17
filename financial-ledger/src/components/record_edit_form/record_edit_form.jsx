import React, { memo, useRef } from 'react';
import Button from '../../button/button';
import styles from './record_edit_form.module.css';

const RecordEditForm = memo(({FileInput, record, updateRecord, deleteRecord}) => {

  const dateRef = useRef(); 
  const costRef = useRef(); 
  const cashRef = useRef();
  const cardsRef = useRef();
  const categoryRef = useRef();
  const etcRef = useRef();

  const {date, cost, cash, cards, category, etc, fileName} = record;

  const onFileChange = file => {
    updateRecord({
          ...record,
          fileName: file.name,
          fileURL: file.url,
    });
};

  const onChange = (event) => {
    if(event.currentTarget == null) {
          return;
    }
    event.preventDefault();
    updateRecord({
          ...record,
          [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(record);
};

  const onSubmit = (event) => {
    event.preventDefault();
    deleteRecord(record);
};


  return (
    <form className={styles.form} >
      <input className={styles.inputs} ref={dateRef} type="text" name="date" value={date} onChange={onChange}/>
      <input className={styles.inputs} ref={costRef} type="number" name="cost" value={cost} onChange={onChange}/>
      <input className={styles.inputs} ref={cashRef} type="text" name="cash" value={cash} onChange={onChange}/>
      <input className={styles.inputs} ref={cardsRef} type="text" name="cards" value={cards} onChange={onChange}/>
      <input className={styles.inputs} ref={categoryRef} type="text" name="category" value={category} onChange={onChange}/>
      <input className={styles.inputs} ref={etcRef} type="text" name="etc" value={etc} onChange={onChange}/>
    <FileInput name={fileName} onFileChange={onFileChange}/>
    <Button name='Delete' onClick={onSubmit} />
    </form>
  );
});

export default RecordEditForm;