'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/assets/Home/cr01.webp',
    '/assets/Home/cr06.jpg',
    '/assets/Home/cr03.webp',
    '/assets/Home/cr04.jpg',
    '/assets/Home/cr05.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <section className="relative bg-black text-white h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[5]"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
          Eiffel Bakery & Cafe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-white/90 leading-relaxed mb-6 drop-shadow-md">
          Artisanal Breads & Specialty Coffee crafted with love and care, for moments worth savoring.
        </p>
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-black rounded-full text-sm md:text-base hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
          Explore Menu
        </button>
      </div>

      {/* Rolling Pin - Positioned in front of content */}
      <div className="absolute left-1/2 bottom-[-10vh] sm:bottom-[-20vh] md:bottom-[-20vh] lg:bottom-[-30vh] w-[180%] sm:w-[160%] md:w-[140%] lg:w-[120%] transform -translate-x-1/2 z-30">
        <img
          src="/assets/Home/1.png"
          alt="Rolling Pin"
          className="opacity-90 w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;