import React from 'react';

const DateSearchForm = ({onSubmit, startRef, endRef}) => {
  return (
    <div>
      <form>
        <input ref={startRef} type="date"  />
        <input ref={endRef} type="date" />
      </form>
      <button onClick={onSubmit}>아 눌러봐요</button>
    </div>
  );
};

export default DateSearchForm;