import Image from 'next/image';

const About = () => {
  return (
    <>
      <section id="About Us" className="py-16 sm:py-18 lg:py-25 flex items-center justify-center">
        <div className="relative max-w-[1110px] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

            {/* Left Section */}
            <div className="col-span-1 mt-4 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
                About Cafe
              </h2>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base text-center md:text-left">
                Eiffel Bakery & Cafe (SINTHORN TOWER) is a cozy café in the Sinthorn Building, Bangkok, offering freshly baked pastries, cakes, and premium coffee in a stylish atmosphere.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-sm md:text-base text-center md:text-left">
                Whether you're looking for a sweet treat or a refreshing beverage, we have something to satisfy every craving.
              </p>
            </div>

            {/* Right Section */}
            <div className="col-span-1 ">
              <div className="relative w-full h-full pr-4">
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
