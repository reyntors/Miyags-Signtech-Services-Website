import React, { useState } from 'react';
import './projects.css';

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = Object.values(importAll(require.context('../../assets/projectsImages', false, /\.(png|jpe?g|svg)$/)));

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open the overlay
    const openOverlay = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    // Close the overlay
    const closeOverlay = () => {
        setSelectedImage(null);
    };

    // Show next image
    const showNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    // Show previous image
    const showPrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <section id="gallery">
            <div className="projects-container">
                <h2>OUR PAST PROJECTS</h2>
                <p>Explore our portfolio to see how we’ve brought companies to life with our innovative and impactful signage solutions. Contact us today to get started on your custom sign project.</p>
                <div className="projects-grid">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Project ${index + 1}`}
                            className="project-image"
                            onClick={() => openOverlay(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {selectedImage && (
                <div className="overlay">
                    <span className="close-btn" onClick={closeOverlay}>&times;</span>
                    <button className="prev-btn" onClick={showPrev}>&#10094;</button>
                    <img src={selectedImage} alt="Selected Project" className="overlay-image" />
                    <button className="next-btn" onClick={showNext}>&#10095;</button>
                </div>
            )}
        </section>
    );
};

export default Projects;
