import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import CardItems from "./components/CardItems/index.jsx"
import { ProductProvider, ProductContext  } from './components/context/productContext'

import './App.css'



function App() {


 

return ( <>
  <ProductProvider>
  <Header></Header>
  <Produtos></Produtos>
  <CardItems></CardItems>  
  </ProductProvider>
 </>
  )
}

export default App
