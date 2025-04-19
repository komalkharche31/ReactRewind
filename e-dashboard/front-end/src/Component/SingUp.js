import {React, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom"
import './Signup.css'
const SignUp = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            Navigate("/")
        }
    },[])
    const collectData = async()=>{
       // console.log(name,email,password);
        try{
            const response = await fetch("http://localhost:5000/register",{
                method:"post",
                body:JSON.stringify({name,email,password}),
                headers:{                    
                    "Content-Type" : "application/json"
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json(); 
            // Save to localStorage
            localStorage.setItem("user", JSON.stringify(data.result));
            localStorage.setItem("token", JSON.stringify(data.token));
            Navigate('/')
        }catch (error){
            console.error('Error fetching user:', error.message);
        }  
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="inputBox" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="inputBox" type="text" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password"/>
            <button className="RegisterBtn" type="button" onClick={collectData}>Register</button>
        </div>
    )
}

export default SignUp;