import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { getDocs, collection, query, where } from "firebase/firestore";

import ItemList from "../ItemList";

function ItemListContainer() {
  
  const params = useParams();

  const [loading,setLoading] = useState(false)

  const [products,setProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    const productsRef = params.genre 
    ? query(collection(db,"products"), where("genre","array-contains",params.genre))
    : collection(db,"products")

    getDocs(productsRef)
      .then(resp => {
        const adaptedProducts = resp.docs.map ( (doc) => ({id:doc.id,...doc.data()}))
        setProducts(adaptedProducts)
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))

  }, [params]);

  return (
    <div className="mt-5">

        {loading ? (<span className="text-3xl">Loading...</span>) : <ItemList products={products}/>}   
    </div>
  );
}

export default ItemListContainer;

