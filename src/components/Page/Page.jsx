import React from 'react';

import Deck from '../Deck/Deck.jsx';

export default class Page extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          content: {},
      }
    }

    render(){
      return (
        <>
        //todo: use deck for each content section
          <Deck />
        </>
      );
    }
}