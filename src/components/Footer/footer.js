import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <div className="leftFooter">
        <img src={logo} alt="" className="footerImg" />
        <h2>Head Office</h2>
        </div>

        <div className="middleFooter">
        <img src={logo} alt="" className="footerImg" />
        </div>

        <div className="rightFooter">
        <img src={logo} alt="" className="footerImg" />
        </div>

       </div>
       
       <p>Copyright &#169; 2023 R & J Land Development Corporation. All right received.</p> 
       
    </footer>
   
  )
}

export default Footer