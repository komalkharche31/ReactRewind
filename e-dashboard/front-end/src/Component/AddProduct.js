import { React ,useState} from "react"
import { useNavigate } from "react-router-dom"
import './AddProduct.css'
const AddProduct = () =>{
    const [error,setError] = useState(false)

    const  [product,setProduct] = useState({
        name:"",
        price:"",
        category:"Electronics", //default
        company:"",
        userId: JSON.parse(localStorage.getItem("user"))._id
    })
    const Navigate = useNavigate()
    const handleOnChange = (e)=>{
        console.log(product.name)  
        return setProduct({...product,[e.target.name] : e.target.value})
              
    }
    const SaveProduct = async (e)=>{
        e.preventDefault()
        console.log(product.name)
        if(!product.name || !product.price || !product.category || !product.company || !product.userId){
            setError(true);
            return false;
        }

        const response = await fetch('http://localhost:5000/add-product',{
            method:"post",
            body:JSON.stringify({...product}),
            headers:{
                "Content-Type":"application/json",
                "authorization" : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
            }
        })
        const result = await response.json();
        if(result){
            alert("Record Saved")
            Navigate('/')
        }
            
    }

    return (
        <div className="ProductDiv">
            <h1>Product Component</h1>
            <form onSubmit={SaveProduct}>
                <div>
                    <label className="LabelHeading" >Name</label>
                    <input className="inputBox" type="text" name="name" placeholder="Enter Product Name" onChange={handleOnChange}/>
                    {  error && !product.name && <span className="InvalidInput">Please Enter product Name</span>}
                </div>
              
                <div>
                    <label className="LabelHeading" >Category</label>
                    <select className="inputBox" name="category" value={product.category} onChange={handleOnChange}>
                        <option value="Electronics">Electronics</option>
                        <option value="Hardware" >Hardware</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Silk">Silk</option>
                    </select>
                    {  error && !product.category && <span className="InvalidInput">Please Enter product category</span>}
                

                </div>
                <div>
                    <label className="LabelHeading" >Price</label>
                    <input className="inputBox" type="text" name="price" placeholder="Enter Product Price" onChange={handleOnChange} />            
                    {  error && !product.price && <span className="InvalidInput">Please Enter product price</span>}
                </div>
                <div>
                    <label className="LabelHeading" >Company</label>
                    <input className="inputBox" type="text" name="company" placeholder="Enter Product Company" onChange={handleOnChange} />
                    {  error && !product.company && <span className="InvalidInput">Please Enter product company</span>}
                </div>                
                <button className="ProductSaveBtn" onClick={SaveProduct}>Add Product</button> 
            </form>                      
        </div>
    )
}
export default AddProduct;