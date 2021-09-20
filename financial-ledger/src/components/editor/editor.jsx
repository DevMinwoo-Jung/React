import React, { memo } from 'react';
import RecordEditForm from '../record_edit_form/record_edit_form';
import RecordAddForm from '../record_add_form/record_add_form';
import styles from './editor.module.css';

const Editor = memo(({FileInput, records, onUpdate, addRecord, updateRecord, deleteRecord}) => {

  return (
    <div className={styles.informations}>
        <span className={styles.textBox}>날짜</span>
        <span className={styles.textBox}>사용내역</span>
        <span className={styles.textBox}>현금</span>
        <span className={styles.textBox}>카드</span>
        <span className={styles.textBox}>분류</span>
        <span className={styles.textBox}>메모</span>
        <span className={styles.textBox}>사진첨부</span>
        <span className={styles.textBox}>추가/삭제</span>
      <div className={styles.addAndEdit}>
      <RecordAddForm FileInput={FileInput} onAdd={addRecord}/>  
      {
        Object.keys(records).map(key => (
          <RecordEditForm FileInput={FileInput} onUpdate={onUpdate} key={key} record={records[key]} updateRecord={updateRecord} deleteRecord={deleteRecord}/>
        ))
      }
      </div>
    </div>
  );
});

export default Editor;