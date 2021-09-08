import React from 'react';

const Summary = ({records, dates}) => {

  let highestCost = 0;
  let totalCost = 0;

  for(let i=0; i<Object.keys(records).length; i++){
    if(highestCost < records[i].cost){
      highestCost = records[i].cost;
    }
  }
  console.log(highestCost);

  for(let i=0; i<Object.keys(records).length; i++){
    totalCost = totalCost + records[i].cost;
  }


  return (
    <div>
      <h1>{dates[0]} ~ {dates[1]} total: {totalCost}</h1>
      <h1>{highestCost}</h1>
    </div>
  );
};

export default Summary;