import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CartPage from './components/Cart';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home  />
        </Route>
        <Route path="/cart">
          <CartPage  />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
