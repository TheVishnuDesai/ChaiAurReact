import { useState } from "react"


function App() {
  const [color, setColor] = useState("#000")

  return (
    <div className="w-full h-screen" style = {{backgroundColor : color}}>
        <div 
        className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div 
          className="flex flex-wrap justify-center gap-4 bg-white px-6 py-4 rounded-full">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>

          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>

          <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>

          <button
          onClick={() => setColor("darkviolet")}
          className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          style={{backgroundColor: "darkviolet"}}
          >Darkviolet</button>

          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-2 rounded-full text-black  shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-2 rounded-full text-black  shadow-lg"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          </div>
        </div>
    </div>
  )
}

export default App