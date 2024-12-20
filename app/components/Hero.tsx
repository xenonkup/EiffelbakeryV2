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
      className="relative bg-black text-white min-h-screen flex items-center overflow-hidden py-20 px-20 md:py-20 lg:py-20"
    >
      {/* Background Image with Brightness Transition */}
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

      {/* Backdrop Filter Layer */}
      <div
        className={`
          absolute inset-0 
          bg-black/40 md:bg-black/35 lg:bg-black/25
          backdrop-brightness-125 
          transition-all duration-[2000ms] ease-in-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            flex flex-col items-center text-center
            transition-all duration-[1500ms] ease-in-out
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Eiffel Bakery & Cafe */}
          {/* Heading */}
          <h1
            className={`
              font-bold leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl
              mb-4 sm:mb-5
              transition-all duration-[1500ms] delay-300 ease-in-out
            `}
          >
            Eiffel Bakery & Cafe
          </h1>

          {/* Description */}
          <p
            className={`
              text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl
              mx-auto
              leading-relaxed
              transition-all duration-[1500ms] delay-500 ease-in-out
            `}
          >
            Artisanal Breads & Specialty Coffee crafted with
            <span className="hidden sm:inline"> love and care,</span>
            <br className="hidden sm:block" />
            for moments worth savoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;