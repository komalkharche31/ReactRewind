import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import './nav.css';
  const Nav = ()=>{
    const navigate = useNavigate()
    const auth = localStorage.getItem("user")
    const logout = ()=>{
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <>
        <div>
            {
                auth ? 
                <>
                    <ul className="nav-ul">
                        <li> <Link to="/">Product</Link></li>
                        <li> <Link to="/add">Add Product</Link></li>               
                        <li> <Link to="/profile">Profile </Link></li>                 
                        <li><Link to="/signup" onClick={logout} >logout</Link></li>                             
                    </ul>
                </>:
                <>
                    <ul className="nav-ul">
                        <li><Link to="/login">Login </Link></li>
                        <li><Link to="/signup">Register </Link></li>
                    </ul>
                </>
            }
            
        </div>        
        </>
    )
 }

 export default Nav;