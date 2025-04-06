import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'
function App() {
  /*  
  Now we can pass  and it run 
    <Lottery n = {3} WinningSum = {15}/>
  if winning condition change in future that case we can pass function as props
  below function we can pass to lottery jsx with props 
  */
 let WinCondition = (ticket)=>{
    return sum(ticket) === 15   // total 
    //return ticket.every((num)=>num === ticket[0])  // means all digit should be matched like 888
    //return ticket[0] === 0   // if first place is matched
 }
  return (
    <>
      <Lottery n = {3} WinCondition = {WinCondition}/>
    </>
  )
}

export default App
