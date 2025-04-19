import {React, useState, useEffect} from "react"
import { useParams , useNavigate } from "react-router-dom"
const UpdateProduct = () =>{
    const { id } = useParams(); // Get product ID from URL
    const [product,setProduct] = useState({
        name:"",
        price:"",
        category:"",
        company:""
    })

    const Navigate = useNavigate();

    useEffect(() => {
       getProduct()
    },[])

    const getProduct = async()=>{
        try{
            let data = await fetch(`http://localhost:5000/product/${id}`,{
                method:"get",
                headers:{
                    authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
                }
            })
            data = await data.json();
            if(data){
                setProduct(data)
            }else {
                alert("Product not found");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    useEffect(() => {
        console.log('two => ',product)
     },[product])

    const handleChange = (e) =>{
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const updateProduct = async (e) =>{
        e.preventDefault()
        try {
            console.log(product)
            let data = await fetch('http://localhost:5000/update_product',{
                method:"put",
                body:JSON.stringify(product),
                headers:{
                    "Content-Type":"application/json",
                    "authorization" : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
                }
            })
            data = await data.json();
            if(data.status === "success"){
                alert(data.message)
                Navigate("/")
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.log(error)
       }
    }
    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
                <div className="form-control">
                    <label>Product Name</label>
                    <input className="inputBox" type="text" name="name"  value={product.name} onChange={handleChange}/>
                </div>

                <div className="form-control">
                    <label>Product Price</label>
                    <input className="inputBox" type="text" name="price"  value={product.price} onChange={handleChange}/>
                </div>

                <div className="form-control">
                    <label>Product category</label>
                    <select name="category" value={product.category} onChange={handleChange} className="form-control" >
                        <option value="">-- Select Category --</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Silk">Silk</option>
                    </select>
                </div>

                <div className="form-control">
                    <label>Product company</label>
                    <input className="inputBox" type="text" name="company"  value={product.company} onChange={handleChange}/>
                </div>
                <div><button  className="btn-sm btn btn-info">Update</button></div>
            </form>
        </div>
        
    )
}

export default UpdateProduct;