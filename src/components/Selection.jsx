import { useState } from "react";
import NormalDraft from "./NormalDraft";
import RandomDraft from "./RandomDraft";

function Selection( {handleStart, picksSetter, bansSetter} ){

const [draft, setDraft] = useState(true)

    return <div className="flex flex-wrap pt-16">
        <div className="w-full">
        <div className="w-4/5 py-8 mx-auto">League RanDraft es una aplicacion web que se utiliza para crear drafts de League of Legends con la capacidad de personalizar las elecciones. La finalidad es tener mas flexibilidad al momento de banear campeones. Esta aplicacion tiene dos modos: Draft normal y Random draft. El Draft normal funciona como el draft dentro del juego, con la posibilidad de aumentar o reducir la cantidad de bloqueos. Mientras que el Random Draft, luego de los bloqueos, elegira cierta cantidad de campeones del rooster restante.</div>
        </div>
        <h3 className="text-bold text-2xl text-center">Select a mode:</h3>
        <button onClick={()=> setDraft(true)} className={(draft === true ? "bg-blue-300" : "bg-slate-200") + " h-fit w-fit p-4 border-black"} >Normal draft</button>
        <button onClick={()=> setDraft(false)} className={(draft === false ? "bg-blue-300" : "bg-slate-200") + " h-fit w-fit p-4 border-black"}>Random draft</button>
        <div>
            {(draft === true ? <NormalDraft></NormalDraft> : <RandomDraft handleStart={handleStart} picksSetter={picksSetter} bansSetter={bansSetter}></RandomDraft>)}
        </div>
    </div>
}

export default Selection;