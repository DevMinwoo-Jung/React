import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import DateSearchForm from '../date_search_form/date_search_form';
import Editor from '../editor/editor';
import Header from '../header/header';
import Receipts from '../receipts/receipts';
import Summary from '../summary/summary';
import styles from './maker.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const Maker = ({FileInput, authService, recordRepository }) => {


  const history = useHistory();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [records, setRecords] = useState({});
  const [newRecords, setNewRecords] = useState({});
  const [orginalRecords, setOrginalRecords] = useState({});
  const [maxCost, setMaxCost] = useState();
  const [sumCost, setSumCost] = useState();

  let startRef = useRef();
  let endRef = useRef();
  const [dates, setDates] = useState({start: '', end: ''});

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  
  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = recordRepository.syncRecords(userId, records => {
      setOrginalRecords(records);
      setNewRecords(records);
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

  useEffect(() => {
    const stopSync = recordRepository.syncRecords(userId, records => {
      setRecords(records);
    })
    return () => stopSync();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    startRef = startRef.current.value;
    endRef = endRef.current.value;
    onUpdate(startRef, endRef);
    modifyDates(startRef, endRef);
  }

  const modifyDates = (startRef, endRef) => {
    setDates({
      start: startRef,
      end: endRef,
    })
  }

  const onUpdate = (startRef, endRef ) => {
    setNewRecords(orginalRecords);
      if((startRef === '') & (endRef === '')){
        setNewRecords({...orginalRecords});
        setRecords(newRecords);
      } else if ((startRef !== '') & (endRef === '')){
        setNewRecords({...orginalRecords});
        for(let key in newRecords){
          if(!(newRecords[key].date >= startRef)){
            delete newRecords[key];
          }
        }
        setRecords(newRecords);
      } else if ((startRef === '') & (endRef !== '')){
        setNewRecords({...orginalRecords});
        for(let key in newRecords){
          if(!(newRecords[key].date <= endRef)){
            delete newRecords[key];
          }
        }
        setRecords(newRecords);
      } else if ((startRef !== '') & (endRef !== '')){
        setNewRecords({...orginalRecords});
        for(let key in newRecords){
          if(!(newRecords[key].date >= startRef && newRecords[key].date <= endRef)){
            delete newRecords[key];
          }
        }
        setRecords(newRecords);
      
    }

    let sum = 0;
    for(let key in newRecords){
      sum = sum + Number(newRecords[key].cost);
    }
    setSumCost(sum);

    let max = 0;
    for(let key in newRecords){
      if(max < Number(newRecords[key].cost)){
        max = Number(newRecords[key].cost);
      }
    }
    setMaxCost(max);
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

  return (
    <>
    <Slider {...settings}>
    <Receipts records={records}/>
    </Slider>
    <Header onLogout={onLogout} />
    <section className={styles.contents}>
    <div>
      <DateSearchForm onSubmit={onSubmit} startRef={startRef} endRef={endRef} />
    </div>
    <div className={styles.display}>
      <Summary records={records} dates={dates} sumCost={sumCost} maxCost={maxCost}  />
    </div>
      <Editor FileInput={FileInput} records={records}  onUpdate={onUpdate} onSubmit={onSubmit} addRecord={createOrUpdateRecord} updateRecord={createOrUpdateRecord} deleteRecord={deleteRecord}/>    
    </section>
    </>
  );
};

export default Maker;