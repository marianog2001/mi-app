import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

function CartView() {
    const { cart } = useContext(CartContext);

    return (

        <div className="flex flex-col justify-center mx-5 my-5">
            {cart.length > 0 ? (
                <div>
                    {cart.map((game, index) => (<CartItem game={game} index={index}/>))}

                    
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

