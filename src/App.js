import './App.css';
import NavBar from './components/NavBar.jsx';
import Marcas from './components/Marcas.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


function App() {

  return (
    <div>
      <NavBar />
      <Marcas />
      <h1 className='text-center'>Nuestros Autos</h1>
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  )
}

export default App;
 