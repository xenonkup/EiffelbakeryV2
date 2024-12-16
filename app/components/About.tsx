import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const About = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About Our Cafe
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Eiffel Bakery & Cafe (SINTHORN TOWER) is a cozy café in the Sinthorn Building, Bangkok, offering freshly baked pastries, cakes, and premium coffee in a stylish atmosphere.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you're looking for a sweet treat or a refreshing beverage, we have something to satisfy every craving.
            </p>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
            We aim to create a warm, welcoming space where every bite brings joy and every sip feels like home.
            </p>
          </div>

          {/* Right Section - Swiper */}
          <div>
            <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
              {['/assets/Ourcafe/cafe1.jpg', '/assets/Ourcafe/cafe2.jpg', '/assets/Ourcafe/cafe3.jpg'].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-72 sm:h-80 md:h-96">
                    <Image
                      src={src}
                      alt={`Cafe Slide ${index + 1}`}
                      layout="fill"
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
