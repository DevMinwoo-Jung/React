import React from 'react';
import { useRef } from 'react/cjs/react.development';
import Button from '../../button/button';

const RecordAddForm = ({onAdd}) => {
  const formRef = useRef();
  const dateRef = useRef();
  const costRef = useRef();
  const cashRef = useRef();
  const cardsRef = useRef();
  const categoryRef = useRef();
  const etcRef = useRef();

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
    formRef.current.reset();
    onAdd(record);
    console.log(record);
  }


  return (
    <>
      <form ref={formRef}>
        <input ref={dateRef} type="text" name="date"/>
        <input ref={costRef} type="number" name="cost" />
        <input ref={cashRef} type="text" name="cash"/>
        <input ref={cardsRef} type="text" name="cards"/>
        <input ref={categoryRef} type="text" name="category" />
        <input ref={etcRef} type="text" name="etc"/>
      </form>
      <Button onClick={onSubmit}/>
    </>
  );
};

export default RecordAddForm;