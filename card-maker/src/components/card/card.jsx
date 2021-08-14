import React from 'react';
import styles from './card.module.css'

const Card = (props) => {

const {name, company, state, job, email} = props.card;
  return (
    <div className={styles.card} key="1">
      <p>{name}</p>
      <p>{company}</p>
      <p>{state}</p>
      <p>{job}</p>
      <p>{email}</p>
      <p>왜 안되는겨...</p>
    </div>
  );
};

export default Card;