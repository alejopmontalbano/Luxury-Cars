import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Marcas from './components/Marcas.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';


function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Marcas />}/>
          <Route exact path='/marca/:marcaAuto' element={<ItemListContainer />}/>
          <Route exact path='/auto/:id' element={<ItemDetailContainer />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
 