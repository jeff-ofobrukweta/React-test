import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Header/Header';
import Materialcard from './Materialcard/Materialcard';
import Uploadbutton from './Uploadbutton/Uploadbutton';
import {Route,Switch} from 'react-router-dom';
import Landingpage from './Landingpage/Landingpage';
import Formlogin from './Formlogin/Formlogin';
import Dragpage from './Dragpage/Dragpage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Landingpage}/>
          <Route path="/landing" exact component={Materialcard}/>
          <Route path="/signup" exact component={Form}/>
          <Route path="/login" exact component={Formlogin}/>
          <Route path="/upload" exact component={Dragpage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
