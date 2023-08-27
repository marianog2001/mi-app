import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DisplayItems() {
  const [data, setData] = useState([]);

  const [carrito, setCarrito] = useState([]);

  const [categorias, setCategorias] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, [params]);

  //no es necesario actualizar el fetch de categorías
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategorias(categories);
      });
  }, []);

  function agregarAlCarrito(id) {
    let itemToAdd = data.find((item) => item.id === id);
    setCarrito([...carrito, itemToAdd]);
  }

  function productRender() {
    let filteredProducts = [...data];

    if (params.id) {
      filteredProducts = data.filter((element) => {
        return element.category === params.id;
      });
    }

    return filteredProducts.map((product) => {
      return (
        <div
          className="flex flex-col self-center justify-center h-3/4"
          key={product.id}
        >
          <img
            className="h-4/5 object-contain"
            src={product.image}
            alt={product.description}
          />
          <div className="flex-col ps-10">
            <h3 className="">{product.title}</h3>
            <h4 className="flex-end">${product.price}</h4>
            <button
              className="bg-red-500 rounded w-20"
              onClick={() => agregarAlCarrito(product.id)}
            >
              <span className="">Buy</span>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="">
      <h3 className="text-xl">Items del carrito {carrito.length}</h3>

      <div className="flex justify-between px-40">
        {categorias.map((category) => {
          return (
            <Link to={`/category/${category}`} className="bg-red-800">
              {category}
            </Link>
          );
        })}
      </div>

      <div className="bg-neutral-700 mx-5 grid grid-cols-3">
        {productRender()}
      </div>
    </div>
  );
}

export default DisplayItems;

/* 
<div className="flex-col self-center w-[33%]" key={product.id}>
  <img className="h-[100%]" src={product.image} alt={product.description}/>
  <h3>{product.title}</h3>
  <h4>${product.price}</h4>
  <button className="" onClick={() => agregarAlCarrito(product.id)}> Buy </button>
</div> 
*/
