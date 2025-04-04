import { useState } from "react"

export const Ludobox = ()=>{
    let [colorCounter, setcolorCounter] = useState({
        blue:0,
        yellow:0,
        green:0,
        red:0
    })

    let HandleBlueCount = ()=>{
        /* it is all reset because object location is same and value is defrent so compiler for boject can not recognized hence all vale reset */

        //setcolorCounter({...colorCounter,blue:colorCounter.blue +=1})  
        //Or 
        setcolorCounter((prevVal)=>{
            return {...prevVal, blue:prevVal.blue + 1};
        })        
    }

    
    let HandleYellowCount = ()=>{
        colorCounter.yellow +=1;
        setcolorCounter({...colorCounter})         
    }

    
    let HandleGreenCount = ()=>{
        colorCounter.green +=1;
        setcolorCounter({...colorCounter})         
    }

    
    let HandleRedCount = ()=>{
        colorCounter.red +=1;
        setcolorCounter({...colorCounter})         
    }
    return(
        <>
        <div>
            <h4>Blue Moves: {colorCounter.blue}</h4>
            <button onClick={HandleBlueCount} style={{backgroundColor:"blue"}}>+1</button>
        </div>
        <div>
            <h4>Yellow Moves: {colorCounter.yellow}</h4>
            <button onClick={HandleYellowCount} style={{backgroundColor:"yellow", color:"black"}}>+1</button>
        </div>
        <div>
            <h4>Green Moves: {colorCounter.green}</h4>
            <button onClick={HandleGreenCount} style={{backgroundColor:"green"}}>+1</button>
        </div>
        <div>
            <h4>Red Moves: {colorCounter.red}</h4>
            <button onClick={HandleRedCount} style={{backgroundColor:"red"}}>+1</button>
        </div>
        </>
    )
}