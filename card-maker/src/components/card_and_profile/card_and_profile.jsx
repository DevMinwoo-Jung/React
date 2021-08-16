import React, { Component } from 'react';
import Profile from '../profile/profile';
import Card from '../card/card';


class CardAndProfile extends Component {
  state = {
    cards: [
      {name: 'minwoo', company: 'Baemin', state: 'not bad', job: 'front-end developer', email: 'asd@asd.com', }
    ],
    profile: [
      {ex: 'asd'}
    ],
  };
  addCards = () => {
    const cards = [...this.state.cards, {name: 'minwoo', company: 'big', state: '?', job: 'dev', email: 'email.com'}]
    this.setState({cards});
  }

  render() {
    return (
      <div>
        {this.state.cards.map(card => (
          <Card key={Math.random()} card={card} onCardClick={this.addCards}/>
        ))}
        <Profile profile={this.state.profile}/>
      </div>
    );
  }
}

export default CardAndProfile;