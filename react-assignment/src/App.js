import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Action from './components/actions/ActionsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Action />
    </div>
  );
}

export default App;
