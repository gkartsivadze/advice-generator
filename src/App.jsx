import { useEffect, useState } from "react"
import { IconDice, PatternDividerDesktop } from "./assets";
import useFetch from "./hooks/useFetch";
import useResize from "./hooks/useResize";

function App() {
  const [adviceData, setAdviceData] = useState();
  const currentWidth = useResize();

  useEffect(() => {
    fetchNewRandomQuote()
  }, [])
  
  function fetchNewRandomQuote() {
    useFetch("https://api.adviceslip.com/advice", setAdviceData)
  }

  return (
    <main
      className=" min-h-screen bg-dark-blue grid place-items-center"
    >
      <div className="relative grid place-items-center gap-8 max-w-[50rem] min-h-[5rem] p-10 bg-dark-grayish-blue rounded-xl">
        <h3 className=" text-neon-green">ADVICE {"#" + adviceData?.id}</h3>
        <h1 className="text-5xl text-center text-light-cyan leading-[3rem]">
          "{adviceData?.advice}"
        </h1>
        <PatternDividerDesktop className=" h-10" />
        <button
          className="bg-neon-green rounded-full p-4 absolute bottom-0 translate-y-1/2 transition-[0.5s] hover:scale-110 active:scale-95"
          onClick={fetchNewRandomQuote}
        >
          <IconDice />
        </button>
      </div>
    </main>
  )
}

export default App
