import React from 'react';

import Card from '../Card/Card.jsx';

export default class Deck extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          deck: this.props.deck,
      }
    }

    render(){
      return (
        <>
          {this.state.deck.records.map( (card) =>
            <Card card = {card}/>
          )}
        </>
      );
    }
}