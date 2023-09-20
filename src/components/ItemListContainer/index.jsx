import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemListContainer() {
  

  const params = useParams();

  const {games} = useContext(CartContext)

  const {cart} = useContext(CartContext)

  const {setCart} = useContext(CartContext)

  const [products,setProducts] = useState([])

  const notify = () => {
    toast("Added product!",{
      position: "bottom-right",
      autoclose: "2000",
      hideProgressBar: true,
      theme: "dark"
    })
    
  
  
  }

  const productsRef = collection(db,"products")

  const getProducts = async () => {
    const data = await getDocs(productsRef)
    const webData = data.docs.map( (doc) => ({id:doc.id,...doc.data()}) )
    setProducts(webData)
  }

  useEffect(() => {
    getProducts()
  }, []);

  

  function agregarAlCarrito(id) {
    let itemToAdd = products.find((item) => item.id === id);
    setCart([...cart, itemToAdd]);
  }


  function productRender() {
    let filteredProducts = [...products];
    if (params.genre) {
      let targetGenre = params.genre.toLowerCase()
      filteredProducts = products.filter((element) => {
        let genres = ((element.genre).split(",")).map(genre => genre.trim().toLowerCase())
        console.log(genres)
        return (genres.includes(targetGenre))
      });
    }

    return filteredProducts.map((product) => {
      return (
        <div
          className="flex flex-col self-center justify-center h-3/4 px-5"
          key={product.id}
        >
          <img
            className="h-4/5 aspect-video object-cover"
            src={product.imgUrl}
            alt={product.description}
          />
          <div className="flex-col">
            <h3 className="">{product.title}</h3>
            <h4 className="flex-end">${product.price}</h4>
            <div className="flex justify-between">
                <button
              className="bg-red-500 rounded w-20"
              onClick={() => {agregarAlCarrito(product.id);
                notify()}}    //HACER
            >
              <span className="">Buy</span>
            </button>
            <Link to={`/games/game/${product.id}`}>
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
      <div className="bg-neutral-700 mx-5 grid grid-cols-3 border-2 border-main-red ">
        {productRender()}
      </div>
    </div>
  );
}

export default ItemListContainer;
