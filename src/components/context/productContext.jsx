import {useState, createContext} from 'react'

export const ProductContext = createContext()

export function ProductProvider(props){
    const [cart, setCart] = useState([])

function handleAddItemCart(url, name, price){
  const itemObject =  {url, name, price};
  // Spread operator para possibilitar a adição 
  // de um novo objeto no array, impede a substituição do objeto anterior
  setCart([...cart, itemObject])
    
}

function removeItemCart(key){
    const filteredCart = cart.filter((cartItem)=>cart.indexOf(cartItem)!==key)
    setCart(filteredCart)
}

    return (
        <ProductContext.Provider value={{ cart, handleAddItemCart, removeItemCart}}>
            {props.children}
        </ProductContext.Provider>
    )
}