import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact' 
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
