import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

function ItemDetail({product}) {

    const { cart } = useContext(CartContext)

    const { setCart } = useContext(CartContext)

    return(
        <div className="my-10 mx-16 flex-col justify-evenly items-center align-middle">
        <h1 className="text-4xl text-center bg-main-red text-black">{product?.title}</h1>
        <div className="flex items-center align-middle py-10 bg-main-red">
          <img src={product?.imgUrl} alt="" className="px-5" />
          <div className="flex-col items-center align-middle">
            <p className="font-light text-2xl text-black">{product?.desc}</p>
            <h3 className="text-2xl pt-5 font-light text-black">Tags: {product?.genre}</h3>
          </div>
        </div>
        <div className="px-5 flex bg-main-red justify-between">
          <h3 className="pt-4 text-xl text-black">Available now on {product?.platform}</h3>
          <button onClick={() => setCart([...cart, product])} className="hover:text-white mb-5 pb-5 pe-5 text-4xl underline text-black">Add to cart!</button>
        </div>
        <div>
        </div>
      </div>
    )
}

export default ItemDetail