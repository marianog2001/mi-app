import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ItemListContainer() {
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

    if (params.category) {
      filteredProducts = data.filter((element) => {
        return element.category === params.category;
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
            <div className="flex justify-between">
                <button
              className="bg-red-500 rounded w-20"
              onClick={() => agregarAlCarrito(product.id)}
            >
              <span className="">Buy</span>
            </button>
            <Link to={`/item/${product.id}`}>
            <button
              className="bg-red-500 rounded w-20"             
            >
              See Detail
            </button>
            </Link>
            </div>
            
          </div>
        </div>
      );
    });
  }

  return (
    <div className="mt-5">
      {/* <h3 className="text-xl">Items del carrito {carrito.length}</h3> */}

    {/* El codigo comentado abajo es la funcion de categorias dinamicas que mudé a la navbar */}

      {/* <div className="flex justify-between px-40 my-2">
        {categorias.map((category) => {
          return (
            <Link to={`/category/${category}`} className="bg-red-500 rounded w-36 h-7 text-center">
                {category}             
            </Link>
          );
        })}
      </div> */}

      <div className="bg-neutral-700 mx-5 grid grid-cols-3">
        {productRender()}
      </div>
    </div>
  );
}

export default ItemListContainer;
