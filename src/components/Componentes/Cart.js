import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cart, addToCart} = useContext(CartContext)
  return (
    <div>
        <h2>Carrito</h2>
        {/* {cart.map((product) => (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
            </div>
        ))} */}
    </div>
  )
}

export default Cart