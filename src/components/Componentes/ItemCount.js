import { useState } from "react"

const ItemCount = ({stock}) => {
    const [BotonContador, setBotonContador] = useState(1);

    const sacar = () =>{
        BotonContador > 0 ? setBotonContador(BotonContador - 1) : alert("Se alcanzó el mínimo");
    }
    const agregar = () =>{
        BotonContador <= stock - 1 ? setBotonContador(BotonContador + 1) : alert("Se alcanzó el máximo del stock");
    }
  return (
    <div className="cadaProducto">
        {/* <h2>Producto</h2> */}
        <h3 className="tituloStock">El stock máximo es de: {stock}</h3>
        <button onClick={agregar}>+</button>
        <h3>{BotonContador}</h3>
        <button onClick={sacar}>-</button>
        <div>
          <button className="btnAgregar">Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount