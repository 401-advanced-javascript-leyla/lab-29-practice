
import React from 'react';
import {Route} from 'react-router-dom';

import About from '../About/About';

import If from '../if/if.jsx';

import Page from '../Page/Page.jsx';

let valid = false;

class App extends React.Component{
  render(){
    return (
      <>   
        <Route exact path="/about" component={About} />
        <If condition={!valid}>
          <Route exact path="/" component={Page} />
        </If>
      </>
    );
  }
}

export default App;
