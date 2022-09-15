import Item from "./Item"
import data from "./mockData"
import {Link} from "react-router-dom"

const ItemList = ({lista}) => {
  return (
    <div className="Products">
      {
        lista.map((product)=>(
          <Link key={product.id} to={"/detail/" + product.id}>
            <Item title={product.title} price={product.price} image={product.image}/>
          </Link>
        ))
      }
    </div>
  )
}

export default ItemList