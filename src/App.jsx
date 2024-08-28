import './App.css';
import Navbar from './components/Navigation/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useState } from 'react';
import Search from './Pages/Search/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const[showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart setShowLogin={setShowLogin}/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  )
}

export default App
