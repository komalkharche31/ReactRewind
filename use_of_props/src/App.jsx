import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MsgBox from './MsgBox'
import ProductTab from './ProductTab'
function App() {
 
  return (
    <>
      <MsgBox userName="Komal" TextColor="blue"/>
      <MsgBox userName="Shrisha" TextColor="green"/>
      <ProductTab/>
    </>
  )
}

export default App
