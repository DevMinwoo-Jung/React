import React, {memo} from 'react';

const AddForm = memo(() => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  
  const addHabitsByClick = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset():
  };
  
  const addHabitsByDown = event => {
    if((event.key === "Enter")){
      this.addHabitsByClick();
      document.querySelector('.input__habit').value = '';
    } else {
      return;
    }
  }


  return (
    <form ref={formRef} className="habit__box">
      <input ref={inputRef} type="text" className="input__habit" onKeyDown={addHabitsByDown} placeholder="습관을 적어보세요!"/>
      <button className="add__habit" onClick={addHabitsByClick}>Add Habit</button>
    </form>
  );
});

export default AddForm;