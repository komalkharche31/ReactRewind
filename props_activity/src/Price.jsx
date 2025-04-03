import React from "react";
const Price = ({OldPrice, NewPrice})=>{
    let OldPriceStyle = {
        textDecorationLine: "line-through"
    }
    let NewPriceStyle = {
        fontWeight: "bold"
    }

    let NewBottomSecStyle = {
        height:"43px",
        backgroundColor:"#e0c367",   
        borderBottomLeftRadius:"10px", 
        borderBottomRightRadius: "10px"
    };

    return(
        <div style={NewBottomSecStyle}>
            <span style={OldPriceStyle}>{OldPrice}</span>
            &nbsp;
            &nbsp; 
            <span style={NewPriceStyle}>{NewPrice}</span>
        </div>
    )
}
export default Price;