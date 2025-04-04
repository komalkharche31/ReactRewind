import React, { useState } from "react";

const LikeButton = () =>{
    let [IsLike,setIsLike] = useState(false);
    let clicked = ()=>{
        setIsLike(!IsLike);
        console.log('breakpoint ',IsLike);
    }
    let styles = {
        color:"red"
    }
    return (
        <>
            <p onClick={clicked}>
            {
                IsLike ? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>
            }             
            </p>            
        </>
    );
}

export default LikeButton;