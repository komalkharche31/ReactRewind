import React from 'react'
const MsgBox = ({userName, TextColor})=>{
    const styles = {color : TextColor}
    return (
        <>
        <h1 style={styles}>
            Hello {userName}
        </h1>
        </>
    )
}

export default MsgBox;