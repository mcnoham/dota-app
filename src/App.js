import Button from "./components/Button";
import React, { useState, useEffect } from 'react'

function App() {
  const [match, setMatch] = useState([])
  const [heroes, setHeroes] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('https://api.opendota.com/api/matches/6099490856')
    .then(response => response.json())
    .then(data =>  organizeMatch(data));
  })

  const organizeMatch = (data) =>{
    setMatch(data)
    setPlayers(data.players)
  }
  
  return (
    <>
      Dota App
      <div>
        <p>{JSON.stringify(match)}</p>
      </div>
      <Button/>
    </>
  );
}

export default App;
