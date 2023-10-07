import { useEffect, useRef, useState } from "react"
import { IconDice, PatternDividerDesktop } from "./assets";
import patternDividerMobile from "./assets/PatternDividerMobile.svg"
import useFetch from "./hooks/useFetch";
import useResize from "./hooks/useResize";

function App() {
  const [adviceData, setAdviceData] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const currentWidth = useResize();

  useEffect(() => {
    fetchNewRandomQuote()
  }, [])

  function fetchNewRandomQuote() {
    useFetch("https://api.adviceslip.com/advice", setAdviceData);
    setButtonDisabled(true);
  }

  useEffect(() => {
    setButtonDisabled(false);
  }, [adviceData])

  return (
    <main
      className=" min-h-screen bg-dark-blue grid place-items-center"
    >
      <div className="relative grid place-items-center gap-8 max-w-[90vw] lg:max-w-[50rem] min-h-[5rem] p-10 bg-dark-grayish-blue rounded-xl">
        <h3 className=" text-neon-green">ADVICE {"#" + adviceData?.id}</h3>
        <h1 className="text-xl leading-[1.5rem] md:text-3xl md:leading-[2rem] lg:text-5xl lg:leading-[3rem] text-center text-light-cyan ">
          "{adviceData?.advice}"
        </h1>
        {
          currentWidth > 600
            ? <PatternDividerDesktop className="h-10" />
            : <img src={patternDividerMobile} className="h-10" />
        }
        <button
          onClick={fetchNewRandomQuote}
          disabled={buttonDisabled}
          className="bg-neon-green disabled:scale-0 rounded-full p-4 absolute bottom-0 translate-y-1/2 transition-[0.5s] hover:scale-110 active:scale-95"
        >
          <IconDice />
        </button>
      </div>
    </main>
  )
}

export default App
