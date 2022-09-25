import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {Link} from "react-router-dom"

const Cart = () => {
    const {cart, addToCart, removeItem} = useContext(CartContext)
  return (
    <div>
        <h2>Carrito</h2>
        {cart.length === 0 ? (
        <div>
          <h2>Carrito vacío</h2>
          <Link to={"/"}>Volver al inicio</Link>
        </div>)
         : 
        (<div>
          {cart.map((item) => (
            <div key={item.id}>
              {/* <img src={item.image} alt={item.title}/> */}
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
              <button onClick={() =>removeItem(item.id)}>Eliminar del carrito</button>
            </div>
        ))}
        </div>)}

    </div>
  )
}

export default Cart