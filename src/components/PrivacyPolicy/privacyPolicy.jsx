import './privacyPolicy.css';
import { motion } from 'framer-motion';
// import {  Link as RouterLink } from "react-router-dom";

// const handleScrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };



const PrivacyPolicy = () => {
  return (
   
      <section id="privacyPolicy">
      <div className="privacy-content">
         <motion.div 
                                initial={{ opacity: 0, x: -100 }}  
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true, amount: 0.5 }} 
                                transition={{ duration: 0.5 }}>
          <span className="privacyTitle">Privacy Policy</span>
          <div className="privacyDesc">
            <p>
            

At <span className="miyags">Miyags Signtech Services</span>, we are committed to protecting your personal information and honoring your right to data privacy. This Privacy Policy sets forth the kind of information we collect, how we use it, and the measures we implement to keep it safe.
<br/>
<span className="miyags">Information We Collect:</span>
We may collect personal information, including your name, phone number, email address, delivery address, and other details related to your orders or inquiries.
<br/>
<span className="miyags">How We Use Your Information:</span>
We use the information we collect to process orders, respond to inquiries, provide customer support, and improve our services. We may also use your information to send promotions or news about our products and services, with your consent.
<br/>
<span className="miyags">Data Security:</span>
We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. This includes employing password protection, firewalls, and other industry standard practices.
<br/>
<span className="miyags">Third-Party Disclosure:</span>
We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services or when we are legally obligated to do so.
<br/>
<span className="miyags">Your Rights:</span>
You have the right to view, modify, or delete your personal information upon request. Please reach us at sales@miyagssigntech.com or +63917-717-0415 to exercise these rights.
<br/>
<span className="miyags">Change to This Privacy Policy:</span>
We may update this Privacy Policy from time to time. All updates will be posted on our website or made available upon request.
<br/>
If you have any questions or concerns about this Privacy Policy, please feel free to reach us directly.
</p>
           
          </div>
        </motion.div>
      </div>
      </section>
   
  );
};

export default PrivacyPolicy;