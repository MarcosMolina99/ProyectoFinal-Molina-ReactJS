import ItemDetail from "./ItemDetail";
import data from "./mockData";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        getItem.then((response) =>{
          setProductDetail(response);
        })
        .catch(error => console.log(error));
      }, []);
    
      const getItem = new Promise((resolve,reject)=> {
        setTimeout(()=>{
          setProductDetail(data.filter(productDetail => productDetail.id === id))
        }, 2000)
      })
  return (
    <div>
        <ItemDetail detalle={productDetail} />
    </div>
  )
}

export default ItemDetailContainer