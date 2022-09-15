import ItemCount from "./ItemCount"

const Item = ({title, price, image}) => {
  return (
    <div className="oneProduct">
      <img width={"200px"} src={image} alt={title}/>
      <h2 className="title">{title}</h2>
      <h3 className="data">${price}</h3>
      {/* <ItemCount stock={10}/> */}
      <div className="seeProduct">
        <h3>Ver más</h3>
        {/* <h3>Añadir al carrito</h3> */}
      </div>
    </div>
  )
}

export default Item