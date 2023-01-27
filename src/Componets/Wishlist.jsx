import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Wishlist = () => {
    const [wishlistProducts , setwishlistProducts] = useState()


    useEffect (() => {
      const  productFromLocalstorage = JSON.parse(localStorage.getItem("wishlistProduct"))
      setwishlistProducts(productFromLocalstorage)

    },[])
    function addTocart(e) {
        // console.log(e,"e pro")
        const dbarray = JSON.parse(localStorage.getItem("cartProducts")) || []
        dbarray.push(e)
        localStorage.setItem("cartProducts" , JSON.stringify(dbarray))
        const  productFromLocalstorage = JSON.parse(localStorage.getItem("wishlistProduct"))
        var newarray = []
        for(var i = 0; i<productFromLocalstorage.length; i++){
            if(e.title != productFromLocalstorage[i].title){
                newarray.push(productFromLocalstorage[i])
            }
        }
        localStorage.setItem("wishlistProduct", JSON.stringify(newarray))
        setwishlistProducts(newarray)
        toast.success("product added to cart !")
        
    }
    





    return(
        <div>
            {wishlistProducts && wishlistProducts.map((e,i)=> (
                <div key={i}>
                <h1>{e.title}</h1>
                {/* <img src={e.image} alt="images" /> */}
                <button onClick={()=> addTocart(e)}>add to cart</button>
                
                </div>
            ))}
        </div>
    )
}
export default Wishlist