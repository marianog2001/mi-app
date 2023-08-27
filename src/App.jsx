import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
        path="/item/:id" 
        element={<ItemDetailContainer />}></Route>

        <Route path="/" element={<ItemListContainer />}></Route>
        
        <Route
          path="/category/:category"
          element={<ItemListContainer />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
