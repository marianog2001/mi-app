import { useContext, useState } from "react"
import { db } from "../../firebase/client"
import { addDoc, collection } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"



function CheckoutForm() {

    const {cart, totalCart} = useContext(CartContext)
      

    const [data, setData] = useState({

        name:'',
        phone:'',
        email:''
    })

    
    const handleChange = (target) => {
        setData({...data,[target.target.name]:target.target.value})
    }

    const createOrder = (e) => {

        e.preventDefault() 

        const order = {
            buyer: data,
            products:cart,
            total: totalCart()
        }

        const orderCollection = collection(db ,'orders')
        console.log(totalCart())
        
        addDoc(orderCollection, order)
        .then(({id}) => console.log(id))
        
    }

    const notify = () => {
        toast("Order done! you'll be contacted",{
          position: "bottom-right",
          autoclose: "2000",
          hideProgressBar: true,
          theme: "dark"
        })}

    return(
        <div className="flex flex-col">
            <h3 className="text-center">Checkout</h3>
        <div className="flex justify-center">
            
            <form onSubmit={createOrder} className="flex flex-col placeholder-neutral-500">
                <label className="py-2.5">
                    <input type="text"
                    name="name"
                    onChange={(target) => handleChange(target)}
                    placeholder="your name"
                    className="text-black placeholder-gray-500" />
                </label>
                <label className="py-2.5">
                    <input type="text"
                    name="phone"
                    
                    onChange={(target) => handleChange(target)}
                    placeholder="your phone"
                    className="text-black placeholder-gray-500" />
                </label>
                <label className="py-2.5">
                    <input type="email"
                    name="email"
                    
                    onChange={(target) => handleChange(target)}
                    placeholder="your email"
                    className="text-black placeholder-gray-500" />
                </label>
                <label className="flex justify-center">
                    <Link to={"/"}><button onClick={()=> notify()} type="submit" className="rounded bg-main-red text-white hover:text-main-red hover:bg-white w-[90%]">Create order</button></Link>
                </label>
            </form>
            
            
        </div>
        </div>
    )
}

export default CheckoutForm