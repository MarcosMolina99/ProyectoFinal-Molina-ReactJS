import { useState } from "react";
import Item from "../Componentes/Item";
import { CartContext } from "./CartContext";

 export const CartProvider = ({children}) => {
    const [newCart, newSetCart] = useState([]);

    const addToCart = (product, amount) =>{
        if(isInCart(product.id)){
            alert("El producto ya se encuentra en el carrito");
            console.log(product);
        }
        else{
            newSetCart([...newCart, {...product, amount}]);
            alert("Producto agregado al carrito");
            console.log(newCart);
        }
    }

    const isInCart = (id) =>{
        return newCart.some((product) => product.id === id);
    }

    const clear = () =>{newSetCart([])};

    // const removeItem = (product) =>{};
  return (
    <CartContext.Provider value={{newCart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider