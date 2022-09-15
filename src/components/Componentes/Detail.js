import ItemCount from "./ItemCount"

const Detail = ({title, price, image, description}) => {
    return (
      <div className="oneProduct">
        <img width={"200px"} src={image} alt={title}/>
        <h2>{title}</h2>
        <h3 className="data">${price}</h3>
        <h4 className="description">{description}</h4>
        <ItemCount stock={10} />
      </div>
    )
  }

export default Detail