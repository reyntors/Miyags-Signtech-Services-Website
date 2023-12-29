import React, { useState } from 'react';
import './loginSignUp.css';
import loginLogo from '../../assets/logo.png'
import closeButton from '../../assets/close-button2.png'



const LoginSignUp = ({onClose}) => {
 
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [fbAccountLink, setFbAccountLink] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowAdditionalFields(false); // Reset additional fields when toggling forms
  };

  const toggleAdditionalFields = () => {
    // Check if required fields are empty
    if (!fullName || !email || !contactNo || !homeAddress || !fbAccountLink) {
      setIsInvalid(true);
      return;
    }

    setShowAdditionalFields(!showAdditionalFields);
  };

  return (
    
        <section id="loginSignUp" style={{background: showLoginForm? '#0f1013' : '#E3B04B', boxShadow: showLoginForm ? '8px 8px 1px rgb(255, 196, 0)' : '8px 8px 1px #0f1013' }}>
          <img src={closeButton} onClick={onClose} alt="" className="closeBtn" style={{background: showLoginForm? '' : 'black' , borderRadius: '50%'}} />
          <h2 className='loginTitle' style = {{color: showLoginForm? 'white' : 'black'}}>{showLoginForm ? 'Login' : 'SignUp'}</h2>
          
          {showLoginForm ? (
            <form action="" className="loginForm">
            <input type="text" className="loginInput" placeholder='Username' />
            <input type="text" className="loginInput" placeholder='Password' />
            <button type='submit' className="loginBtn">Login</button>
          </form>
          ) : (
            
          <form action="" className="signUpForm">
           
          {!showAdditionalFields && (
            <>
          <input type="text" className={`signUpInput ${isInvalid && !fullName ? 'invalid' : ''}`} placeholder='fullname*' value={fullName}onChange={(e) => setFullName(e.target.value)}required />
          <input type="text" className={`signUpInput ${isInvalid && !email ? 'invalid' : ''}`} placeholder='email*' value={email}onChange={(e) => setEmail(e.target.value)}required />
          <input type="text" className={`signUpInput ${isInvalid && !contactNo ? 'invalid' : ''}`} placeholder='contact no.*' value={contactNo}onChange={(e) => setContactNo(e.target.value)}required />
          <input type="text" className={`signUpInput ${isInvalid && !homeAddress ? 'invalid' : ''}`} placeholder='home address*' value={homeAddress}onChange={(e) => setHomeAddress(e.target.value)}required />
          <input type="text" className={`signUpInput ${isInvalid && !fbAccountLink ? 'invalid' : ''}`} placeholder='fb account link*' value={fbAccountLink}onChange={(e) => setFbAccountLink(e.target.value)}required />
          </>
          )}
          <p className='arrow'onClick={toggleAdditionalFields}>{!showAdditionalFields?'→' : '←'}</p>

          {showAdditionalFields && (
          <>
          <input type="text" className="signUpInput" placeholder='username*' />
          <input type="text" className="signUpInput" placeholder='email*' />
          <input type="text" className="signUpInput" placeholder='password*' />
          <input type="text" className="signUpInput" placeholder='confirm password*' />
          </>
          )}
          
          </form>
          )}   


          
          
          {showLoginForm ?(
          <p className='forgotpassText'>Forgot Password?<span className='forgotpassLink'>Click here</span></p>):(
            <p className='forgotpassText' style={{display: 'none'}}>Forgot Password?<span className='forgotpassLink' >&nbsp;Click here</span></p>
            
          )}
          <p className="registerText">{showLoginForm ? 'Not a member yet? ' : 'Already a member? '} 
          <span className="registerLink" style={{color: showLoginForm? '' : 'black'}}  onClick={toggleForm}>{showLoginForm ? 'Register here' : 'Login here'}</span></p>
          <img src={loginLogo} alt="" className="loginLogo" />


          
        </section>

        
  
  );
}

export default LoginSignUp;
