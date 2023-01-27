import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Style.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Header from "./Header";

const Component = () => {
    const [movies , setmovies] = useState()
    const router = useNavigate()

    useEffect (() => {
       async function gettingData () {
            const {data} = await axios.get("https://fakestoreapi.com/products")
            // console.log(data , "data is here")
            setmovies(data)
        }
        gettingData()
    },[])
    function addTocart (e){
        //  console.log(e)
        //  var profromstorage = []
         const profromstorage = JSON.parse(localStorage.getItem("cartProducts")) || [] ;
          profromstorage.push(e);
         localStorage.setItem("cartProducts", JSON.stringify(profromstorage))
         toast.success("product added to cart")
    }
    function addTowish(e){
        const productFromWish = JSON.parse(localStorage.getItem("wishlistProduct")) || [];
        productFromWish.push(e)
        localStorage.setItem("wishlistProduct", JSON.stringify(productFromWish))
        toast.success("product added wishlist")



    }
   return(
    <div>
        <Header/>
        
        <button onClick={()=> router("/cart")}>cart</button>
        {/* <button onClick={()=> addTowish(e)}>wishlist</button> */}
        <div className="maindiv">
            <div className="leftdiv">filter</div>
            <div className="rightdiv">
            {movies && movies.map((e,i) =>(
            <div id="inrightelement" key={i}>
             
               <div><img src={e.image} alt="img" /></div> 
               <div><h3>{e.category}</h3></div> 
                <div><p>{e.title}</p></div>
                <div><p>Price:{e.price}.Rs</p></div>
                <div  onClick={()=> addTocart(e)}><button>Buy</button></div>
                <div> <button onClick={()=> addTowish(e)}>wishlist</button></div>
                
            
            </div>
        ))}
            </div>
        </div>
       
    </div>
   )
}
export default Component