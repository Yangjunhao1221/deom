import React from 'react';
import Home from 'screen/home'
import Login from 'screen/Login';
import { TsReactTest } from 'screen/Try-user-arry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <TsReactTest></TsReactTest>
      <Login></Login>
    </div>
  );
}

export default App;
