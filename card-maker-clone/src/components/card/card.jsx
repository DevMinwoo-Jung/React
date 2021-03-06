import React, { memo } from 'react';
import styels from './card.module.css'

const Card = memo(({card}) => {
  const DEFAULT_IMAGE ='/images/default_logo.png'
  const {name, company, title, email, message, theme, fileURL} = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styels.card} ${pickStyles(theme)}`}>
      <img className={styels.avatar} src={url} alt="profile" />
      <div className={styels.info}>
        <h1 className={styels.name}>{name}</h1>
        <p className={styels.company}>{company}</p>
        <p className={styels.title}>{title}</p>
        <p className={styels.email}>{email}</p>
        <p className={styels.message}>{message}</p>
      </div>
    </li>
  );
});

function pickStyles(theme){
  switch(theme){
    case 'dark':
      return styels.dark;
    case 'light':
      return styels.light;
    case 'colorful':
      return styels.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
      
  }
}


export default Card;