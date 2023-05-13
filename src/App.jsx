
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Selection from './components/Selection'
import DraftMode from './components/DraftMode'

function App() {

    const [draft, setDraft] = useState(false)
    const [bans, setBans] = useState(3)
    const [picks, setPicks] = useState(5)

  function bansSetter(num){
    return setBans(num)
  }

  function picksSetter(num){
    return setPicks(num)
  }


function handleStart(){
  setDraft(true);
}
  return (
    <div className="App">
      <Navbar></Navbar>
      {(draft === true ? <DraftMode bans={bans} picks={picks}></DraftMode> : <Selection handleStart={handleStart} picksSetter={picksSetter} bansSetter={bansSetter}></Selection>)}
    </div>
  )
}

export default App
