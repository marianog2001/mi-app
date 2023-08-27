import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="h-screen flex flex-col self-center mt-5">
      <h3 className="text-3xl text-center ">{product.title}</h3>
      <img className="h-3/4 object-contain" src={product.image} alt={`image of ${product.title}`} />
      <h4 className="font-bold text-center text-3xl">${product.price}</h4>
      <button className="bg-red-500 rounded w-20 justify-center self-center flex">Buy</button>
    </div>
  );
}

export default ItemDetailContainer
