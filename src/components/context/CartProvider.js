import { useState } from "react";
import Item from "../Componentes/Item";
import { CartContext } from "./CartContext";

 export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, amount) =>{
        if(isInCart(product.id)){
            alert("El producto ya se encuentra en el carrito");
            cart.push(product);
            console.log(cart);
        }
        else{
            setCart([...cart, {...product, amount}]);
            cart.push(product,amount);
            alert("Producto agregado al carrito");
            console.log(cart);
        }
    }


    const isInCart = (id) =>{
        return cart.some((product) => product.id === id);
        
    }

    const clear = () =>{setCart([])};

    const removeItem = (productId) =>{
        let newArray = [];
        cart.forEach((product) =>{
            if(product.id ===productId){
                console.log(product);
            } else{
                newArray.push(product);
            }
        })
        setCart(newArray);
    };


    // const addToCart = (item,quantity) =>{
    //     const isInCart = cart.find((i) =>i.item.id === item.id)

    //     if(isInCart){
    //         isInCart.quantity += quantity;
    //         setCart([...cart]);
    //         console.log(cart);
    //     } else{
    //         setCart([...cart, {item,quantity}]);
    //         console.log(cart);
    //     }
    // }
  return (
    <CartContext.Provider value={{cart, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider