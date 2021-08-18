import React from 'react';
import styles from './card.module.css'

const Card = ({card, onDelete}) => {


const handleDeleteCard = () => {
  onDelete(card);
}

const {name, company, state, job, email, etc} = card;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.firstLine}>
          <span>{name}</span>
          <span>{company}</span>
          <span>{state}</span>
        </div>
        <div className={styles.secondLine}>
          <span>{job}</span>
          <span>{email}</span>
        </div>
        <div className={styles.thirdLine}>
          <span>{etc}</span>
        </div>
        <div className={styles.fourthLine}>
          <button className={styles.deleteBtn} onClick={handleDeleteCard}>Delete</button>
        </div>
      </div>
    </div>    

  );
};

export default Card;