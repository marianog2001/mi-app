import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GenresButtons from "./components/GenresButtons/index.jsx";
import CartView from "./components/CartView/index.jsx";
import { Routes,Route} from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm/index.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>

          <Route path="/cart/checkout" element={<CheckoutForm />}></Route>

          <Route path="/cart" element={<CartView />}></Route>

          <Route path="/games/game/:id" element={<ItemDetailContainer />}></Route>

          <Route path="/games/all" element={<ItemListContainer />}></Route>
          
          <Route path="/games/genres"
            element={
              <>
                <GenresButtons />
                <ItemListContainer />
              </>
            }>
          </Route>

          <Route path="/" element={<ItemListContainer />}></Route>

          <Route path="/games/genres/:genre"
            element={
              <>
                <GenresButtons />
                <ItemListContainer />
              </>
            }>
          </Route>

        </Routes>
        <ToastContainer />
      </CartProvider>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </>
  );
}

export default App;
