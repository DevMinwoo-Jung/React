import React from 'react';
import ImageFileInput from '../../image_file_input/image_file_input';
import Button from '../button/button';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card, updateCard, deleteCard}) => {
      const {name, company, title, email, message, theme, fireName, fireURL} = card;
      const onChange = (event) => {
            if(event.currentTarget == null) {
                  return;
            }
            event.preventDefault();
            console.log(`[event.currentTarget.name] = ${event.currentTarget.name} event.currentTarget.value = ${event.currentTarget.value}`);
            updateCard({
                  ...card,
                  [event.currentTarget.name]: event.currentTarget.value,
            });
      };
      const onSubmit = (event) => {
            event.preventDefault();
            deleteCard(card);
      };
      return(
            <form className={styles.form}>
                  <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
                  <input className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
                  <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                        <option value="colorful">colorful</option>
                  </select>
                  <input className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
                  <input className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
                  <textarea className={styles.textarea} name="mssage" value={message} onChange={onChange}/>
                  <div className={styles.fileInput}>
                  <ImageFileInput/>
                  </div>
                  <Button name='Delete' onClick={onSubmit}/>
            </form>
      );
};
export default CardEditForm;