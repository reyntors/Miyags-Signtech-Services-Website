import React from 'react'
import './contact.css'
import { Fade } from 'react-reveal'

const Contact = () => {
  return (
    <section id="contactus">
        <Fade bottom>
         <h2 className='reachus'>REACH US</h2>
        <span className="contactUsTitle"> Contact Us</span>
        </Fade>
        <Fade bottom>
        <span className="contactUsDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum ab molestiae dolor molestias maiores, vel nisi sunt autem at!</span>
        </Fade>
        <form action="post" className="contactUs">
            <Fade left>
            <input type="text" className="firstname" placeholder='Your First Name' />
            </Fade>
            <Fade right>
            <input type="text" className="lastname" placeholder='Your Last Name' />
            </Fade>
            <Fade left>
            <input type="text" className="company" placeholder='Your Company' />
            </Fade>
            <Fade right>
            <input type="text" className="jobTitle" placeholder='Your Job Title' />
            </Fade>
            <Fade left>
            <input type="text" className="phone" placeholder='Your Phone Number'/>
            </Fade>
            <Fade right>
            <input type="text" className="email" placeholder='Your Email' />
            </Fade>
            <Fade left>
            <input type="text" className="fblink" placeholder='Your Facebook Link'/>
            </Fade>
            <Fade bottom>
            <textarea name="message" id="" cols="30" rows="6" className="message" placeholder='Your Message'></textarea>
            </Fade>

           <button type='submit' className="submitBtn">Submit</button>

        </form>
    </section>
  )
}

export default Contact