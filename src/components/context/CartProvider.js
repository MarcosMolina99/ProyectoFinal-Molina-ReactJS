import { useState } from "react";
import Item from "../Componentes/Item";
import { CartContext } from "./CartContext";

 export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, amount) =>{
        if(isInCart(product.id)){
            alert("El producto ya se encuentra en el carrito");
        }
        else{
            setCart([...cart, {...product, amount}]);
            alert("Producto agregado al carrito");
        }
    }

    const isInCart = (id) =>{
        return cart.some((product) => product.id === id);
    }

    const clear = () =>{setCart([])};

    // const removeItem = (product) =>{};
  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider