import Detail from "./Detail"
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({detalle}) => {
  const [count, setCount] = useState(0);
  const {addToCart} = useContext(CartContext);

  function onAdd(detalle){
    addToCart(detalle, count)
  }
  
  return (
    <div>
      <Link className="goBack" to={"/"}>Inicio</Link>
      {
        detalle.map((product)=>(
          <Detail key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
        ))
        
      }
      <ItemCount setCount={setCount} count={count}/>
      <button className="toCart" onClick={()=> onAdd(detalle)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail