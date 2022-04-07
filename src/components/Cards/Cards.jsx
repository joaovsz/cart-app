import React from 'react';
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { createTheme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";


function Cards({img, title, price, handleAddItemCart}){

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: "#7bff47",
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

          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => handleAddItemCart(img, title, price)}
              disableElevation="true"
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
              theme={theme}
            >
              Comprar
            </Button>
            <Button
              disableElevation="true"
              size="medium"
              theme={theme}
              variant="outlined"
              endIcon={<RemoveShoppingCartIcon color="action" />}
            >
              Remover
            </Button>
          </Stack>
        </div>
      </div>
    );
}


export default Cards