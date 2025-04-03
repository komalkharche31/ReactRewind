import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Product } from './Product'

function App() {
  const option = ["Fast", "Reliable"];
  //const option2 = {a:"Hi-Tech", b:"Durable", c:"Fast"}
  return (
    <>
      <Product title="Laptop" price={45000} features = {option} />
      <Product title="Mobile" price={30000}/>
      <Product title="Pen" price={10}/>
    </>
  )
}

export default App
