import React, { Component } from 'react'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Swtich, Switch } from 'react-router-dom'
import ErrorPage from './pages/errorpage/ErrorPage';
import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';



export class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route component={ErrorPage} />
        </Switch>

      </div>
    )
  }
}


 
export default App;

