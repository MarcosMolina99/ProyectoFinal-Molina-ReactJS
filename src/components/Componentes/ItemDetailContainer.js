import ItemDetail from "./ItemDetail";
// import data from "./mockData";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getFirestore,doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([]);
    const {id} = useParams();
    // const db = getFirestore();

    // const queryDoc = doc(db, "Products", "YJCqegqr1OBZa9lwZtLR");
    // getDoc(queryDoc).then(response =>{console.log(response);})
    // .catch(error => console.log(error));

    const db= getFirestore();

    useEffect(()=> {
        getItem.then((response) =>{
          setProductDetail(response);
        })
        .catch(error => console.log(error));
      }, []);
    
      const getItem = ()=> {
        const queryDoc = doc(db,"Products", id);

        getDoc(queryDoc)
        .then((response)=>{
          setProductDetail({id: response.id, ...response.data()});
        })
        .catch((error)=> console.log(error));
      }
  return (
    <div>
        <ItemDetail detalle={productDetail} />
    </div>
  )
}

export default ItemDetailContainer