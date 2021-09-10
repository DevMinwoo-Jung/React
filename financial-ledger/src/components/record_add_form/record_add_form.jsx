import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';
import Button from '../../button/button';

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
    console.log(record);
  }

  const onFileChange = file => {
    setFile({
          fileName: file.name,
          fileURL: file.url,
    });
};


  return (
    <>
      <form ref={formRef}>
        <input ref={dateRef} type="text" name="date"/>
        <input ref={costRef} type="number" name="cost" />
        <input ref={cashRef} type="text" name="cash"/>
        <input ref={cardsRef} type="text" name="cards"/>
        <input ref={categoryRef} type="text" name="category" />
        <input ref={etcRef} type="text" name="etc"/>
      <FileInput name={file.fileName} onFileChange={onFileChange}/>
      <Button name="Add Record" onClick={onSubmit}/>
      </form>
    </>
  );
};

export default RecordAddForm;