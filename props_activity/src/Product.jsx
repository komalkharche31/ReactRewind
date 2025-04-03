import Price from './Price';
import './Product.css';
const Product = ({title,idx})=>{
    let OldPrice = ["12,999","9999","11999","7999"];
    let NewPrice = ["9,999","7999","10999","6999"];
    let Description = [
        ["8,000 Dpi","5 progammable button"],
        ["Intuitive Surface","Designed for iPad Pro"],
        ["Designed for iPad Pro","5 progammable button"],
        ["Wireless Mouse","Intuitive Surface"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>        
            <p>{Description[idx][1]}</p>        
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
        </div>
    )
}
export default Product;