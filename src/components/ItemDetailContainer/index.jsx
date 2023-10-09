import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const params = useParams();

  const [loading, setLoading] = useState(false)

  const [product, setProduct] = useState([]);

  useEffect(() => {
    setLoading(true)
    const productRef = doc(db, "products", params.id);
    getDoc(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [params.id]);

  return (
    <div>
      {loading ? ( <span className="text-3xl text-center">Loading...</span>  )

        : <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
