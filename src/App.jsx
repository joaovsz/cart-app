
import Header from './components/Header/Header.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import CardItems from "./components/CardItems/index.jsx"
import { ProductProvider } from './components/context/productContext'
import Footer from './components/Footer/Footer'
import './App.css'



function App() {


 

return ( <>
  <ProductProvider>
  <Header></Header>
  <Produtos></Produtos>
  <CardItems></CardItems>  
  </ProductProvider>
  <Footer></Footer>
 </>
  )
}

export default App
