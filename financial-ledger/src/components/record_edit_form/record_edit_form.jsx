import React, { useRef } from 'react';
import Button from '../../button/button';

const RecordEditForm = ({records, updateRecord, deleteRecord}) => {

  const formRef = useRef();
  const dateRef = useRef(); 
  const costRef = useRef(); 
  const cashRef = useRef();
  const cardsRef = useRef();
  const categoryRef = useRef();
  const etcRef = useRef();

  const {date, cost, cash, cards, category, etc} = records;

  const onChange = (event) => {
    if(event.currentTarget == null) {
          return;
    }
    event.preventDefault();
    updateRecord({
          ...records,
          [event.currentTarget.name]: event.currentTarget.value,
    });
};

  const onSubmit = (event) => {
    event.preventDefault();
    deleteRecord(records);
};


  return (
  <div>
    <form ref={formRef}>
      <input ref={dateRef} type="text" name="date" value={date} onChange={onChange}/>
      <input ref={costRef} type="number" name="cost" value={cost} onChange={onChange}/>
      <input ref={cashRef} type="text" name="cash" value={cash} onChange={onChange}/>
      <input ref={cardsRef} type="text" name="cards" value={cards} onChange={onChange}/>
      <input ref={categoryRef} type="text" name="category" value={category} onChange={onChange}/>
      <input ref={etcRef} type="text" name="etc" value={etc} onChange={onChange}/>
    </form>
    <Button name='Delete' onClick={onSubmit}/>
  </div>
  );
};

export default RecordEditForm;