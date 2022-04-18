import React, {useContext} from "react";
import "../../styles/Header.css"
import ShoppingCartSharp from '@mui/icons-material/ShoppingCart';
import {ProductContext} from '../context/productContext'

function Header(){
  
const {cart} = useContext(ProductContext)

    return (
    <header>
        <img className="Logo" src="./minimalLogo.svg"/>
        <div className="Content">
            <div className="Cart">
        <span>Produtos</span>
        <h2>{}</h2>
            </div>
        <ShoppingCartSharp fontSize="large"/>
        </div>
    </header>)
}

export default Header 


