'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger the loaded state after a short delay to enable entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      id="Homes"
      className="relative bg-black text-white h-[85vh] md:h-[90vh] lg:h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Brightness Transition */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out
          ${isLoaded && imageLoaded
            ? 'backdrop-brightness-100'
            : 'backdrop-brightness-150'
          }`}
      >
        <img
          src="/assets/Home/cr06.jpg"
          alt="Hero Background"
          className={`w-full h-full object-cover absolute transition-all duration-[2000ms] ease-in-out
            ${isLoaded && imageLoaded
              ? 'opacity-100'
              : 'opacity-80'
            }`}
          onLoad={handleImageLoad}
        />
      </div>

      {/* Backdrop Filter Layer */}
      <div
        className={`
          absolute inset-0 bg-black/25 
          lg:bg-gradient-to-tr from-black/40 to-transparent
          backdrop-brightness-125 transition-all duration-[2000ms] ease-in-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Content with Entrance Animation */}
      <div
        className={`
          relative z-10 w-full px-6 sm:px-4 md:px-20
          flex flex-col items-center md:item-center
          text-center md:text-left ml-10
          transition-all duration-[1500ms] ease-in-out
          ${isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
          }
        `}
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
          font-bold mb-4 leading-snug
          transition-all duration-[1500ms] delay-300 ease-in-out"
        >
          Eiffel Bakery & Cafe
        </h1>

        <p
          className="text-sm sm:text-lg lg:text-xl xl:text-2xl 
          mb-8 max-w-2xl text-white leading-relaxed
          transition-all duration-[1500ms] delay-500 ease-in-out"
        >
          Artisanal Breads & Specialty Coffee crafted with
          <br />
          love and care, for moments worth savoring.
        </p>
      </div>
    </section>
  );
};

export default Hero;
