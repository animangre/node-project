import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Header from "./Header";

const Home = () => {
    const[name , setName] = useState()
    const router = useNavigate()


    useEffect(() => {
     var userData = JSON.parse(localStorage.getItem("userData"))
     console.log(userData,"userdata here")
     if(userData){
        setName(userData.name)
        console.log(userData.name,"userdata.name here")
     } else{
        router('/login')
     }
    },[])

   // async function fakeData () {
   //      const {data} = await axios.get("https://fakestoreapi.com/products")
   //      console.log(data , "data is here")
   //      //  .then((data) => {
   //      //    data.json()
        
   //      //  }).then((data) => {
   //      //     console.log(data)
   //      //      })
   //      //  .catch((error) => {
   //      //     console.log(error)
   //      //  })
         

   //      }    
   //      fakeData()

    return(
        <div>
         <Header/>
         <div id="homeele">
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="1" />
           
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="2" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="3" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="4" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="5" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="6" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="7" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="8" />
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="9" />
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="10" />

         </div>
           <button onClick={()=>router('/component')} >click</button>
           <button onClick={()=>router('/wishlist')}>wishlist</button>
        </div>
    )
}
export default Home