import Button from "./components/Button";
import Scoreboard from "./components/Scoreboard";
import React, { useState, useEffect } from 'react'
import Heroes from './Heroes.json'
import { pick } from "lodash";

function App() {
  const [ID, setID] = useState('')
  const [match, setMatch] = useState([])
  const [heroes, setHeroes] = useState([])
  const [players, setPlayers] = useState([])

  var endpoint = 'https://api.opendota.com/api/matches/' + ID

  const getMatch = (evt) => {
    console.log(endpoint)
    fetch(endpoint)
    .then(response => response.json())
    .then(data =>  {
      setMatch(data)
      setPlayers(data.players)
      console.log(players)
    });
    evt.preventDefault();
  }
  
  // const organizeMatch = (evt) =>{
  //   getMatch()
  //   setPlayers(match.players)
  //   console.log(players)
  //   evt.preventDefault();
  // }
  
  return (
    <>
      Dota App
      <div>
      <form onSubmit={getMatch}>
          <label >
              Input Match id:
              <input type='text' input={ID} onChange={e => setID(e.target.value)}/>
          </label>
          <input className='p-3 bg-blue-500 hover:bg-blue-300 rounded-md' type='submit'></input>
          {/* <p>{JSON.stringify(players)}</p> */}
        </form>
        
      </div>
      {players.length > 0 && <Scoreboard picks = {players}/>}
      <Button/>
    </>
  );
}

export default App;
