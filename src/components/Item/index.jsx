import React from 'react'
import "./Item.css"
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { createTheme } from "@mui/material/styles";

function Item (props) {

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: "#EEEEEE",
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
        <p>{props.title}</p>
        <h5>R$</h5>
      </div>

      <Button
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