'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
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
      className="relative bg-black text-white min-h-screen flex items-center overflow-hidden py-4 px-4 md:py-6 lg:py-8"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out 
          ${isLoaded && imageLoaded ? 'backdrop-brightness-100' : 'backdrop-brightness-150'}`}
      >
        <img
          src="/assets/Home/cr06.jpg"
          alt="Hero Background"
          className={`w-full h-full object-cover absolute transition-all duration-[2000ms] ease-in-out
            ${isLoaded && imageLoaded ? 'opacity-100' : 'opacity-80'}`}
          onLoad={handleImageLoad}
        />
      </div>

      {/* Backdrop Layer */}
      <div
        className={`
          absolute inset-0 
          bg-black/30 md:bg-black/25 lg:bg-black/20
          backdrop-brightness-110 
          transition-all duration-[2000ms] ease-in-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-3 lg:px-3">
        <div
          className={`
            flex flex-col items-center justify-center text-center
            transition-all duration-[1500ms] ease-in-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            space-y-4 md:space-y-6
          `}
        >
          {/* Title */}
          <h1
            className={`
              font-bold
              text-3xl sm:text-5xl md:text-5xl lg:text-7xl
              tracking-tight
              transition-all duration-[1500ms] delay-300 ease-in-out
              max-w-[90%] sm:max-w-4xl
              leading-tight
            `}
          >
            Eiffel Bakery & Cafe
          </h1>

          {/* Description */}
          <p
            className={`
              text-base sm:text-lg md:text-xl lg:text-2xl
              max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl
              leading-relaxed
              transition-all duration-[1500ms] delay-500 ease-in-out
              opacity-90
            `}
          >
            Artisanal Breads & Specialty Coffee
            <span className="hidden sm:inline"> crafted with love and care,</span>
            <br className="hidden sm:block" />
            <span className="inline sm:inline">for moments worth savoring.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;