import React, { useRef, useState } from 'react';

const LedgerEditForm = () => {

  // const [records , setRecords] = useState();

  let dateRef = useRef();

  const [records, setRecords] = useState([
    {date: "2021/09/21", cost: 100000, cash: 'No', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/21", cost: 100000, cash: 'Yes', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/10/21", cost: 100000, cash: 'No', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/11/21", cost: 1200000, cash: 'Yes', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/12/21", cost: 1400000, cash: 'No', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/30", cost: 1500000, cash: 'Yes', cards: 'Yes', category: '', etc: ''},
    {date: "2021/09/11", cost: 1600000, cash: 'No', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/21", cost: 1700000, cash: 'Yes', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/01", cost: 1800000, cash: 'No', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/01", cost: 1900000, cash: 'Yes', cards: 'Yes', category: 'food', etc: ''},
    {date: "2021/09/21", cost: 3090000, cash: 'asd', cards: 'Yes', category: '', etc: ''},
  ]);

  const onSubmit = (event) => {
    event.preventDefault();
    dateRef = dateRef.current.value;
    onChange(dateRef);

  }

  const onChange = (dateRef) => {
    let newRecords = [...records];
    newRecords = newRecords.filter(newRecord => newRecord.date >= dateRef);
    console.log(newRecords);
    setRecords( newRecords);
  }
  

  return (
    <div>
    <h1>하이 에이치 아이</h1>
    <form >
      <input ref={dateRef} type="text" />
    </form>
    <button onClick={onSubmit}>아 눌러봐요</button>
    <div onChange={onChange}>
      {
        records
        .filter(record => record.date >= "2021/09/15")
        .map(record =>
          (
            <div key={Math.random()}>
              <p>Date: {record.date}</p>
              <p>Cost: {record.cost}</p>
              <p>Cash: {record.cash}</p>
              <p>Cards: {record.cards}</p>
              <p>Category: {record.category}</p>
              <p>Etc: {record.etc}</p>
            </div>
          )
        )
      }
    </div>
    </div>
  );
};

export default LedgerEditForm;