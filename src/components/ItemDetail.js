import Item from "./Componentes/Item"
import ItemList from "./Componentes/ItemList"

const ItemDetail = (detalle) => {
  return (
    <div>
        {detalle.filter(product => product.price>3500).map(myProduct =>{
            <><h3>{myProduct.title}</h3><h3>{myProduct.description}</h3><h3>{myProduct.image}</h3><h3>{myProduct.price}</h3></>
        })}
    </div>
  )
}

export default ItemDetail