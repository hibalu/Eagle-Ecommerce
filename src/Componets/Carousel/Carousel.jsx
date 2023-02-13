import React, { useState } from "react";
import "./carousel.css";
function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      src:"Hoodies-3.png",
    },
    {
      src: "Hoodies-2.png",
    },
    {
      src: "Hoodies-4.png",
    },
    {
      src: "Hoodis.png"
    },
  ];

  const handlePrev = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleNext = () => {
    setSlideIndex(slideIndex + 1);
  };

  return (
    <>
   
        <div className="Carousel-Images">
        <img className="Carousel-Img" src={slides[slideIndex].src} />
        <div className="carousel-buttons">
     <button onClick={handlePrev}>Prev</button>
     <button onClick={handleNext}>Next</button>
     </div>
        </div>
        
 
    
     </>
  );
}

export default Carousel;
