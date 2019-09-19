import React from 'react';

import Card from '../Card/Card.jsx';

export default class Deck extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          content: {},
      }
    }

    render(){
      return (
        <>
        //todo: use card for each content section
          <Card />
        </>
      );
    }
}