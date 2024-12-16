'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const images = [
    '/assets/Home/cr01.webp',
    '/assets/Home/cr06.jpg',
    '/assets/Home/cr03.webp',
    '/assets/Home/cr04.jpg',
    '/assets/Home/cr05.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section id="Home" className="relative bg-black opacity-100 text-white h-[85vh] md:h-[90vh] lg:h-[100vh] flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Hero Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col items-center md:items-start text-center md:text-left ml-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-snug">
          Eiffel Bakery & Cafe
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-8 max-w-2xl text-white leading-relaxed">
          Artisanal Breads & Specialty Coffee crafted with<br />
          love and care, for moments worth savoring.
        </p>
        <button className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] px-8 py-3 bg-white text-black rounded-full text-xs sm:text-sm md:text-base hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out">
          Explore Menu
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
