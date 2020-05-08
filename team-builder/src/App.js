import React, { useState } from 'react';
import './App.css';
import Members from './components/Member';

function App() {
  const[team, setTeam] = useState([
    {
    name: "Bill E. Bob",
    email: "Somewhere@sea.wave",
    role: "Official daydreamer",
  }
])

  return (
    <div className="App">
      <header className="App-header">
        <Members teamMember={team}/>
      </header>
    </div>
  );
}

export default App;
