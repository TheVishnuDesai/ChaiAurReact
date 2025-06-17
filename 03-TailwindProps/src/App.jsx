import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='text-green-300' >Tailwind with Chai</h1>
      <Card placeName="Kashmir" hasTag = "India"  />
      <Card placeName="Nepal" hasTag = "Nepal"/>
      <Card placeName="Irland" />
    </>
  )
}

export default App
