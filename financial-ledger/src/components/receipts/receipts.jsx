import React from 'react';
import Receipt from '../recepit/receipt';

const Receipts = ({records}) => {

  return (
    Object.keys(records).map(key => (
      <Receipt key={key} record={records[key]}/>
    ))
  );
};

export default Receipts;