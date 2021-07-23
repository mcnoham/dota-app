import React from 'react'
import Heroes from '../Heroes.json'

function Scoreboard({picks}) {
    return (
        <div>
            <div>{picks.map((x, index) => <div key={index}>{x.player_slot < 5? Heroes[x.hero_id].localized_name : null}</div>)}</div>
            <div>{picks.map((x, index) => <div key={index}>{x.player_slot > 127? Heroes[x.hero_id].localized_name : null}</div>)}</div>
        </div>
    )
}

export default Scoreboard
