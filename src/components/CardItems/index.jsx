import React from "react";
import Item from "../Item/index.jsx"

const CardItems = ({cart})=>{
    return(
        <footer>
            <ul>
               {cart.map((cartItem, index)=>(
               <Item 
               key={index}/>
              ))}
            </ul>
        </footer>
    )
}

export default CardItems