import React from "react";
import "../styles/Produtos.css";
import {boots} from "../../../database/index.jsx"
import Cards from "../Cards/Cards.jsx"
 

  function Produtos( {handleAddItemCart}) {

  return (
    <>
      <div className="Container">
        <main>
          
        {boots.map((boots, index) => (
          
            <Cards 
            key={index}
          title={boots.name} 
          price={boots.price} 
          img={boots.url}
          handleAddItemCart={handleAddItemCart} />
        
          
        ))}
        </main>
      </div>
    </>
  );
}

export default Produtos;

{/* <Cards price={[ 799.00]} name={["Air Max 97 SE Masculino"]}> </Cards>
  <Cards price={[ 799.00]} name={["Air Max 97 SE Masculino"]}> </Cards>
  <Cards price={[ 799.00]} name={["Air Max 97 SE Masculino"]}> </Cards> */}