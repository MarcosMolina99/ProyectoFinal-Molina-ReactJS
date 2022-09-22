import ItemCount from "./ItemCount"
import data from "./mockData";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams();

  const getItems = async()=> {
    if(categoryName){
      const respuesta = await data.filter((product)=> product.category === categoryName);
      setProductList(respuesta);
    }else{
      const respuesta = await data;
      setProductList(respuesta);
    }
  }

  // useEffect(()=> {
  //   getItems.then((response) =>{
  //     setProductList(response);
  //   })
  //   .catch(error => console.log(error));
  // }, [categoryName]);

  useEffect(()=> {
    getItems();
  }, [categoryName]);

  return (
    <div>
      <ul className="filters">
        <Link to={"/Category/Remera"}>
          <li className="filter">Remeras deportivas</li>
        </Link>
        
        <Link to={"/Category/Pantalon"}>
          <li className="filter">Pantalones deportivos</li>
        </Link>
        
        <Link to={"/Category/Zapatillas"}>
          <li className="filter">Zapatillas deportivas</li>
        </Link>
        
        <Link to={"/Category/Conjunto"}>
          <li className="filter">Conjuntos deportivos</li>
        </Link>
        
      </ul>

      <ul>
        <li className="cartLink"><Link className="otherCartLink" to={"/cart"}>Ver carrito</Link></li>
      </ul>
      <div className="divProducts">
        <ItemList lista={productList}/>
      </div>
      {/* <div>
        <ItemDetailContainer />
      </div> */}
    </div>
    
    
  )
}

export default ItemListContainer