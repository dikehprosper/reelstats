import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import zz from '../images/favicon.png'

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
   
    

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const styles = {
    color: "#704094",
    fontSize:"17px",
    ':hover': {
      backgroundColor: '#704094',
      color: "white"
    }};



  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4" >
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={zz} alt="" srcset="" height="60px" width="60px"  />
              <h2 style={{color:"#704094",fontWeight:"bold", fontSize:"20px", marginLeft:"10px" }}>Ravox</h2>
            
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link to="" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li> 
             
             
              <li>
                <Link to="" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">staking</Link>
              </li> <li>
                <Link to="" className="btn-sm text-purple-600 hover:text-white hover:bg-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">Stake</Link>
              </li>

            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
              <li>
                  <Link to="" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white  hover:bg-purple-700 transition duration-150 ease-in-out" style={{color:"#704094"}}>Home</Link>
                </li>
               
                <li>
                  <Link to="" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white hover:bg-purple-700 transition duration-150 ease-in-out" style={{color:"#704094"}}>staking</Link>
                </li>
              <li>
                <Link to="" className="btn-sm text-white bg-purple-600 hover:text-white hover:bg-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Stake Now</Link>
              </li>
              <li>
                <Link to="" className="btn-sm text-white bg-purple-600 hover:text-white hover:bg-purple-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Buy Now</Link>
              </li>
                
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;