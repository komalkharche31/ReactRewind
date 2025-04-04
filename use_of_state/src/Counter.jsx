import React, { useState } from 'react'

const Counter = () => {
    let [Count,setCount] = useState(0);
    function increaseCount(){
        setCount(Count+1);
    }
    return (
        <>
            <p style={{textAlign:'center'}}>Counter {Count}</p>
            <button onClick={increaseCount}>Click to Increase</button> &nbsp;
            <button onClick={(()=>{ setCount(Count - 1)})}>Click to Decrease</button>
        </>
    )
}
export default Counter;