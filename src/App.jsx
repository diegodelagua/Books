import './App.css'
import Categories from './components/Categories.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  

  return (
    <>
      <Navbar/>
      <Categories/>
      <ItemListContainer greeting={'Bienvenido a tu espacio de lectura'}/>
    </>
  )
}

export default App
