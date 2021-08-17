import React, { Component } from 'react';
import Profile from '../profile/profile';
import Card from '../card/card';
import CardAddForm from '../card_add_form/card_add_form';


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
    if((card.name || card.email) === null || undefined || ""){
      alert("이름과 이메일은 반드시 적어야합니다.");
      return;
    } else {
      const cards = [...this.state.cards, {name: card.name, company: card.company, state: card.state, job: card.job, email: card.email, id: card.id}]
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
      <div>
        {this.state.cards.map(card => (
          <Card key={Math.random()} card={card} onDelete={this.handleDeleteCard}/>
        ))}
        <CardAddForm onAdd={this.handleAddCard}/>
        <Profile profile={this.state.profile}/>
      </div>
    );
  }
}

export default CardAndProfile;