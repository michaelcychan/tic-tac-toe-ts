import React from 'react';
import './App.css';

import {Board} from './components/board'

function App() {
  return (
    <div className="App">
      <header>
        Tic Tac Toe
      </header>
      <Board />
    </div>
  );
}

export default App;
