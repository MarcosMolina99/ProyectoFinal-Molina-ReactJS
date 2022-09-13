import ItemDetail from "./ItemDetail";
import data from "./Componentes/mockData";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    useEffect(()=> {
        getItem.then((response) =>{
          setProductDetail(response);
        })
        .catch(error => console.log(error));
      }, []);
    
      const getItem = new Promise((resolve,reject)=> {
        setTimeout(()=>{
          resolve(data);
        }, 2000)
      })
  return (
    <div>
        <ItemDetail detalle={productDetail} />
    </div>
  )
}

export default ItemDetailContainer