import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    <div className='text-center'>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a la tienda'/>
    </div>
  );
}

export default App;
