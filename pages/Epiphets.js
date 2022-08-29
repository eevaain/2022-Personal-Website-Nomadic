import Header from '../components/Header'


function Epiphets() {
    return (
        <>
        <div className="overflow-y-scroll min-h-screen p-10 flex flex-col bg-white">
        <div className="flex flex-col place-self-center">
            <Header/>
        </div>
            <div className="pt-10 flex flex-col place-self-center">
                <a className="regular">Dont tell your plans. Show the result.</a>
                <a className="regular">Drop the name-dropping. You are powerful enough on your own.</a>
                <a className="regular">Start thinking less about yourself and not less of yourself.</a>
                <a className="regular">The ones who got rich werent the gold miners, but the ones selling the shovels.</a>
                <a className="regular">You are the average of the five people you spend the most time with.</a>
            </div>
        </div>
        </>
        )
  }
  
  export default Epiphets