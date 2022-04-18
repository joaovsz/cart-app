import React, { useContext } from 'react';
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductContext } from '../context/productContext';


function Cards({img, title, price}){
  const { handleAddItemCart } = useContext(ProductContext)
    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: "#000000",
          },
          secondary: {
            // This is green.A700 as hex.
            main: "#000000",
          },
        },
      });

    return (
      <div className="card">
        <img className="produtos" src={img} />
        <div className="Description">
          <h3>{title}</h3>
          <h4>R$ {price}</h4>

          
            <Button
              onClick={() => handleAddItemCart(img, title, price)}
              disableElevation="true"
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              theme={theme}
            >
              Comprar
            </Button>
            
        </div>
      </div>
    );
}


export default Cards