import Image from "./CartImage.png"
const CartWidget = () => {
  return (
    <a className="hiperVinculoCarrito" href="#">
      <img className="CartImage" src={Image} alt='CartWidget'/>
    </a>
  )
}

export default CartWidget;