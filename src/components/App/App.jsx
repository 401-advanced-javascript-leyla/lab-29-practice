
import React from 'react';
import {Route} from 'react-router-dom';

// import About from '../About/About';

// import If from '../if/index.js';

import Page from '../Page/Page.jsx';


class App extends React.Component{

  render(){
    return (
    <>
        <Route exact path="/" component={Page} />
        <Page />
       {/* <If condition={dog === 'Kali'}>
         <Page content={cotent} />
       </If> */}
    </>
    );
  }
}

export default App;
