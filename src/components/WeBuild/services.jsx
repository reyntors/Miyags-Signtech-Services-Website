import React, { useEffect, useState } from 'react';
import './services.css';
import { Fade } from 'react-reveal';
import landingPage from '../../assets/Drawing/SignType/Landing Page2.jpg';

// Import images
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const billboardAdvertisingImgs = importAll(require.context('../../assets/billboard', false, /\.(png|jpe?g|svg)$/));
const signFabricationImgs = importAll(require.context('../../assets/signFabrication', false, /\.(png|jpe?g|svg)$/));
const stickerImgs = importAll(require.context('../../assets/sticker', false, /\.(png|jpe?g|svg)$/));

const Services = () => {
  const [currentSection, setCurrentSection] = useState(0); // State to track the current section
  const [currentBillboardImage, setCurrentBillboardImage] = useState(0);
  const [currentSignFabricationImage, setCurrentSignFabricationImage] = useState(0);
  const [currentStickerImage, setCurrentStickerImage] = useState(0);

  useEffect(() => {
    const billboardIntervalId = setInterval(() => {
      setCurrentBillboardImage((prevImage) => (prevImage + 1) % billboardAdvertisingImgs.length);
    }, 3000);

    const signFabricationIntervalId = setInterval(() => {
      setCurrentSignFabricationImage((prevImage) => (prevImage + 1) % signFabricationImgs.length);
    }, 3000);

    const stickerIntervalId = setInterval(() => {
      setCurrentStickerImage((prevImage) => (prevImage + 1) % stickerImgs.length);
    }, 3000);

    return () => {
      clearInterval(billboardIntervalId);
      clearInterval(signFabricationIntervalId);
      clearInterval(stickerIntervalId);
    };
  }, []);

  const sections = [
    {
      title: 'Billboard Advertising',
      description: 'At Miyags Signtech Services, we specialize in creating and managing impactful billboard advertising campaigns that put your brand in the spotlight. Our services are designed to ensure your message reaches a broad and diverse audience, maximizing visibility and engagement. We use high-quality Gonzheng printing machines to deliver vibrant, durable billboards that effectively capture attention and convey your message with clarity and impact.',
      images: billboardAdvertisingImgs,
      currentImage: currentBillboardImage
    },
    {
      title: 'Sign Fabrication',
      description: 'At Miyags Signtech Services, we specialize in high-quality sign fabrication tailored to meet your unique needs. Our team of skilled craftsmen and designers work diligently to bring your vision to life, ensuring every detail is perfect. Whether you need custom signs for your business, event, or special project, we use state-of-the-art technology and premium materials to create durable and visually appealing signage.',
      images: signFabricationImgs,
      currentImage: currentSignFabricationImage
    },
    {
      title: 'Directional Signs',
      description: 'Lorem ipsum...',
      images: null,
      currentImage: 0
    },
    {
      title: 'BIR & NON-BIR Forms Printing',
      description: 'Lorem ipsum...',
      images: null,
      currentImage: 0
    },
    {
      title: 'Packaging Printing',
      description: 'Lorem ipsum...',
      images: null,
      currentImage: 0
    },
    {
      title: 'Tarp Printing',
      description: 'Lorem ipsum...',
      images: null,
      currentImage: 0
    },
    {
      title: 'Sticker Printing',
      description: 'Enhance your brand visibility with our custom sticker printing services. Perfect for promotional events, product labeling, and personal use, our stickers are crafted with high-quality materials to ensure durability and vibrant color accuracy. We utilize state-of-the-art UCJV300-160 and JV330-160 printing machines to deliver exceptional quality and precision in every print.',
      images: stickerImgs,
      currentImage: currentStickerImage
    }
  ];

  const renderResidentialSection = (title, description, index, images, currentImage) => (
    <div className="residentials" key={index}>
      <Fade bottom>
        <h2>{title}</h2>
        <p>{description}</p>
      </Fade>
      {images && (
        <Fade left>
          <div className="residentialImgs">
            <div className="img-container">
              <img src={images[currentImage]} alt="" className="residentialImg" />
            </div>
          </div>
        </Fade>
      )}
      <div className="buttonContainer">
        <button
          onClick={() => setCurrentSection(currentSection - 1)}
          className="navBtn"
          disabled={currentSection === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentSection(currentSection + 1)}
          className="navBtn"
          disabled={currentSection === sections.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <section id="residential">
      <Fade left>
      <section id='sign'>
      <h1 className="explore">GUIDE TO BASIC SIGN TYPES</h1>
      <span className="weBuildTitle">Sign Types</span>
      <div className="signDesc">
      <p>This drawing helps you illustrate some basic types of signs that assist businesses and organizations in communicating effectively, offering insights into selecting the ideal signage solution for various needs.</p>
      </div>
      <img src={landingPage} alt="Sign Type" className="signtype" />
      </section>
      </Fade>
      <Fade bottom>
        <h2 className="explore">EXPLORE</h2>
        <span className="weBuildTitle">Our Services</span>
      </Fade>
      {renderResidentialSection(
        sections[currentSection].title,
        sections[currentSection].description,
        currentSection,
        sections[currentSection].images,
        sections[currentSection].currentImage
      )}
    </section>
  );
};

export default Services;
