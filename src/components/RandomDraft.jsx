import React from "react"
import { useState } from "react"

function RandomDraft( {handleStart, picksSetter, bansSetter} ){

    const [bans, setBans] = useState(3)
    const [picks, setPicks] = useState(5)

    const regex = new RegExp('^[0-9]+$');

    const incBans = ()=> {(bans >= 2 && bans < 40 ? setBans(bans + 1) : (bans === 1 ? setBans(bans + 1) : ""))}
    const decBans = ()=> {(bans >= 2 && bans < 40 ? setBans(bans - 1) : "")}
    const incPicks = ()=> {(picks >= 2 && picks < 40 ? setPicks(picks + 1) : (picks === 1 ? setPicks(picks + 1) : ""))}
    const decPicks = ()=> {(picks >= 2 && picks < 40 ? setPicks(picks - 1) : "")}

    function handleChangeBans(event){
        event.preventDefault
       if(regex.test(event.target.value) || event.target.value === ""){
       } else{
        return ""
       }
        
        if(event.target.value > 20){
            event.target.value = 20
        }
        (event.target.value < 1 ? event.target.value = "" : event.target.value)
        setBans(event.target.value)
    }

    function handleChangePicks(event){
        event.preventDefault
        if(regex.test(event.target.value) || event.target.value === ""){
        } else{
         return ""
        }
        if(event.target.value > 20){
            event.target.value = 20
        }
        (event.target.value < 1 ? event.target.value = "" : event.target.value)
        setPicks(event.target.value)
    }

    function handleDraft(event) {
        event.preventDefault
        picksSetter(picks)
        bansSetter(bans)
        return handleStart()
    }

        return <div>
            <p>Select number of bans per team:</p>
            <button onClick={incBans}>+</button><input onChange={handleChangeBans} value={bans}/><button onClick={decBans} >-</button>
            
            <p>test: {bans} {picks}</p>

            <button onClick={incPicks} >+</button><p>Select the number of picks per team:</p><input onChange={handleChangePicks} value={picks}/><button onClick={decPicks} >-</button>
            <button onClick={handleDraft} className="h-fit w-fit bg-slate-200">Start!</button>
        </div>
}

export default RandomDraft;