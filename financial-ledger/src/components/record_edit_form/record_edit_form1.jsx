import React, { memo, useRef } from 'react';
import Button from '../../button/button';
import styles from './record_edit_form.module.css';

const RecordEditForm = memo(({FileInput, record, updateRecord, deleteRecord}) => {

  const formRef = useRef();
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
};

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
  };
  updateRecord({
    ...record,
    [event.currentTarget.name]: event.currentTarget.value,
});
  console.log([event.currentTarget.name], event.currentTarget.value);
}

  const onSubmit = (event) => {
    event.preventDefault();
    deleteRecord(record);
};


  return (
    <form className={styles.form} ref={formRef}>
      <input className={styles.inputs} ref={dateRef} type="date" name="date" value={date} />
      <input className={styles.inputs} ref={costRef} type="number" name="cost" value={cost} />
      <input className={styles.inputs} ref={cashRef} type="text" name="cash" value={cash} />
      <input className={styles.inputs} ref={cardsRef} type="text" name="cards" value={cards} />
      <select ref={categoryRef} className={styles.inputs} name="category"  value={category}  >
                        <option value=""></option>
                        <option value="foods">식비</option>
                        <option value="rent">주거</option>
                        <option value="daily">생필품</option>
                        <option value="health/culture">건강/문화</option>
                        <option value="education">교육</option>
                        <option value="transportation">교통</option>
                        <option value="Installment">할부</option>
                        <option value="etc">기타</option>
        </select>
      <input className={styles.inputs} ref={etcRef} type="text" name="etc" value={etc} />
    <FileInput name={fileName} onFileChange={onFileChange}/>
    <Button name='Delete' onClick={onSubmit} />
    </form>
  );
});

export default RecordEditForm;