import ItemCount from "./ItemCount"
import data from "./mockData";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

    useEffect(()=> {
      getItems.then((response) =>{
        setProductList(response);
      })
      .catch(error => console.log(error));
    }, []);
  const stock=10;

  const getItems = new Promise((resolve,reject)=> {
    setTimeout(()=>{
      resolve(data);
    }, 2000)
  })
  return (
    <div>
     <ItemCount stock={stock} />
    </div>
    
    
  )
}

export default ItemListContainer