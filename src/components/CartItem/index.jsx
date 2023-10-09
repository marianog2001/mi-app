import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ game, index }) {

    const {removeFromCart } = useContext(CartContext);

    return (
        <div className="flex w-full" key={index}>
            <div className="flex justify-evenly w-full mx-3">
                <div className="w-96 h-50">
                    <img src={game.imgUrl} alt="" className="bg-main-red px-2.5 object-cover w-full h-auto" />
                </div>
                <div className="w-52 bg-main-red flex flex-col justify-center text-3xl items-center px-5" key={index}>
                    <h3 className="py-4 text-center">{game.title}</h3>
                    <h4 className="text-2xl ">${game.price}</h4>
                    <button onClick={() => removeFromCart(index)} className="mt-2 px-2 text-black rounded-full hover:bg-black hover:text-main-red">X</button>
                </div>
            </div>
        </div>
    )

}

export default CartItem