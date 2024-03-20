import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import ItemListContainerComponent from './components/itemlistcontainer/ItemListContainerComponent';
import ContactComponent from './components/contact/ContactComponent';
import NavBarComponent from './components/navigation/NavBarComponent';
import CartwidgetComponent from './components/cartwidget/CartwidgetComponent';
import FooterComponent from './components/footer/FooterComponent';
import ItemDetailContainerComponent from './components/itemdetail/ItemDetailContainerComponent';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>} />
          <Route exact path="/products" element={<ItemListContainerComponent/>} />
          <Route exact path="/product/:prodId" element={<ItemDetailContainerComponent />} />
          <Route exact path="/contact" element={<ContactComponent />}/>
          <Route exact path="/cart" element ={<CartwidgetComponent/>}/>
          <Route exact path="/categoria/:categoria" element ={<ItemListContainerComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
