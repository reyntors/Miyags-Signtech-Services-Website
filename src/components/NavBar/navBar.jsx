import React, { useState} from 'react';
import logo from '../../assets/miyags-logo.png';
// import { useLocation } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import {  Link as RouterLink } from "react-router-dom";
import menu from '../../assets/menu.png';
import { FaChevronDown } from 'react-icons/fa'; // Import dropdown icon
// import Fade from 'react-reveal/Fade';
import './navBar.css';
// import LoginSignUp from '../LoginSignUp/loginSignUp';
import {  motion } from 'framer-motion';

// import { Fade } from 'react-reveal'



const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};







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

const servicesImagePaths = {
  signFabrication: require('../../assets/Drawing/signFabrication2.webp'),
  billboardAdvertising: require('../../assets/Drawing/billBoards/billboards.jpg'),
  tarpPrinting: require('../../assets/Drawing/tarpPrinting.jpg'),
  paperPrinting: require('../../assets/Drawing/new/column ads 2.jpg'),
  // Add more mappings as needed
};

const imagePathsPointOfPurchase = {

  thePackage:{
    OnThePackage: require('../../assets/PointOfPurchase/OnThePackage/onThePackage.jpg'),
    BoxesAndPackaging: require('../../assets/PointOfPurchase/OnThePackage/Rectangle-Box.png'),
    OnPackCoupons: require('../../assets/PointOfPurchase/OnThePackage/on-pack.png'),
    CaseStickers: require('../../assets/PointOfPurchase/OnThePackage/case-sticker.png'),
    BottleStickers: require('../../assets/PointOfPurchase/OnThePackage/sticker.png'),
    LabelsDecalsAndStickers: require('../../assets/PointOfPurchase/OnThePackage/labels.png'),
  },
  inTheStore:{
    inTheStore: require('../../assets/PointOfPurchase/InTheStore/inTheStore.jpg'),
    caseCards: require('../../assets/PointOfPurchase/InTheStore/case-card.png'),
    caseStackers: require('../../assets/PointOfPurchase/InTheStore/case-stacker.png'),
    caseBins: require('../../assets/PointOfPurchase/InTheStore/case-stacker.png'),
    caseTuckers: require('../../assets/PointOfPurchase/InTheStore/case-tucker.png'),
    palletBaseWraps: require('../../assets/PointOfPurchase/InTheStore/case-tucker.png'),
    cardboardShelfDisplays: require('../../assets/PointOfPurchase/InTheStore/shelf-display.png'),
    counterDisplays: require('../../assets/PointOfPurchase/InTheStore/counter.png'),
    coupons: require('../../assets/PointOfPurchase/InTheStore/coupon.png'),
  },
  onPremise:{
    onPremise: require('../../assets/PointOfPurchase/OnPremise/on-premise.jpg'),
    coasters: require('../../assets/PointOfPurchase/OnPremise/coasters.png'),
    tableTents: require('../../assets/PointOfPurchase/OnPremise/table-tent.png'),
    wallWindowGraphics: require('../../assets/PointOfPurchase/OnPremise/wall-window.png'),
    floorGraphics: require('../../assets/PointOfPurchase/OnPremise/coasters.png'),
    expoEventDisplays: require('../../assets/PointOfPurchase/OnPremise/event-displays.png'),
  },
  
  
  // Add more mappings as needed
};



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [activeImage, setActiveImage] = useState(imagePaths.OnTheShelf);
  const [activeImage2, setActiveImage2] = useState(imagePathsPointOfPurchase.OnTheShelf);
  const [activeImage3, setActiveImage3] = useState(servicesImagePaths.billboardAdvertising);
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

        { name: 'In The Store', image: imagePathsPointOfPurchase.inTheStore.inTheStore, link: '/' },
        { name: 'Case Cards', image: imagePathsPointOfPurchase.inTheStore.caseCards, link: '/' },
        { name: 'Case Stackers', image: imagePathsPointOfPurchase.inTheStore.caseStackers, link: '/quick-classic' },
        { name: 'Case Bins', image: imagePathsPointOfPurchase.inTheStore.caseBins, link: '/popup' },
        { name: 'Case Tuckers', image: imagePathsPointOfPurchase.inTheStore.caseTuckers, link: '/padded' },
        { name: 'Pallet Base Wraps', image: imagePathsPointOfPurchase.inTheStore.palletBaseWraps, link: '/floating' },
        { name: 'Cardboard Shelf Displays', image: imagePathsPointOfPurchase.inTheStore.cardboardShelfDisplays, link: '/floating' },
        { name: 'Counter Displays', image: imagePathsPointOfPurchase.inTheStore.counterDisplays, link: '/floating' },
        { name: 'Coupons', image: imagePathsPointOfPurchase.inTheStore.coupons, link: '/floating' },

       
      ],
      onPremise: [

        { name: 'On Premise', image: imagePathsPointOfPurchase.onPremise.onPremise, link: '/' },
        { name: 'Coasters', image: imagePathsPointOfPurchase.onPremise.coasters, link: '/classic' },
        { name: 'Table Tents', image: imagePathsPointOfPurchase.onPremise.tableTents, link: '/quick-classic' },
        { name: 'Wall & Window Graphics', image: imagePathsPointOfPurchase.onPremise.wallWindowGraphics, link: '/popup' },
        { name: 'Floor Graphics', image: imagePathsPointOfPurchase.onPremise.floorGraphics, link: '/padded' },
        { name: 'Expo & Event Displays', image: imagePathsPointOfPurchase.onPremise.expoEventDisplays, link: '/floating' },
       
      ],

    }
  ];

  const ServicesmenuItems = [
    { name: 'Sign Fabrication', image: servicesImagePaths.signFabrication, link: '/' },
    { name: 'Billboard Advertising', image: servicesImagePaths.billboardAdvertising, link: '/classic' },
    { name: 'Tarp Printing', image: servicesImagePaths.tarpPrinting, link: '/quick-classic' },
    { name: 'Sticker Printing', image: servicesImagePaths.paperPrinting, link: '/popup' },
  ];

  

   // Function to handle hover and change image dynamically
   const handleHover = (image) => {
    setActiveImage(image);
  };

  const handleHover2 = (image) => {
    setActiveImage2(image);
  };

  const handleHover3 = (image) => {
    setActiveImage3(image);
  };


 

  return (
    <nav className="navbar">
      <RouterLink to="/" onClick={handleScrollToTop}>
    <img src={logo} alt="Logo" className="logo" />
    </RouterLink>
   
    <div className="desktopMenu">
    <RouterLink to="/" onClick={handleScrollToTop} className=" desktopMenuListItem desktopMenuListItem1">
        Home
        </RouterLink>
      <div
        className="desktopMenuListItem1 dropdown-container"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
       
        <RouterLink to="/ShelfTalkerPage/shelfTalker" className='shelf-talker' onClick={handleScrollToTop}>
        Shelf Talkers
        </RouterLink>
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
                        <img src={activeImage2} alt="Dropdown Visual" />
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
                        <img src={activeImage2} alt="Dropdown Visual" />
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
        <div
            className="desktopMenuListItem1 dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >

            <RouterLink to="/ServicesPage/servicesPage" className="ourservices " onClick={handleScrollToTop} >
              Our Services <FaChevronDown className="dropdown-icon" />
            </RouterLink>

            {showDropdown && (
            <motion.ul 
           
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <ul className="sub-menus2">
              
               <img src={activeImage3} alt="Dropdown Visual" />
              
               {ServicesmenuItems.map((item, index) => (
                <li key={index}>
                  <RouterLink
                  
                    className="sublist2"
                    onMouseEnter={() => handleHover3(item.image)} 
                  >
                   
                    {item.name}
                    
                  </RouterLink>
                </li>
              ))}
            
            </ul>
            </motion.ul>
          )}
          </div>


        <RouterLink  to="/gallery"   className="desktopMenuListItem">
          Our Project Gallery
        </RouterLink>

        <RouterLink  to="/about"  onClick={handleScrollToTop} className="desktopMenuListItem">
          About Us
        </RouterLink>
        <RouterLink  to="/contact" onClick={handleScrollToTop} className="desktopMenuListItemContact">
          Contact Us
        </RouterLink>
      </div>
      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      
        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        
          <RouterLink  to="/" onClick={() => setShowMenu(false)} className="listItem">
            Home
          </RouterLink>
          <RouterLink  to="/ShelfTalkerPage/shelfTalker"  onClick={() => setShowMenu(false)} className="listItem">
            Shelf Talkers
          </RouterLink>
          
          
          <RouterLink  to="" onClick={() => setShowMenu(false)} className="listItem">
            Point of Purchase
          </RouterLink>

          <RouterLink  to="/ShelfTalkerPage/shopAll"  onClick={() => setShowMenu(false)} className="listItem">
            Shop All
          </RouterLink>
          <RouterLink  to="/ServicesPage/servicesPage"  onClick={() => setShowMenu(false)} className="listItem">
            Our Services
          </RouterLink>
          <RouterLink  to="/ShelfTalkerPage/shopAll"  onClick={() => setShowMenu(false)} className="listItem">
            Our Project Gallery
          </RouterLink>

          <RouterLink  to="/about"  onClick={() => setShowMenu(false)} className="listItem">
            About
          </RouterLink>
          <RouterLink  to="/contact"  onClick={() => setShowMenu(false)} className="listItem contactus">
            Contact Us
          </RouterLink>
          {/* <Link onClick={() => { setShowMenu(false); handleLogicSignUpClick(); }} className="listItem">
            Login/Signup
          </Link> */}
        </div>

      {/* {showLoginSignUp && <LoginSignUp onClose={handleCloseLoginSignUp} />} */}
    </nav>
  );
};

export default Navbar;
