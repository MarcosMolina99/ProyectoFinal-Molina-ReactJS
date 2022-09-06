import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {
  const stock=10;
  return (
    <div>
      <h1 className="saludo">{greeting}</h1>
     
     <ItemCount stock={stock} />
    </div>
    
    
  )
}

export default ItemListContainer