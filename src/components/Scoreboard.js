import React from 'react'
import Heroes from '../Heroes.json'

function Scoreboard({picks}) {
    return (
        //Heroes
        <div>
            <h1>Radiant</h1>
            <div>{picks.map((x, index) => <div key={index}>{x.player_slot < 5? Heroes[x.hero_id].localized_name : null}</div>)}</div>
            <h1>Dire</h1>
            <div>{picks.map((x, index) => <div key={index}>{x.player_slot > 127? Heroes[x.hero_id].localized_name : null}</div>)}</div>
        </div>
    )
}

export default Scoreboard
