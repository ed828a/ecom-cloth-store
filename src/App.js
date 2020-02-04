import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './component/header/Header';
import SignInSignUp from './component/sign-in-sign-up/SignInSignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
      
    </div>
  );
}

export default App;
