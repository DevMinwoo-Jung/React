import React, { memo } from 'react';
import RecordEditForm from '../record_edit_form/record_edit_form';
import RecordAddForm from '../record_add_form/record_add_form';
import styles from './editor.module.css';

const Editor = memo(({onAsc, onDesc, FileInput, records, onUpdate, addRecord, updateRecord, deleteRecord}) => {

  const goAsc = () => {
    onAsc();
  }

  const goDesc = () =>{
    onDesc();
  }

  return (
    <div className={styles.informations}>
        <span className={styles.textBox}>날짜
          <button onClick={goAsc}>오름차순</button>
          <button onClick={goDesc}>내림차순</button>
        </span>
        <span className={styles.textBox}>지출비용</span>
        <span className={styles.textBox}>분류</span>
        <span className={styles.textBox}>메모</span>
        <span className={styles.textBox}>사진첨부</span>
        <span className={styles.textBox}>추가/삭제</span>
      <RecordAddForm FileInput={FileInput} onAdd={addRecord}/>  
      {
        Object.keys(records).map(key => (
          <RecordEditForm FileInput={FileInput} onUpdate={onUpdate} key={key} record={records[key]} updateRecord={updateRecord} deleteRecord={deleteRecord}/>
        ))
      }
    </div>
  );
});

export default Editor;