import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/client";
import { getDocs, collection, query, where, limit, getDoc, doc, addDoc } from "firebase/firestore";


function OrderMaker({name,phone,email}){

    const {cart} = useContext(CartContext)

    const {totalCart} = useContext(CartContext)

    

    const createOrder = () => {
        const order = {
            buyer: {name:"Mariano",phone:"543442122345",email:"correo@dominio.com"},
            products:cart,
            total: totalCart
        }

        const orderCollection = collection(db ,'orders')

        addDoc(orderCollection, order)
        .then(({id}) => console.log(id))
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
        
    )

}

export default OrderMaker