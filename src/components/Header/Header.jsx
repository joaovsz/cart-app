import React from "react";
import "../styles/Header.css"
import ShoppingCartSharp from '@mui/icons-material/ShoppingCart';

function Header(){
    return (
    <header>
        <img className="Logo" src="./minimalLogo.svg"/>
        <div className="Content">
            <div className="Cart">
        <span>Produtos</span>
        <h2>R$0,00</h2>
            </div>
        <ShoppingCartSharp fontSize="large"/>
        </div>
    </header>)
}

export default Header 


