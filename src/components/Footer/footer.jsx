import React from 'react'
import './footer.css'
import logo from '../../assets/miyags.png'
import fb from '../../assets/facebook.png'
import ig from '../../assets/instagram.png'
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <Fade bottom>
    <footer className="footer">

      <div className="container">
        <div className="leftFooter">
        <img src={logo} alt="" className="footerImg" />
        <div className="iconImgs">
          <img src={fb} alt="" className="iconImg" />
          <img src={ig} alt="" className="iconImg" />
        </div>
        <h2>Head Office</h2>
        <p>Lot 7 Yangzte St. Riverview Village Brgy. 19-B, Bacaca, Davao City, Davao del Sur, Philippines 8000</p>
        <div className="contactNumber">
        <h3>Telephone Number</h3>
        <p>(082) 221-0918</p>
        <h3>Cellphone NUmber</h3>
        <p>+63917-717-0415</p>
        <h3>Email</h3>
        <p>sales@miyagssigntech.com</p>
        
        </div>
        </div>

        <div className="middleFooter">
        <h2>Our Services</h2>
          
        <div className="weBuild">
          <span className="weBuildTitles">Billboard Advertising</span>
          <span className="servicesDesc">Sign Fabrication</span>
          <span className="servicesDesc">Directional Signs</span>
          <span className="servicesDesc">BIR & NON-BIR Forms Printing</span>
          <span className="servicesDesc">Packaging Printing</span>
          </div>
          {/* <div className="weSell">
          <span className="weSellTitles">We Sell</span>
          <span className="servicesDesc">Amenities</span>
          <span className="servicesDesc">Structural Foundation</span>
          </div>
          <div className="weProvide">
          <span className="weProvideTitles">We Provide</span>
          <span className="servicesDesc">Heavy Equipment for rent</span>
          <span className="servicesDesc">Survey Services</span>
          <span className="servicesDesc">Titling Processing</span>
          <span className="servicesDesc">Business Permits and Licenses</span>
          </div> */}
        </div>

        <div className="rightFooter">
        <h2>Inquire Now</h2>
        <form className='inquire'>
            <span className="prospectName">Prospect's Name:
            <div className="prospectContainer">
            <input className='prospectInput1' type="text" placeholder='First Name' />
            <input className='prospectInput2' type="text" placeholder='Middle Name' />
            <input className='prospectInput3' type="text" placeholder='Last Name' />
            </div>
            </span>
           
            <span className="spouseName">Spouse Name: (if married)
            <input className='spouseInput' type="text" placeholder='Your spouse Name' />
            </span>
            <div className="contactContainer">
              <span className="contactTitle">Contact Numbers:</span>
              <input className="contactInput1" type="text" placeholder='Messenger Account' />
              <input className="contactInput2" type="text" placeholder='Mobile Number' />
              <input className="contactInput3" type="text" placeholder='Email Address' /> 
            
            </div>
            <div className="interestContainer">
                 <span className="prospectsInterest">Prospect/s interest In </span>
                 <input className='interestMsg' type='text' placeholder='your interest here'></input>
            </div>
            <div className="prospectsFromContainer">
            <span className="prospectFrom">Prospects from:</span>
            <select className="prospectsDropdown">
                <option value="regular">Regular Prospect</option>
                <option value="referral">Referral</option>
                <option value="openHouse">Open House</option>
                <option value="officeInCharge">Office-in-Charge</option>
                <option value="fbWebsite">FB/Website</option>
                <option value="mallExhibits">Mall Exhibits</option>
            </select>
        </div>

        <button type='submit' className='inquireBtn'>SUBMIT → </button>
        </form>
        </div>

       </div>
       
       <p>Copyright &#169; 2024 Miyags Signtech Services. All rights reserved.</p> 
       
    </footer>
    </Fade>
   
  )
}

export default Footer