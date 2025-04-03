import Product from "./Product"
export default function ProductTab(){
    const  styles = {
        display: "flex", 
        flexWrap: "wrap", 
        alignItem:"center",
        justifyContent:"Center", 
        justifyItem:"center"
    }

    return (
        <div style={styles}>            
            <Product title="Logitech Mx Master" idx={0}/>
            <Product title="Apple Pencil (2nd generation)" idx={1}/>
            <Product title="Zenbranics Zen-Transformer" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
    )
}