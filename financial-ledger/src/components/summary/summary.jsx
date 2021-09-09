import React from 'react';

const Summary = ({records, dates, sumCost, maxCost}) => {


  return (
    <div>
      <h1>{dates[0]} ~ {dates[1]} total: {sumCost}</h1>
      <h1>{maxCost}</h1>
    </div>
  );
};

export default Summary;