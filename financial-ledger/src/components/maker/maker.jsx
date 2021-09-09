import React, { useEffect, useRef, useState } from 'react';
import DateSearchForm from '../date_search_form/date_search_form';
import Editor from '../editor/editor';
import Receipt from '../receipts/receipts';
import Summary from '../summary/summary';

const Maker = () => {

  let startRef = useRef();
  let endRef = useRef();
  
  let [maxCost, setMaxCost] = useState();
  let [sumCost, setSumCost] = useState();

  
  let [dates, setDates] = useState({start: '', end: ''});
  

  const [records, setRecords] = useState([
    {id: Date.now(), date: "2021-09-20", cost: 100000, cash: 'No', cards: 'Yes', category: 'food', etc: '안나오는겨?', fileURL: '/images/default_logo.png'},
    {id: Date.now(), date: "2021-09-21", cost: 100000, cash: 'Yes', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-10-21", cost: 100000, cash: 'No', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-11-21", cost: 1200000, cash: 'Yes', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-12-21", cost: 1400000, cash: 'No', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-30", cost: 1500000, cash: 'Yes', cards: 'Yes', category: '', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-11", cost: 1600000, cash: 'No', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-21", cost: 1700000, cash: 'Yes', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-01", cost: 1800000, cash: 'No', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-01", cost: 1900000, cash: 'Yes', cards: 'Yes', category: 'food', etc: '',  fileURL: ''},
    {id: Date.now(), date: "2021-09-21", cost: 3090000, cash: 'asd', cards: 'Yes', category: '', etc: '',  fileURL: ''},
  ]);

  // console.log(typeof(records));

  const onSubmit = (event) => {
    event.preventDefault();
    startRef = startRef.current.value;
    endRef = endRef.current.value;
    onUpdate(startRef, endRef);
  }

  const modifyDates = (startRef, endRef) => {
    setDates({
      start: startRef.current.value,
      endRef: endRef.current.value
    })
    console.log(dates);
  }

  const createOrUpdateRecord = record => {

    setRecords(records => {
      const updated = {...records};
      console.log(updated);
      updated[record.id] = record;
      console.log(updated);
      return updated;
    });
  };

  const deleteRecord = record => {
    setRecords(records => {
      const updated = {...records};
      delete updated[record.id];
      return updated;
    });
  };


  const onUpdate = (startRef, endRef ) => {
    let newRecords = [...records];
    setRecords(newRecords);
    if(startRef > endRef){
      alert("시작일이 종료일보다 클 수 없습니다.");
      // alert을 modal로 보여줘보자!
    } else {
      if((startRef & endRef) === ''){
        newRecords = [...records];
        setRecords( newRecords);
        console.log(newRecords);
      } else if ((startRef !== '') & (endRef === '')){
        newRecords = [...records];
        newRecords = newRecords.filter(newRecord => newRecord.date >= startRef);
        setRecords( newRecords);
        console.log(newRecords);
      } else if ((startRef === '') & (endRef !== '')){
        newRecords = [...records];
        newRecords = newRecords.filter(newRecord => newRecord.date <= endRef);
        setRecords( newRecords);
        console.log(newRecords);
      } else if ((startRef !== '') & (endRef !== '')){
        newRecords = [...records];
        newRecords = newRecords
        .filter(newRecord => newRecord.date >= startRef)
        .filter(newRecord => newRecord.date <= endRef);
        setRecords(newRecords);
        console.log(newRecords);
      }
    }
    maxCost = 0;
    setMaxCost(sumCost);
    for(let i=0; i<Object.keys(newRecords).length; i++){
      if(maxCost < newRecords[i].cost){
        maxCost = newRecords[i].cost;
      }
    }
    setMaxCost(maxCost);

    sumCost = 0;
    setSumCost(maxCost);
    for(let i=0; i<Object.keys(newRecords).length; i++){
      sumCost = sumCost + newRecords[i].cost;
    }
    setSumCost(sumCost);

    
  }

  const setChange = () => {
    console.log(records);
      maxCost = 0;
      setMaxCost(sumCost);
      for(let i=0; i<Object.keys(records).length; i++){
        if(maxCost < records[i].cost){
          maxCost = records[i].cost;
        }
      }
      setMaxCost(maxCost);

      sumCost = 0;
      setSumCost(maxCost);
      for(let i=0; i<Object.keys(records).length; i++){
        sumCost = sumCost + records[i].cost;
      }
      setSumCost(sumCost);
    
  }




  useEffect(() => {
    setRecords(records);
  }, [records]);
  

  return (
    <>
      <DateSearchForm onSubmit={onSubmit} startRef={startRef} endRef={endRef} />
      <Editor records={records}  onUpdate={onUpdate} onSubmit={onSubmit} addRecord={createOrUpdateRecord} updateRecord={createOrUpdateRecord} deleteRecord={deleteRecord}/>    
      <Receipt records={records}/>
      <Summary records={records} dates={dates} sumCost={sumCost} maxCost={maxCost}  />
    </>
  );
};

export default Maker;