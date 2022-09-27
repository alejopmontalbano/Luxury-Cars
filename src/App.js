import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Marcas from './components/Marcas.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Sucursales from './components/Sucursales';
import Contactanos from './components/Contáctanos';
import Provider from './components/context/Context';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import Inicio from './components/Inicio';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={'/'} element={<Inicio />}/>
          <Route exact path={'/marcas'} element={<Marcas />}/>
          <Route exact path={'/marca/:marcaAuto'} element={<ItemListContainer />}/>
          <Route exact path={'/auto/:id'} element={<ItemDetailContainer />}/>
          <Route exact path={'/carrito'} element={<Carrito />}/>
          <Route exact path={'/contactanos'} element={<Contactanos />}/>
          <Route exact path={'/sucursales'} element={<Sucursales />}/>
          <Route exact path={'/checkout'} element={<Checkout />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
 