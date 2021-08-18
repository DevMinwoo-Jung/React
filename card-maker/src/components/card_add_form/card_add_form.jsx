import React from 'react';
import styles from './card_add_form.module.css'

const CardAddForm = ({onAdd}) => {
  const nameRef =  React.createRef();
  const companyRef =  React.createRef();
  const stateRef =  React.createRef();
  const jobRef =  React.createRef();
  const emailRef =  React.createRef();
  const etcRef =  React.createRef();


const handleAddCard = card =>{
  onAdd(card);
}  

const onSubmit = (event) => {
  event.preventDefault();
  const name = nameRef.current.value;
  const company = companyRef.current.value;
  const state = stateRef.current.value;
  const job = jobRef.current.value;
  const email = emailRef.current.value;
  const etc = etcRef.current.value;
  const id = Date.now();
  const card = {name, company, state, job, email, etc, id};
  handleAddCard(card);

  nameRef.current.value = '';
  companyRef.current.value = '';
  stateRef.current.value = '';
  jobRef.current.value = '';
  emailRef.current.value = '';
  etcRef.current.value = '';

}
  return (
    <div className={styles.inputCards}>
      <div className={styles.inputCard}>
        <form onSubmit={onSubmit} className={styles.addForm}>
          <div className={styles.firstLine}>
            <input ref={nameRef} placeholder="Name"/>
            <input ref={companyRef} placeholder="company"/>
            <input ref={stateRef} placeholder="state"/>
          </div>
          <div className={styles.secondLine}>
            <input ref={jobRef} placeholder="job"/>
            <input ref={emailRef} placeholder="email"/>
          </div>  
          <div className={styles.thirdLine}>
            <input ref={etcRef} placeholder="etc"/>
          </div>
          <div className={styles.fourthLine}>
            <button className={styles.addBtn}>click me!</button>  
          </div>  
        </form>
      </div>  
    </div>
  );
};

export default CardAddForm;