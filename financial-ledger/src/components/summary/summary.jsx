import React from 'react';
import styles from './summary.module.css'

const Summary = ({records ,dates, sumCost, maxCost}) => {

  let startDate;
  let endDate;

  for(let key in records){
    startDate = records[key].date;
    endDate = records[key].date;
  }

  if((sumCost === null) || (sumCost === undefined)){
    sumCost = 0;
  } else {
    sumCost = sumCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if((maxCost === null) || (maxCost === undefined)){
    maxCost = 0;
  } else {
    maxCost = maxCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.summary}>
      <span>{dates['start']} 부터 {dates['end']} 까지 총: {sumCost}원</span><br/>
      <span>{dates['start']} 부터 {dates['end']} 까지 가장 큰 지출은:  {maxCost}원</span>
    </div>
  );
};

export default Summary;