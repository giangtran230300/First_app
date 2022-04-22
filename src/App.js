import React from 'react';

import './App.css';
import Header from './components/Header';
//import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div className="App">
      <Header className="Header"/>
      <hr/>
    <LoginPage className="LoginPage"/>
    </div>
  );
}

export default App;
