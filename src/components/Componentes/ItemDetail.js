import Detail from "./Detail"
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({detalle}) => {
  const [count, setCount] = useState(0);

  const controlClick = () =>{
    console.log(count);
  }
  return (
    <div>
      {
        detalle.map((product)=>(
          <Detail key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
        ))
        
      }
      <ItemCount setCount={setCount} count={count}/>
      <Link className="toCart" to={"/cart"} onClick={controlClick}>Ir al carrito</Link>
    </div>
  )
}

export default ItemDetail