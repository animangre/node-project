import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const Register = () => {
       const [userData , setuserData] = useState()
       const router = useNavigate()

       useEffect(() => {
         console.log("userdata updated")
         if(userData) {
         const storeuserData = JSON.stringify(userData)
         localStorage.setItem("userData" , storeuserData)
         router('/login')
         toast.success ("submitted")
        
         }
       },[userData])

       useEffect (() => {
        const localStorageData = JSON.parse(localStorage.getItem("isuserLogin"))
        if(localStorageData){
            console.log("user logged is already, directing to home")
            // router('/home')
        }
     },[])

       function submitHandle  (e)  {
        e.preventDefault()
        //  alert("submitted")
         setuserData({
            name:"aniket",
            email:"abc@.com",
            password:"123"
         })
       }
       console.log(userData , "userdata here")

    return(
        <form onSubmit={submitHandle} className="container">
             <div className="header">
                 <h1>Registration Form</h1>
            </div>
             <div>
                 <input type="text" placeholder="Enter your name" />
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
             <a href="./login">Already User ? Login</a>
         </form>
    )
}
export default Register