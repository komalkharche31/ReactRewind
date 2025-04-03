import React from "react";
import { Product } from "./Product";

export default function ProductTab(){
    const option = ["Fast", "Reliable"];
    //const option2 = {a:"Hi-Tech", b:"Durable", c:"Fast"}
    return(
        <>
            <Product title="Laptop" price={45000} features = {option} />
            <Product title="Mobile" price={30000}/>
            <Product title="Pen" price={10}/>
        </>
    )

}