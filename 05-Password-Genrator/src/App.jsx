import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += " !@#$%^&*()-_=+{};:/?.>,< "

    for (let i = 0; i <= length; i++) {   
     let char = Math.floor(Math.random() * str.length + 1) 
     pass += str.charAt(char)  
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])

  return (
      <div className='w-full max-w-md mx-auto rounded-md p-4 my-10 bg-gray-800 text-orange-500'>
        <h1 className='text-2xl text-white text-center my-4'>Password Genrator</h1>

        <div className='flex rounded-md overflow-hidden mb-4'>
          <input 
              type="text"
              value={password}    
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              ref={passwordRef}
              readOnly
          />
          <button onClick={copyToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-2 shrink-0'>Copy</button>
        </div>

        <div className='flex text-s gap-x-4'>
           <div className='flex items-center gap-x-2'>
             <input 
                type="range" 
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}  
            />
            <label>Length : {length}</label>
           </div>

           <div className='flex items-center gap-x-3'> 
           <div>
            <input 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id= "numberInput" 
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
            />
            <label htmlFor="numberInput">Number</label>
           </div>

           <div>
            <input 
                type="checkbox" 
                defaultChecked = {charAllowed}
                id= "charInput" 
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
            />
            <label htmlFor="numberInput">Character</label>
           </div>

           </div>
        </div>
      </div>
  )
}
export default App