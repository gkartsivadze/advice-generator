import { useEffect, useState } from "react"

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
      <div className=" w-1/2 h-96 p-10 bg-grayish-blue">
        <h3>ADVICE {"#" + adviceData.id}</h3>
        <h1 className="text-5xl text-center text-light-cyan">
          "{adviceData.advice}"
        </h1>
      </div>
    </main>
  )
}

export default App
