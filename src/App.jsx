import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import CardItems from "./components/CardItems/index.jsx"
import './App.css'


function App() {

  const [cart, setCart] = useState([])

function handleAddItemCart(url, name, price){
  const itemObject =  {url, name, price};
  // Spread operator para possibilitar a adição 
  // de um novo objeto no array, impede a substituição do objeto anterior
  setCart([...cart, itemObject])

}

return ( <>
  <Header></Header>
  <Produtos handleAddItemCart={handleAddItemCart} cart={cart}></Produtos>
 <CardItems cart={cart} ></CardItems> 
 </>
  )
}

export default App
