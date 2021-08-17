import React from 'react';
import styles from './card_add_form.module.css'

const CardAddForm = ({onAdd}) => {
  const nameRef =  React.createRef();
  const companyRef =  React.createRef();
  const stateRef =  React.createRef();
  const jobRef =  React.createRef();
  const emailRef =  React.createRef();


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
  const id = Date.now();
  const card = {name, company, state, job, email, id};
  handleAddCard(card);

}
  return (
    <form onSubmit={onSubmit} className={styles.addForm}>
        <p>name<input ref={nameRef}/></p>
        <p>company<input ref={companyRef}/></p>
        <p>state<input ref={stateRef}/></p>
        <p>job<input ref={jobRef}/></p>
        <p>email<input ref={emailRef}/></p>
        <button>click me!</button>  
    </form>
  );
};

export default CardAddForm;