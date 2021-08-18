import React, { Component } from 'react';
import Profile from '../profile/profile';
import Card from '../card/card';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './card_and_profile.module.css'
import Header from '../header/header';


class CardAndProfile extends Component {
  state = {
    cards: [
      {name: 'minwoo', company: 'Baemin', state: 'not bad', job: 'front-end developer', email: 'asd@asd.com', id: 1}
    ],
    profile: [
      {ex: 'asd'}
    ],
  };
  handleAddCard = card => {
    console.log(card.name);
    if(card.name === null || undefined || ""){
      alert("이름과 이메일은 반드시 적어야합니다.");
      return;
    } else {
      const cards = [...this.state.cards, {name: card.name, company: card.company, state: card.state, job: card.job, email: card.email, etc: card.etc ,id: card.id}]
      this.setState({cards});
    }

  }

  handleDeleteCard = card => {
    console.log(card);
    const cards = this.state.cards.filter(item => item.id !== card.id);
    this.setState({ cards });
  }

  render() {
    return (
    <>
      <Header/>
      <div className={styles.Card_And_Profile}>
        <div className={styles.card__section}>
          <h1>Card Maker</h1>
          {this.state.cards.map(card => (
            <Card key={Math.random()} card={card} onDelete={this.handleDeleteCard}/>
          ))}
          <CardAddForm onAdd={this.handleAddCard}/>
        </div>
        <div className={styles.profile__section}>
          <Profile profile={this.state.profile}/>
        </div>
      </div>
    </> 
    );
  }
}

export default CardAndProfile;