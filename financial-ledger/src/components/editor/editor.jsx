import React from 'react';
import RecordEditForm from '../record_edit_form/record_edit_form';
import RecordAddForm from '../record_add_form/record_add_form';

const Editor = ({records, onUpdate, addRecord, updateRecord, deleteRecord}) => {

  return (
    <>
    <div>
      {
        Object.keys(records).map(key => (
          <RecordEditForm onUpdate={onUpdate} key={key} records={records[key]} updateRecord={updateRecord} deleteRecord={deleteRecord}/>
        ))
      }
    <RecordAddForm onAdd={addRecord}/>
    </div>
    </>
  );
};

export default Editor;