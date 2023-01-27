import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
    const [cartProduct, setcartProduct] = useState()
    const router = useNavigate()



    useEffect (() => {
        const cartStorage = JSON.parse(localStorage.getItem("cartProducts"))
        if(cartStorage){
         setcartProduct(cartStorage)
        }else{
            
            toast.error("no products found")
        }
    },[])
    useEffect(() => {
        const isuserloggined = JSON.parse(localStorage.getItem("userData"))
        if(!isuserloggined){
            router('/login')
        }
    },[])
    function deletepro(e){
        // console.log(e,"element delete")
        // toast.success("working")
        // const filterProduct = []
        // for(var i = 0; i<cartProduct.length; i++){
        // //    console.log(cartProduct[i],"products")
        // if(cartProduct[i].title == e.title){
        //     // console.log(e.title,cartProduct[i].tile,cartProduct[i])
        //     filterProduct.push(cartProduct[i])
        // }
        // }
        // setcartProduct(filterProduct)
        const proProductFromStorage = JSON.parse(localStorage.getItem("cartProducts"))
        console.log(e,"user select")
        // console.log(proProductFromStorage,"abc")
        var newarray = []
        for(var i = 0; i<proProductFromStorage.length; i++){
            console.log(e.title == proProductFromStorage[i].title)
            // console.log(proProductFromStorage[i])
            if(e.title != proProductFromStorage[i].title){
                newarray.push(proProductFromStorage[i])
            }
        }
        localStorage.setItem("cartProducts", JSON.stringify(newarray))
        setcartProduct(newarray)
        toast.success("product delete")
    }
    return(
        <div>
            <Header/>
            <button  onClick={() => router ("/component") }>product page</button>
            <div>
                <div id="topdiv"></div>
            {cartProduct && cartProduct.map((e,i)=> (
            <div  key={i}>
                <div id="bottomdiv">
                <img src={e.image} alt="images" /> 
                <div>{e.description}</div>
                <div>{e.price}</div>
                <div><button onClick={() =>deletepro (e)}>Delete</button></div>
                </div>
             
                

            </div>
        ))} 
                
                
            </div>
        
        </div>
    )
}
export default Cart