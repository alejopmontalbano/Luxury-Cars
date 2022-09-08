import './App.css';
import NavBar from './components/NavBar.jsx';
import Marcas from './components/Marcas.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {

  return (
    <div>
      <NavBar />
      <Marcas />
      <h1 className='text-center'>Nuestros Autos</h1>
      <ItemListContainer />
      <Footer />
    </div>
  )
}

export default App;
 