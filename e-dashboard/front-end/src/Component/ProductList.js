import {React, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import './ProductList.css'
const ProductList = ()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() =>{
        let data = await fetch("http://localhost:5000/products",{
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
            }
        })
        data = await data.json();
        //console.log("Updated products state:", data.result);
        setProducts(data.result)
    }

    const deleteProduct = async (getProductId) => {
        console.log(getProductId);
        let data = await fetch(`http://localhost:5000/product/${getProductId}`,{
            method:"delete",
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
            }
        })
        data = await data.json();
        if(data.acknowledged){
            alert("Record Deleted");
            getProducts();
        }else{
            alert("Record not deleted")
        }
        console.log(data)
    }
    //console.log("Updated products state dd:", products);

    const handleSearch =async (e)=>{
        if(e.target.value){
            let data = await fetch(`http://localhost:5000/search/${e.target.value}`,{
                method:"get",
                headers:{
                    authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}` 
                }
            })
            data = await data.json();
            //console.log(data.result);
            setProducts(data.result)
        }else{
            getProducts()
        }
       
    }
    return (
        <>
            <div className="ProductList"> 
            <div className="SeachBox">
            <h2>Product List</h2>
            <input style={{width:"500px", marginLeft:"200px"}}type="text" onChange={handleSearch} className="form-control"/>

            </div>
            <table  className="table table-bordered table-striped mt-3 table-sm">            
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Company</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 
                ? (
                    products.map((product, index) => (
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.name || "-"}</td>
                        <td>{product.price || "-"}</td>
                        <td>{product.category || "-"}</td>
                        <td>{product.company || "-"}</td>
                        <td> 
                            <button className="btn btn-danger btn-sm" onClick={()=>deleteProduct(product._id)}>Delete</button>
                            &nbsp;<Link to={`/update/${product._id}`} className="btn btn-primary btn-sm">Edit</Link>

                           
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="6">No products found.</td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </>
       
    )
}

export default ProductList;