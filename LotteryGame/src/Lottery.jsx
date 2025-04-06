import { useState } from "react"

import { genTicket , sum} from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n = 3, WinCondition}){
    let [ ticket, setTicket] = useState(genTicket(n));  // n is the length of ticket number
    //let isWinningTotal = sum(ticket) === WinningSum;
    let isWinningTotal = WinCondition(ticket)

    let buyTicket = ()=>{
        setTicket(genTicket(n))
        console.log(ticket)
    }
    return (
        <div> 
            <h1>Lottery Game</h1>
            <p>If Total number is 15 then you will won </p>
            <Ticket ticket = {ticket}/>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
           
           <h3> { isWinningTotal && "Congratullation, you won!"  }</h3>
        </div>
    )
}