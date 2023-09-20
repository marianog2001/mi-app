import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm";
import { Link } from "react-router-dom";

function CartView() {
    const { cart, removeFromCart } = useContext(CartContext);

    console.log(cart)


    return (

        <div className="flex flex-col justify-center mx-5 my-5">
            {cart.length > 0 ? (
                <div>
                    {cart.map((game, index) => (
                        <div className="flex w-full" key={index}>
                            <div className="flex justify-evenly w-full mx-3">
                                <div className="w-96 h-50">
                            <img src={game.imgUrl} alt="" className="bg-main-red px-2.5 object-cover w-full h-auto" />
                                </div>
                                    <div className="w-52 bg-main-red flex flex-col justify-center text-3xl items-center px-5" key={index}>
                                        <h3 className="py-4 text-center">{game.title}</h3>
                                        <h4 className="text-2xl ">${game.price}</h4>
                                        <button onClick={()=>removeFromCart(index)} className="mt-2 px-2 text-black rounded-full hover:bg-black hover:text-main-red">X</button>
                                    </div>
                            </div>
                        </div>
                    ))}

                    {/* This div will render only if cart.map happens */}
                    <div className="my-5 flex w-full justify-center">
                    <Link to={"/cart/checkout"}><button className="bg-red-500 w-44 h-10 rounded">Go to checkout</button></Link>
                    </div>
                </div>
            ) : (
                <h3 className="font-light text-4xl flex justify-center mt-10">
                    You don't have anything in your cart! yet...
                </h3>
            )}
        </div>
    );

}

export default CartView;

{/* <CheckoutForm />

<img src={game.imgUrl} alt="" className="bg-main-red px-2.5" />
                                    <div className="bg-main-red flex flex-col justify-center text-3xl items-center px-5" key={index}>
                                        <h3 className="py-4">{game.title}</h3>
                                        <h4 className="text-2xl">{game.price}</h4>
                                        <button onClick className="mt-2 px-2 text-black rounded-full hover:bg-black hover:text-main-red">X</button>
                                    </div> */}