import Image from 'next/image';

const About = () => {
  return (
    <>
      <section id="About Us" className="relative py-16 sm:py-24 lg:py-32 h-auto flex items-center">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-center">
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
            </div>

            {/* Right Section with Swiper Images */}
            <div className="col-span-1">
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src="/assets/Ourcafe/cafe1.jpg"
                  alt="Cafe Interior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
