import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
      {/* <ShopPage /> */}
    </div>
  );
}

export default App;
