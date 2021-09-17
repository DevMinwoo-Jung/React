import React, { useRef, useState } from 'react';

import Button from '../../button/button';
import styles from './record_add_form.module.css';

const RecordAddForm = ({FileInput, onAdd}) => {
  const formRef = useRef();
  const dateRef = useRef();
  const costRef = useRef();
  const cashRef = useRef();
  const cardsRef = useRef();
  const categoryRef = useRef();
  const etcRef = useRef();
  const [file, setFile] = useState({fileName: null, fileURL: null});

  const onSubmit = event => {
    event.preventDefault();
    const record = {
      id: Date.now(),
      date: dateRef.current.value || '',
      cost: costRef.current.value || '',
      cash: cashRef.current.value || '',
      cards: cardsRef.current.value || '',
      category: categoryRef.current.value || '',
      etc: etcRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null, });
    onAdd(record);
  }

  const onFileChange = file => {
    setFile({
          fileName: file.name,
          fileURL: file.url,
    });
};


  return (
      <form className={styles.form} ref={formRef}>
        <input className={styles.inputs} ref={dateRef} type="text" name="date"/>
        <input className={styles.inputs} ref={costRef} type="number" name="cost" />
        <input className={styles.inputs} ref={cashRef} type="text" name="cash"/>
        <input className={styles.inputs} ref={cardsRef} type="text" name="cards"/>
        <input className={styles.inputs} ref={categoryRef} type="text" name="category" />
        <input className={styles.inputs} ref={etcRef} type="text" name="etc"/>
      <FileInput name={file.fileName} onFileChange={onFileChange}/>
      <Button name="Add Record" onClick={onSubmit}/>
      </form>
  );
};

export default RecordAddForm;