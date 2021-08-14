import React, { Component } from 'react';
import Profile from '../profile/profile';
import Card from '../card/card';


class CardAndProfile extends Component {
  state = {
    card: [
      {name: 'minwoo', company: 'Baemin', state: 'not bad', job: 'front-end developer', email: 'asd@asd.com', }
    ],
    profile: [
      {ex: 'asd'}
    ]
  };


  render() {
    return (
      <div>
        <Card card={this.state.card}/>
        <Profile profile={this.state.profile}/>
      </div>
    );
  }
}

export default CardAndProfile;