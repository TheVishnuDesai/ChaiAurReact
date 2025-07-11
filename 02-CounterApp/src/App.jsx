import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(7)
  //let counter = 7

  const addValue = () => {    
    if(counter < 20){
      setCounter(counter + 1)
     // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai Aur React</h1>

      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App