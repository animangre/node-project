import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () =>{
     const [userLogin , setuserLogin] = useState()
     const router = useNavigate()
     console.log(userLogin , "userlogin here")

     useEffect (() => {
       if(userLogin){
        const resisterData = JSON.parse( localStorage.getItem("userData"))
        if(resisterData){
          if(resisterData.email === userLogin.email && resisterData.password === userLogin.password){
            localStorage.setItem("isuserLogin", "true")
            router('/home')
             toast.success("login successfull")
          } else {
            toast.error("wrong information")
          }
        } else{
        toast.error("user not found, resister")
        }
       }
     },[userLogin])

     useEffect (() => {
        const localStorageData = JSON.parse(localStorage.getItem("isuserLogin"))
        if(localStorageData){
            console.log("user logged is already, directing to home")
            // router('/home')
        }
     },[])

        const loginHandle = (e)=> {
        e.preventDefault()
        // alert("login working")
        setuserLogin({
            email:"abc@.com",
            password:"123"
        })

    }
    return(
        <form onSubmit={loginHandle} className="container">
             <div className="header">
                 <h1>Login Form</h1>
            </div>
            <div>
                 <input type="text" placeholder="Enter your mail" />
             </div>
            
             <div>
                 <input type="password" placeholder="Enter your password" />
             </div>
             <div>
                 <button type="submit">Submit</button>
             </div>
             <a href="./register">Not user ? Register Here</a>
         </form>
    )
}
export default Login