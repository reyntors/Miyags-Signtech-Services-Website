import React, { useState } from 'react';
import logo from '../../assets/miyags.png';
// import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import menu from '../../assets/menu.png';
import { FaChevronDown } from 'react-icons/fa'; // Import dropdown icon
// import Fade from 'react-reveal/Fade';
import './navBar.css';
// import LoginSignUp from '../LoginSignUp/loginSignUp';
import { motion } from 'framer-motion';

// import { Fade } from 'react-reveal'

const imagePaths = {
  OnTheShelf: require('../../assets/ShelfTalkers/shelf-talkers.png'),
  ClassicShelf: require('../../assets/ShelfTalkers/simple.png'),
  QuickClassicShelf: require('../../assets/ShelfTalkers/qs-talker.png'),
  PopUpShelf: require('../../assets/ShelfTalkers/FIP-necker_talker-shapes-38.png'),
  PaddedShelf: require('../../assets/ShelfTalkers/padded.png'),
  FloatingShelf: require('../../assets/ShelfTalkers/floating.png'),
  SnapIn: require('../../assets/ShelfTalkers/snap-in.png'),
  WobblersShelf: require('../../assets/ShelfTalkers/wobbler.png'),
  AisleFlags: require('../../assets/ShelfTalkers/aisle-flag.png'),
  ShelfStrips: require('../../assets/ShelfTalkers/shelf-strip.png'),
  ShopAllShelf: require('../../assets/ShelfTalkers/shelf-talkers.png'),
  // Add more mappings as needed
};

const imagePathsPointOfPurchase = {

  thePackage:{
    OnThePackage: require('../../assets/PointOfPurchase/OnThePackage/sticker.png'),
    BoxesAndPackaging: require('../../assets/PointOfPurchase/OnThePackage/Rectangle-Box.png'),
    OnPackCoupons: require('../../assets/PointOfPurchase/OnThePackage/on-pack.png'),
    CaseStickers: require('../../assets/PointOfPurchase/OnThePackage/case-sticker.png'),
    BottleStickers: require('../../assets/PointOfPurchase/OnThePackage/sticker.png'),
    LabelsDecalsAndStickers: require('../../assets/PointOfPurchase/OnThePackage/labels.png'),
  },
  inTheStore:{
    OnThePackage: require('../../assets/PointOfPurchase/InTheStore/pop.jpg'),
    BoxesAndPackaging: require('../../assets/PointOfPurchase/InTheStore/case-card.png'),
    OnPackCoupons: require('../../assets/PointOfPurchase/InTheStore/case-card.png'),
    CaseStickers: require('../../assets/PointOfPurchase/OnThePackage/case-sticker.png'),
    BottleStickers: require('../../assets/PointOfPurchase/OnThePackage/sticker.png'),
    LabelsDecalsAndStickers: require('../../assets/PointOfPurchase/OnThePackage/labels.png'),
  },
  onPremise:{
    OnThePackage: require('../../assets/PointOfPurchase/OnThePackage/square-pic-1.jpg'),
    BoxesAndPackaging: require('../../assets/PointOfPurchase/OnThePackage/Rectangle-Box.png'),
    OnPackCoupons: require('../../assets/PointOfPurchase/OnThePackage/on-pack.png'),
    CaseStickers: require('../../assets/PointOfPurchase/OnThePackage/case-sticker.png'),
    BottleStickers: require('../../assets/PointOfPurchase/OnThePackage/sticker.png'),
    LabelsDecalsAndStickers: require('../../assets/PointOfPurchase/OnThePackage/labels.png'),
  },
  
  
  // Add more mappings as needed
};



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [activeImage, setActiveImage] = useState(imagePaths.OnTheShelf);
  const [activeImage2, setActiveImage2] = useState(imagePathsPointOfPurchase.OnTheShelf);
  // const [showLoginSignUp, setShowLoginSignUp] = useState(false);

  // const handleLogicSignUpClick = () => {
  //   setShowLoginSignUp(true);
  // };

  // const handleCloseLoginSignUp = () => {
  //   setShowLoginSignUp(false);
  // };


  const menuItems = [
    { name: 'On The Shelf', image: imagePaths.OnTheShelf, link: '/' },
    { name: 'Classic Shelf Talkers', image: imagePaths.ClassicShelf, link: '/classic' },
    { name: 'Quick Ship > Classic', image: imagePaths.QuickClassicShelf, link: '/quick-classic' },
    { name: 'Pop-Up Shelf Talkers', image: imagePaths.PopUpShelf, link: '/popup' },
    { name: 'Padded Shelf Talkers', image: imagePaths.PaddedShelf, link: '/padded' },
    { name: 'Floating Shelf Talkers', image: imagePaths.FloatingShelf, link: '/floating' },
    { name: 'Snap-In Talkers', image: imagePaths.SnapIn, link: '/snap-in' },
    { name: 'Shelf Wobblers', image: imagePaths.WobblersShelf, link: '/wobblers' },
    { name: 'Aisle Flags', image: imagePaths.AisleFlags, link: '/aisle-flags' },
    { name: 'Shelf Strips', image: imagePaths.ShelfStrips, link: '/shelf-strips' },
    { name: 'Shop All Shelf Talkers', image: imagePaths.OnTheShelf, link: '/shop-all' },
  ];

  const PointOfPurchaseItems = [
    {
      thePackage: [

        { name: 'On The Package', image: imagePathsPointOfPurchase.thePackage.OnThePackage, link: '/' },
        { name: 'Boxes & Packaging', image: imagePathsPointOfPurchase.thePackage.BoxesAndPackaging, link: '/classic' },
        { name: 'On-Pack Coupons (IRC’s)', image: imagePathsPointOfPurchase.thePackage.OnPackCoupons, link: '/quick-classic' },
        { name: 'Case Stickers', image: imagePathsPointOfPurchase.thePackage.CaseStickers, link: '/popup' },
        { name: 'Bottle Stickers', image: imagePathsPointOfPurchase.thePackage.BottleStickers, link: '/padded' },
        { name: 'Labels, Decals, & Stickers', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },
       
      ],
      theStore: [

        { name: 'In The Store', image: imagePathsPointOfPurchase.thePackage.OnThePackage, link: '/' },
        { name: 'Case Cards', image: imagePathsPointOfPurchase.thePackage.BoxesAndPackaging, link: '/classic' },
        { name: 'Case Stackers', image: imagePathsPointOfPurchase.thePackage.OnPackCoupons, link: '/quick-classic' },
        { name: 'Case Bins', image: imagePathsPointOfPurchase.thePackage.CaseStickers, link: '/popup' },
        { name: 'Case Tuckers', image: imagePathsPointOfPurchase.thePackage.BottleStickers, link: '/padded' },
        { name: 'Pallet Base Wraps', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },
        { name: 'Cardboard Shelf Displays', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },
        { name: 'Counter Displays', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },
        { name: 'Coupons', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },

       
      ],
      onPremise: [

        { name: 'On Premise', image: imagePathsPointOfPurchase.thePackage.OnThePackage, link: '/' },
        { name: 'Coasters', image: imagePathsPointOfPurchase.thePackage.BoxesAndPackaging, link: '/classic' },
        { name: 'Table Tents', image: imagePathsPointOfPurchase.thePackage.OnPackCoupons, link: '/quick-classic' },
        { name: 'Wall & Window Graphics', image: imagePathsPointOfPurchase.thePackage.CaseStickers, link: '/popup' },
        { name: 'Floor Graphics', image: imagePathsPointOfPurchase.thePackage.BottleStickers, link: '/padded' },
        { name: 'Expo & Event Displays', image: imagePathsPointOfPurchase.thePackage.LabelsDecalsAndStickers, link: '/floating' },
       
      ],

    }
  ];

  

  

   // Function to handle hover and change image dynamically
   const handleHover = (image) => {
    setActiveImage(image);
  };

  const handleHover2 = (image) => {
    setActiveImage2(image);
  };

 

  return (
    <nav className="navbar">
      <RouterLink to="/">
    <img src={logo} alt="Logo" className="logo" />
    </RouterLink>
    <div className="desktopMenu">
    
      <div
        className="desktopMenuListItem1 dropdown-container"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        Shelf Talkers
          <FaChevronDown className="dropdown-icon" />
          {showDropdown && (
            <motion.ul 
           
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <ul className="sub-menus">
              
               <img src={activeImage} alt="Dropdown Visual" />
              
               {menuItems.map((item, index) => (
                <li key={index}>
                  <RouterLink
                  
                    className="sublist1"
                    onMouseEnter={() => handleHover(item.image)} 
                  >
                   
                    {item.name}
                    
                  </RouterLink>
                </li>
              ))}
            
            </ul>
            </motion.ul>
          )}
        </div>

        <div
                  className="desktopMenuListItem2"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  Point of Purchase
                  <FaChevronDown className="dropdown-icon" />
                  {showDropdown && (
                    <motion.ul 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    >
                      <ul className="list">
                        <ul className="sub-list">
                        <img src={activeImage2} alt="Dropdown Visual" />
                          {PointOfPurchaseItems[0].thePackage.map((item, index) => (
                            <li key={index}>
                              <RouterLink
                                to={item.link}
                                onMouseEnter={() => handleHover2(item.image)}
                              >
                                {item.name}
                              </RouterLink>
                            </li>
                          ))}
                        </ul>

                        <ul className="sub-list">
                          {PointOfPurchaseItems[0].theStore.map((item, index) => (
                            <li key={index}>
                              <RouterLink
                                to={item.link}
                                onMouseEnter={() => handleHover2(item.image)}
                              >
                                {item.name}
                              </RouterLink>
                            </li>
                          ))}
                        </ul>

                        <ul className="sub-list">
                          {PointOfPurchaseItems[0].onPremise.map((item, index) => (
                            <li key={index}>
                              <RouterLink
                                to={item.link}
                                onMouseEnter={() => handleHover2(item.image)}
                              >
                                {item.name}
                              </RouterLink>
                            </li>
                          ))}
                        </ul>
                      </ul>
                    </motion.ul>
                  )}
                </div>



       

        <RouterLink  to="shopAll"   className="desktopMenuListItem">
          Shop All
        </RouterLink>

        <ScrollLink activeClass="active" to="about" spy={true} offset={-87} duration={500} smooth={true} className="desktopMenuListItem">
          About Us
        </ScrollLink>
        <ScrollLink activeClass="active" to="contactus" spy={true} offset={-87} duration={500} smooth={true} className="desktopMenuListItem">
          Contact Us
        </ScrollLink>
      </div>
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      
        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        
          <ScrollLink activeClass="active" to="about" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            About
          </ScrollLink>
          <ScrollLink activeClass="active" to="works" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Services
          </ScrollLink>
          <ScrollLink activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Projects
          </ScrollLink>
          <ScrollLink activeClass="active" to="clients" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Careers
          </ScrollLink>
          <ScrollLink activeClass="active" to="contactus" spy={true} offset={-50} duration={500} smooth={true} onClick={() => setShowMenu(false)} className="listItem">
            Contact Us
          </ScrollLink>
          {/* <Link onClick={() => { setShowMenu(false); handleLogicSignUpClick(); }} className="listItem">
            Login/Signup
          </Link> */}
        </div>

      {/* {showLoginSignUp && <LoginSignUp onClose={handleCloseLoginSignUp} />} */}
    </nav>
  );
};

export default Navbar;
