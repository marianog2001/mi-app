import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartComponentContext } from "./context/CartContext/index.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/index.jsx";
import GenresButtons from "./components/GenresButtons/index.jsx";
import CartView from "./components/CartView/index.jsx";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm/index.jsx";

function App() {
  return (
    <>
      <CartComponentContext>
        <NavBar />
        <Routes>
          <Route path="/cart/checkout" element={<CheckoutForm />}></Route>
          <Route path="/cart" element={<CartView />}></Route>
          <Route
            path="/games/game/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/games/all" element={<ItemListContainer />}></Route>
          <Route
            path="/games/genres"
            element={
              <>
                <GenresButtons />
                <ItemListContainer />
              </>
            }
          ></Route>

          <Route path="/" element={<Home />}></Route>
          <Route
            path="/games/genres/:genre"
            element={
              <>
                <GenresButtons />
                <ItemListContainer />
              </>
            }
          ></Route>
        </Routes>
        <ToastContainer />
      </CartComponentContext>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </>
  );
}

export default App;
