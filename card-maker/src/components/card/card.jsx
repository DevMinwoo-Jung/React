import React from 'react';
import styles from './card.module.css'

const Card = ({card ,onCardClick}) => {
  const formRef =  React.createRef();
  const nameRef =  React.createRef();
  const companyRef =  React.createRef();
  const stateRef =  React.createRef();
  const jobRef =  React.createRef();
  const emailRef =  React.createRef();

const onSubmit = event => {
  event.preventDefault();
  const name = nameRef.current.value;
  const company = companyRef.current.value;
  const state = stateRef.current.value;
  const job = jobRef.current.value;
  const email = emailRef.current.value;
  const card = {name, company, state, job, email, card};
  console.log(name, company, state, job, email);

}


const {name, company, state, job, email} = card;
  return (
    <div className={styles.card} key="1">
      <span>{name}</span>
      <span>{company}</span>
      <span>{state}</span>
      <span>{job}</span>
      <span>{email}</span>
      <form ref={formRef} onSubmit={onSubmit} >
        <p>name<input ref={nameRef}/></p>
        <p>company<input ref={companyRef}/></p>
        <p>state<input ref={stateRef}/></p>
        <p>job<input ref={jobRef}/></p>
        <p>email<input ref={emailRef}/></p>
        <button type="submit" onClick={() => onCardClick()}>click me!</button>  
      </form>
    </div>

  );
};

export default Card;