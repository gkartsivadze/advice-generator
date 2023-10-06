import { useEffect, useState } from "react"
import { PatternDividerDesktop, PatternDividerMobile } from "./assets";

function App() {
  const [adviceData, setAdviceData] = useState({
    id: 5,
    advice: "Brush your teeth the moment you get up."
  });

  // useEffect(() => {
  //   fetch("https://api.adviceslip.com/advice")
  //     .then(data => data.json())
  //     .then(data => setAdviceData(data.slip))
  // }, [])

  return (
    <main
      className=" min-h-screen bg-dark-grayish-blue grid place-items-center"
    >
      <div className="grid place-items-center gap-8 w-1/2 min-h-[5rem] p-10 bg-grayish-blue">
        <h3 className=" text-neon-green">ADVICE {"#" + adviceData.id}</h3>
        <h1 className="text-5xl text-center text-light-cyan">
          "{adviceData.advice}"
        </h1>
        <PatternDividerDesktop />
      </div>
    </main>
  )
}

export default App
