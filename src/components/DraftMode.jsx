function DraftMode( {bans, picks} ){

    return(
        <div className="p-16">
            <p className="text-3xl">This draft will have {bans} bans and {picks} picks.</p>
            <div className="w-full h-32 border-2 border-black">
                <div className="w-full h-8 bg-black">
                    <p className="text-white">bans</p>
                </div>
            </div>
            <div className="w-full h-32 border-2 border-blue-800">
                <div className="w-full h-8 bg-blue-800">
                    <p className="text-white">Blue team picks:</p>
                </div>
            </div>
            <div className="w-full h-32 border-2 border-red-800">
                <div className="w-full h-8 bg-red-800">
                    <p className="text-white">Red team picks:</p>
                </div>
            </div>
    </div>
    ) 
}

export default DraftMode;