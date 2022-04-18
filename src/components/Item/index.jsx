import React, { useContext } from 'react'
import "./Item.css"
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { createTheme } from "@mui/material/styles";
import { ProductContext } from '../context/productContext';

function Item ({img, name, price, itemIndex}) {
const {removeItemCart} = useContext(ProductContext)
    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: "#182717",
          },
          secondary: {
            // This is green.A700 as hex.
            main: "#000000",
          },
        },
      });
  return (
    <div className="CartItem ">
      <div className="product">
        <img src={img} />
        <p>{name}</p>
        <h5>R${price}</h5>
      </div>

      <Button
      onClick={()=> removeItemCart(itemIndex)}
        className="remove"
        theme={theme}
        variant="outlined"
        endIcon={<RemoveShoppingCartIcon color="action" />}
      >
        Remover
      </Button>
    </div>
  );
}
export default Item