import Detail from "./Componentes/Detail"
import Item from "./Componentes/Item"
import ItemList from "./Componentes/ItemList"

const ItemDetail = ({detalle}) => {
  return (
    <div>
      {
        detalle.map((product)=>(
          <Detail key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
        ))
      }
    </div>
  )
}

export default ItemDetail