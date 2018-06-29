import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Nav from './components/Nav';

const App = () => (

  <BrowserRouter>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/saved' component={Saved} />
        <Route component={Home} />
      </Switch>
    </React.Fragment>  
  </BrowserRouter>

);

export default App;
