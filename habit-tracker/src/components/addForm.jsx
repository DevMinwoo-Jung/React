import React, {memo} from 'react';

const AddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  
  const addHabitsByClick = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  
  return (
    <form ref={formRef} className="habit__box" onClick={addHabitsByClick}>
      <input ref={inputRef} type="text" className="input__habit" placeholder="습관을 적어보세요!"/>
      <button className="add__habit" >Add Habit</button>
    </form>
  );
});

export default AddForm;