import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const[link, setLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); 
  const{totalCartAmount} = useContext(StoreContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <div className='Navbar'>
    <Link to='/'><img className="logo" src={assets.TomatoLogo} alt='img'/></Link>
    <ul className='nav-menu'>
      <Link to='/' onClick={()=> {setLink("Home")}} className = {link === "Home" ? "active" : ""}>Home</Link>
      <a href="#exploreSection" onClick={()=> {setLink("Menu")}} className = {link === "Menu" ? "active" : ""}>Menu</a>
      <a href="#AppDowloadSection" onClick={()=> {setLink("Mobile-app")}} className = {link === "Mobile-app" ? "active" : ""}>Mobile-app</a>
      <a href="#FooterSection" onClick={()=> {setLink("Contact us")}} className = {link === "Contact us" ? "active" : ""}>Contact us</a>
    </ul>
    <div className='navbar-right'>
      <Link to='/search'><img src={assets.search_icon} alt='search-icon'/></Link>
      {/* <input type="text" placeholder="Search Food" className='searchBar'/> */}
      <div className='navbar-search-icon'>
        <Link to='/cart'><img src={assets.basket_icon} alt='cart'/></Link>
        <div className={totalCartAmount() === 0 ?"":"reminder"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign in</button>
    </div>
    <div className='Hamburger-menu' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
        {menuOpen && (
        <div className='dropdown'>
          <Link to='/' onClick={()=> {setLink("Home")}}>Home</Link>
          <Link to='/search'><p>Search food</p></Link>
          <div className='navbar-search-icon'>
            <Link to='/cart'>Cart</Link>
          </div>
          <a href="#FooterSection" onClick={()=> {setLink("Contact us")}}>Contact us</a>
          <button className="hammenu-signin-btn" onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
        )}
    </div>
    

  </div>
  )
}

export default Navbar