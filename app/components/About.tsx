import Image from 'next/image';

const About = () => {
  return (
    <>
      <section className="relative py-16 h-screen flex items-center"> {/* Add flex and items-center */}
        <div className="absolute inset-0">
          <Image
            src="/assets/test01/01.png"
            alt="About Background"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Content */}
            <div className="col-span-1 md:col-span-1 mt-4">
              <h2 className="text-3xl sm:text-xl md:text-2xl font-bold mb-4 text-gray-900">About Our Cafe</h2>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base">
                Eiffel Bakery & Cafe (SINTHORN TOWER) is a cozy café in the Sinthorn Building, Bangkok, 
                offering freshly baked pastries, cakes, and premium coffee in a stylish atmosphere.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base">
                Our menu features high-quality baked goods and specialty drinks, perfect for any occasion. 
                It’s the ideal place to relax, meet with friends, or unwind after a busy day.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base">
                Whether you're looking for a sweet treat or a refreshing beverage, 
                we have something to satisfy every craving.
              </p>
              <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base">
                We aim to provide a warm, welcoming experience with great food and excellent service, 
                making every visit memorable. Our goal is to make our customers feel right at home.
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
              {/* First Image (Large) */}
              <div className="relative h-80 sm:h-96 md:h-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <Image
                  src="/assets/Ourcafe/01.png"
                  alt="Cafe Interior"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>

              {/* Second and Third Images (Stacked) */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative h-64 sm:h-80 md:h-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <Image
                    src="/assets/Ourcafe/01.png"
                    alt="Cafe Interior"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 md:h-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <Image
                    src="/assets/Ourcafe/01.png"
                    alt="Cafe Interior"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
