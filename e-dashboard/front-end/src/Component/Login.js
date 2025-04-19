import {React, useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import './login.css'
const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            Navigate("/")
        }
    },[])
    const handleLogin = async ()=>{
        if(email && password){
            const response = await fetch("http://localhost:5000/login",{
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            let data = await response.json();
            if(data.status === "success"){
                localStorage.setItem("user", JSON.stringify(data.result));
                localStorage.setItem("token", JSON.stringify(data.token));
                Navigate('/')
            }else{               
               alert("Record Not Found")
            }
        }else{
            alert("Please enter email and password");   
        }
        
    }
    return (
        <>
        <div className="LoginDiv">
            <h1>Login</h1>
            <input className="inputBox" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="LoginBtn" onClick={handleLogin}>Login</button>
        </div>
        </>
    )
}


export default Login;