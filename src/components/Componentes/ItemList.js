import Item from "./Item"
import data from "./mockData"

const ItemList = ({detalle}) => {
  return (
    <div>
      {
        lista.map((product)=>(
          <Item key={product.id} title={product.title} price={product.price} image={product.image}/>
        ))
      }
    </div>
  )
}

export default ItemList