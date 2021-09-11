import React, { memo } from 'react';
import RecordEditForm from '../record_edit_form/record_edit_form';
import RecordAddForm from '../record_add_form/record_add_form';

const Editor = memo(({FileInput, records, onUpdate, addRecord, updateRecord, deleteRecord}) => {

  return (
    <>
    <div>
      {
        Object.keys(records).map(key => (
          <RecordEditForm FileInput={FileInput} onUpdate={onUpdate} key={key} record={records[key]} updateRecord={updateRecord} deleteRecord={deleteRecord}/>
        ))
      }
    <RecordAddForm FileInput={FileInput} onAdd={addRecord}/>
    </div>
    </>
  );
});

export default Editor;