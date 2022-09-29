import Detail from "./Detail"
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {getFirestore} from "firebase/firestore"

const ItemDetail = ({detalle}) => {
  const [count, setCount] = useState(0);
  const {addToCart} = useContext(CartContext);
  const [button, setButton] = useState("Agregar al carrito");

  function buttonText(){
    setButton("Ir al carrito");
  }


  function onAdd(detalle){
    addToCart(detalle, count)
  }

  function buttonClicked(detalle){
    buttonText();
    onAdd(detalle);
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
      <button className="toCart" onClick={()=> buttonClicked(detalle) }>{button}</button>
    </div>
  )
}

export default ItemDetail