import { useState } from "react"

const ItemCount = ({setCount, count}) => {

    const sacar = () =>{
        if(count === 0){
          return;
        }
        setCount(count-1);
    }
    const agregar = () =>{
        setCount(count+1);
    }
  return (
    <div className="cadaProducto">
        {/* <h2>Producto</h2> */}
        <h3 className="tituloStock">Cantidad de unidades</h3>
        <button onClick={agregar}>+</button>
        <h3>{count}</h3>
        <button onClick={sacar}>-</button>
        {/* <div>
          <button className="btnAgregar">Agregar al carrito</button>
        </div> */}
    </div>
  )
}

export default ItemCount