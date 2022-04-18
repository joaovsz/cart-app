import React, {useContext} from "react";
import "../../styles/Header.css"
import ShoppingCartSharp from '@mui/icons-material/ShoppingCart';
import {ProductContext} from '../context/productContext'

function Header(){
const {cart} = useContext(ProductContext)
//Funcionalidade de soma do valor total de produtos
const totalPrice = cart.reduce((acc, current)=> acc + current.price, 0)
    return (
    <header>
        <img className="Logo" src="./minimalLogo.svg"/>
        <div className="Content">
            <div className="Cart">
        <p>Total</p>
        <h2>R$ {totalPrice.toFixed(2)}</h2>
            </div>
        <ShoppingCartSharp fontSize="large"/>
        </div>
    </header>)
}

export default Header 


