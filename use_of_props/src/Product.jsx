import React from 'react'
import './Product.css'
export const Product = ({title,price = 1,features}) => {
    const isDiscount = price && price > 30000;
    const styles = { backgroundColor : isDiscount ? "pink" : ""}
  return (
    <>      
        <div className='Product' style={styles}>
            <h1>{title}</h1>           
            {isDiscount ? <p>Discount of 5%</p> : null}
            <p>
                {
                    features && features.map((value)=>(
                        <li><span>{value}</span></li>
                    ))
                }
            </p>
            <h2>{price}</h2>       
        </div>
    </>
  )
}
