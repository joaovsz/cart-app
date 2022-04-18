import React from "react";
import "./Produtos.css";
import {boots} from "../../../database/index.jsx"
import Cards from "../Cards/Cards.jsx"
 

  function Produtos() {

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
          />
        
          
        ))}
        </main>
      </div>
    </>
  );
}

export default Produtos;

