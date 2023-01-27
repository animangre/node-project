import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [userName, setuserName] = useState()
    const router = useNavigate()


    useEffect (() => {
        const dbuser = JSON.parse(localStorage.getItem("userData"))
        if (dbuser){
            setuserName(dbuser)
        }
    },[])
    function logout(){
      localStorage.removeItem("userData")
      localStorage.removeItem("isuserLogin")
      localStorage.removeItem("cartProducts")
      setuserName("")
      toast.success("logout successfull")
    }
    return(
        <div>
            <div id="navbar">
                <div> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="img" /><figcaption>Explore Plus</figcaption></div>
                <div><input type="search" placeholder="Serch for product, Brands and more" /> </div>
                <div> <button onClick={ logout}>Log out </button></div>
                <div><h3>Become a Seller</h3></div>
                <div><h3>More <i class=" fa fa-light fa-angle-down"></i></h3></div>
                <div><h3> <i class=" fa fa-light fa-cart-shopping"></i>cart</h3></div>

           

            </div>
        </div>
    )
}
export default Header