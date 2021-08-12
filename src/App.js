import React, { useEffect, useState } from 'react';
import './App.css';
import playerInfo from "./data/data.json";

import Player from './component/Player/Player.js';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect( () =>{

    setPlayers(playerInfo);
  },[])
  //console.log(players);
  return (
    <div>
      <h3>Total Player : {players.length}</h3>
      {
        console.log(players)
      }
      
      <h2>Player Name :</h2>
      <ul>
        {
          players.map(player => <Player player = {player}></Player>)
        }
      </ul>
  
    </div>
  );
}

export default App;
