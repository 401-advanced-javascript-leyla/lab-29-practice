import React from 'react';

import Deck from '../Deck/Deck.jsx'; 

import Content from '../../content.json';

export default class Page extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        content: Content,
    }
  }

  render(){
    return (
      <>
        {this.state.content.map( (deck,i) => (
          <section className="deck">
            <header><h2>{deck.title}</h2></header>
            <Deck deck={deck} />
          </section>
        ))}
      </>
    );
  }
}
