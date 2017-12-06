import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='page-flexbox-wrapper'>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/:id' component={MovieDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
