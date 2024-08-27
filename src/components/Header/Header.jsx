
import './Header.css'

const Header = () => {

  const scrollToSection = () => {
    const section = document.getElementById('exploreSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }; 

  return (
    <div className='Header'>
        <div className="header-details">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button onClick={scrollToSection}>View Menu</button>
        </div>
    </div>
  )
}

export default Header