import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/Home.css';
import img1 from '../data/img1.jpg';
import img2 from '../data/img2.jpg';
import img3 from '../data/img3.jpg';
import img4 from '../data/img4.jpg';
import img5 from '../data/img5.jpg';
import img6 from '../data/img6.jpg';
import img7 from '../data/img7.jpg';
import img8 from '../data/img8.jpg';
import img9 from '../data/img9.jpg';
import img10 from '../data/img10.jpg';
import img11 from '../data/img11.jpg';
import img12 from '../data/img12.jpg';
import img13 from '../data/img13.jpg';
import img14 from '../data/img14.jpg';
import imageData from '../data/imageData';
import PopChart from '../components/PopChart';

function Home() {
  const imageSources = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="home-container">
      <div className="background-image">
        <div><h1 className="hostel-name"><b>Crystal Horizon Lodge</b></h1></div>
        <img src={imageSources[currentImageIndex]} alt="Slideshow" className="image" />
        <div className="slideshow-content">
          <h2 className="slide-heading">{imageData[currentImageIndex].heading}</h2>
          <p className="slide-description">{imageData[currentImageIndex].description}</p>
        </div>
        <div className="slideshow-controls">
          <button onClick={handlePrevImage} className="slideshow-button">
            <FaArrowLeft />
          </button>
          <button onClick={handleNextImage} className="slideshow-button">
            <FaArrowRight />
          </button>
        </div>
        <div className="slide-number">{currentImageIndex + 1} / {imageSources.length}</div>
      </div>
    </div>
  );
}

export default Home;