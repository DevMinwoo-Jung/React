import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import DateSearchForm from '../date_search_form/date_search_form';
import Editor from '../editor/editor';
import Header from '../header/header';
import Receipt from '../receipts/receipts';
import Summary from '../summary/summary';

const Maker = ({FileInput, authService, recordRepository }) => {

  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [records, setRecords] = useState({});
  const [orginalRecords, setOrginalRecords] = useState();
  const [maxCost, setMaxCost] = useState();
  const [sumCost, setSumCost] = useState();

  let startRef = useRef();
  let endRef = useRef();
  let [dates, setDates] = useState({start: '', end: ''});

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  
  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = recordRepository.syncRecords(userId, records => {
      setOrginalRecords(records);
      setRecords(records);
    })
    return () => stopSync();
  }, [userId, recordRepository]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [userId, history, authService]);




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
      updated[record.id] = record;
      return updated;
    });
    recordRepository.saveRecord(userId, record);

  };

  const deleteRecord = record => {
    setRecords(records => {
      const updated = {...records};
      delete updated[record.id];
      return updated;
    });
    recordRepository.removeRecord(userId, record);
  };

  // const callOriginal = recordRepository.syncRecords(userId, orginalRecords => {
  //   setOrginalRecords(orginalRecords);
  // });

  const onUpdate = (startRef, endRef ) => {

    let newRecords = orginalRecords;
    console.log(newRecords);
    setRecords(newRecords);
    if(startRef > endRef){
      alert("시작일이 종료일보다 클 수 없습니다.");
      // alert을 modal로 보여줘보자!
    } else {
      if((startRef & endRef) === ''){
        newRecords = Object.entries({...orginalRecords});
        newRecords = newRecords
        .map(newRecord => newRecord[1]);
        setRecords( newRecords);
      } else if ((startRef !== '') & (endRef === '')){
        newRecords = Object.entries({...orginalRecords});
        newRecords = newRecords.filter(newRecord => newRecord[1].date >= startRef)
        .map(newRecord => newRecord[1]);
        setRecords( newRecords);
      } else if ((startRef === '') & (endRef !== '')){
        newRecords = Object.entries({...orginalRecords});
        newRecords = newRecords.filter(newRecord => newRecord[1].date <= endRef)
        .map(newRecord => newRecord[1]);
        setRecords( newRecords);
      } else if ((startRef !== '') & (endRef !== '')){
        newRecords = Object.entries({...records});
        newRecords = newRecords
        .filter(newRecord => newRecord[1].date >= startRef)
        .filter(newRecord => newRecord[1].date <= endRef)
        .map(newRecord => newRecord[1]);
        setRecords(newRecords);
      }
    }

    let max = 0;
    setMaxCost(max);
    for(let i=0; i<Object.keys(newRecords).length; i++){
      if(max < newRecords[i].cost){
        max = Number(newRecords[i].cost);
      }
    }
    setMaxCost(max);

    let sum = 0;
    setSumCost(sum);
    for(let i=0; i<Object.keys(newRecords).length; i++){
      sum = sum + Number(newRecords[i].cost);
    }
    setSumCost(sum);

    console.log(orginalRecords);
    console.log(records);
  }

  useEffect(() => {
    setRecords(records);
  }, [records]);
  

  return (
    <>
      <Header onLogout={onLogout} />
      <DateSearchForm onSubmit={onSubmit} startRef={startRef} endRef={endRef} />
      <Editor FileInput={FileInput} records={records}  onUpdate={onUpdate} onSubmit={onSubmit} addRecord={createOrUpdateRecord} updateRecord={createOrUpdateRecord} deleteRecord={deleteRecord}/>    
      <Receipt records={records}/>
      <Summary records={records} dates={dates} sumCost={sumCost} maxCost={maxCost}  />
    </>
  );
};

export default Maker;