import Button from "./components/Button";
import React, { useState, Component } from 'react'

function App() {
  const [match, setMatch] = useState([]);

  

  componentDidMount() {
    fetch('https://api.opendota.com/api/matches/6099490856')
      .then(response => response.json())
      .then(data =>  console.log(data));
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
