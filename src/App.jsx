import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./components/ItemListContainer";
import DisplayItems from "./components/DisplayItems/index.jsx";
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

    /* <div className="text-center">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda" />
      <DisplayItems />
    </div> */
    <>
      <NavBar />
      <Routes>        
        {/* <Route path="/home/" element={<DisplayItems />}/> */}
        <Route path="/" element={<DisplayItems />}></Route>
        <Route path="/category/:id" element={<DisplayItems />}></Route>
      </Routes>

     
    </>

  );
}


export default App;
