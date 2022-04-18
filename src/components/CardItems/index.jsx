import React, {useContext} from "react";
import Item from "../Item/index.jsx"
import { ProductContext } from "../context/productContext.jsx";
import "./footer.css"

const CardItems = ( )=>{
    const {cart} = useContext(ProductContext)
    return(
        <div id="cartList">
            <ul>
               {cart.map((cartItem, index)=>(
               <Item 
               key={index}
               img={cartItem.url}
               itemIndex={index}
               name={cartItem.name}
               price={cartItem.price}/>
              ))}
            </ul>
        </div>
    )
}

export default CardItems