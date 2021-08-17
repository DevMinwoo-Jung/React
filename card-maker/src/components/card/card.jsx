import React from 'react';
import styles from './card.module.css'

const Card = ({card, onDelete}) => {


const handleDeleteCard = () => {
  onDelete(card);
}

const {name, company, state, job, email} = card;
  return (
    <div className={styles.cards}>
    <div className={styles.card}>
      <span>{name}</span>
      <span>{company}</span>
      <span>{state}</span>
      <span>{job}</span>
      <span>{email}</span>
      <button onClick={handleDeleteCard}>Delete</button>
    </div>
    </div>    

  );
};

export default Card;