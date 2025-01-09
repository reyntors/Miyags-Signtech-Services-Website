import React, { useState } from 'react';
import logo from '../../assets/miyags.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { FaChevronDown } from 'react-icons/fa'; // Import dropdown icon
import Fade from 'react-reveal/Fade';
import './navBar.css';
import LoginSignUp from '../LoginSignUp/loginSignUp';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown menu
  const [showLoginSignUp, setShowLoginSignUp] = useState(false);

  const handleLogicSignUpClick = () => {
    setShowLoginSignUp(true);
  };

  const handleCloseLoginSignUp = () => {
    setShowLoginSignUp(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="services" spy={true} offset={-100} duration={500} smooth={true} className="desktopMenuListItem">
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} offset={-70} duration={500} smooth={true} className="desktopMenuListItem">
          About
        </Link>
        <div 
          className="desktopMenuListItem1 dropdown-container" 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)}
        >
          Services
          <FaChevronDown className="dropdown-icon" />
          {showDropdown && (
            <ul className="sub-menus">
              <li>
                <Link activeClass="active2" to="residential" spy={true} offset={-50} duration={500} smooth={true} className="sublist1">
                  Sign Fabrication
                </Link>
              </li>
              <li>
                <Link activeClass="active2" to="landForSaleTitle" spy={true} offset={-50} duration={500} smooth={true} className="sublist2">
                  Packaging Printing
                </Link>
              </li>
              <li>
                <Link activeClass="active2" to="weProvideTitle" spy={true} offset={-110} duration={500} smooth={true} className="sublist3">
                  Tarp Printing
                </Link>
              </li>
              <li>
                <Link activeClass="active2" to="residential" spy={true} offset={-110} duration={500} smooth={true} className="sublist3">
                  Paper Printing
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} className="desktopMenuListItem">
          Projects
        </Link>
        <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} className="desktopMenuListItem">
          Careers
        </Link>
        <Link activeClass="active" to="contactus" spy={true} offset={-87} duration={500} smooth={true} className="desktopMenuListItem">
          Contact Us
        </Link>
      </div>
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <Fade right duration={300}>
        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Home
          </Link>
          <Link activeClass="active" to="about" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            About
          </Link>
          <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Services
          </Link>
          <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Projects
          </Link>
          <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Careers
          </Link>
          <Link activeClass="active" to="contactus" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Contact Us
          </Link>
          <Link onClick={() => { setShowMenu(false); handleLogicSignUpClick(); }} className="listItem">
            Login/Signup
          </Link>
        </div>
      </Fade>
      {showLoginSignUp && <LoginSignUp onClose={handleCloseLoginSignUp} />}
    </nav>
  );
};

export default Navbar;
