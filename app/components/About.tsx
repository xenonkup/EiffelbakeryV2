import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const About = () => {
  return (
    <>
    {/* Rolling Pin */}
    {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10vh] sm:bottom-[-15vh] md:bottom-[-20vh] lg:bottom-[-24vh] w-[180%] sm:w-[160%] md:w-[140%] lg:w-[120%] z-30">
        <img
            src="/assets/Home/1.png"
            alt="Rolling Pin"
            className="opacity-90 w-full object-contain"
          />
        </div> */}

      <section className="relative py-16 sm:py-24 lg:py-32 h-auto flex items-center">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            {/* Left Section */}
            <div className="col-span-1 mt-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
                About Our Cafe
              </h2>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base text-center md:text-left">
                Eiffel Bakery & Cafe (SINTHORN TOWER) is a cozy café in the Sinthorn Building, Bangkok, offering freshly baked pastries, cakes, and premium coffee in a stylish atmosphere.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base text-center md:text-left">
                Whether you're looking for a sweet treat or a refreshing beverage, we have something to satisfy every craving.
              </p>
              <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-900 mb-4 text-center md:text-left">
                Mission
              </h3>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base text-center md:text-left">
                We aim to provide a warm, welcoming experience with great food and excellent service, making every visit memorable. Our goal is to make our customers feel right at home.
              </p>
            </div>

            {/* Right Section with Swiper Images */}
            <div className="col-span-1">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                className="mySwiper"
              >
                {/* First Image */}
                <SwiperSlide>
                  <div className="relative h-64 sm:h-80 md:h-96">
                    <Image
                      src="/assets/Ourcafe/cafe1.jpg"
                      alt="Cafe Interior"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                {/* Second Image */}
                <SwiperSlide>
                  <div className="relative h-64 sm:h-80 md:h-96">
                    <Image
                      src="/assets/Ourcafe/cafe2.jpg"
                      alt="Cafe Interior"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                {/* Third Image */}
                <SwiperSlide>
                  <div className="relative h-64 sm:h-80 md:h-96">
                    <Image
                      src="/assets/Ourcafe/cafe3.jpg"
                      alt="Cafe Interior"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
