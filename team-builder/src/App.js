import React, { useState } from 'react';
import './App.css';
import Members from './components/Member';
import TeamForm from './components/TeamForm';

function App() {
  const[team, setTeam] = useState([
    {
    id: Date.now(),
    name: "Bill E. Bob",
    email: "Somewhere@sea.wave",
    role: "Official daydreamer",
  }
])

  return (
    <div className="App">
      <header className="App-header">
        <Members teamMember={team}/>
        <TeamForm />
      </header>
    </div>
  );
}

export default App;
