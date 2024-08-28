import { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { auth, db } from "../../fireBase/firebase.jsx";
import { getDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

const Navbar = ({ setShowLogin }) => {

  const [link, setLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); 
  const [showProfile, setShowProfile] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { totalCartAmount } = useContext(StoreContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
          toast.error("User is not logged in", {
            position: "bottom-center",
          });
        }
      }
    });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User is logged out");
      toast.success("User logged out successfully", {
        position: "top-center",
      });
      window.location.reload(); // Reload the page after logout
    } catch (error) {
      console.error("Error in logging out", error.message);
      toast.error("Error in logging out", {
        position: "bottom-center",
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className='Navbar'>
      <Link to='/'><img className="logo" src={assets.TomatoLogo} alt='img' /></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={() => { setLink("Home") }} className={link === "Home" ? "active" : ""}>Home</Link>
        <a href="#exploreSection" onClick={() => { setLink("Menu") }} className={link === "Menu" ? "active" : ""}>Menu</a>
        <a href="#AppDowloadSection" onClick={() => { setLink("Mobile-app") }} className={link === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#FooterSection" onClick={() => { setLink("Contact us") }} className={link === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>

      <div className='navbar-right'>
        <Link to='/search'><img src={assets.search_icon} alt='search-icon' /></Link>
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='cart' /></Link>
          <div className={totalCartAmount() === 0 ? "" : "reminder"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
        <button className='profile' onClick={() => { setShowProfile(true) }}>
          {userDetails ? (userDetails.name.slice(0, 1).toUpperCase()) : "U"}
        </button>
        {showProfile && (
          <div className='profile-dropdown'>
            {userDetails ? (
              <div className='profile-details'>
                <div className='close-profile'><h4>Welcome {userDetails.name}</h4><span onClick={() => { setShowProfile(false) }}>X</span></div>
                <p>Name: {userDetails.name}</p>
                <p>Email: {userDetails.email}</p>
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className='profile-details'>
                <div className='close-profile'><h4>You need to Login</h4><span onClick={() => { setShowProfile(false) }}>X</span></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Below section is rendered only on mobile screens */}
      <div className='mobile-menu'>
      <div className='Hamburger-menu' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
        {menuOpen && (
          <ul className='dropdown'>
            <li><Link to='/' onClick={() => { setLink("Home") }}>Home</Link></li>
            <li><Link to='/search'><p>Search food</p></Link></li>
            <li><div className='navbar-search-icon'>
              <Link to='/cart'>Cart</Link>
            </div></li>
            <li><a href="#FooterSection" onClick={() => { setLink("Contact us") }}>Contact us</a></li>
            <li><button className="hammenu-signin-btn" onClick={() => setShowLogin(true)}>Sign in</button></li>
          </ul>
        )}
      </div>
      <button className='mobile-profile' onClick={() => { setShowProfile(true) }}>
          {userDetails ? (userDetails.name.slice(0, 1).toUpperCase()) : "U"}
      </button>
      {showProfile && (
          <div className='mobile-profile-dropdown'>
            {userDetails ? (
              <div className='profile-details'>
                <div className='close-profile'><h4>Welcome {userDetails.name}</h4><span onClick={() => { setShowProfile(false) }}>X</span></div>
                <p>Name: {userDetails.name}</p>
                <p>Email: {userDetails.email}</p>
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className='profile-details'>
                <div className='close-profile'><h4>You need to Login</h4><span onClick={() => { setShowProfile(false) }}>X</span></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
