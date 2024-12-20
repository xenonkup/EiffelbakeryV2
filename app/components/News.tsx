import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const NewFeel = [
  {
    id: 1,
    image: "/assets/Christmas/Matcha.jpg",
    name: "Matcha Coconut Raspberry X mas tree",
    description1: "185 Baht net",
    description2: "Indulge in the sweet and fragrant green tea white chocolate mousse that melts in your mouth 🍃 Hidden deliciousness with raspberry and cream cheese filling, topped with crispy pistachio cake, designed like a Christmas tree, guaranteed to be delicious and bright to welcome the festival! 💚",
  },
  {
    id: 2,
    image: "/assets/Christmas/Ras.jpg",
    name: "Raspberry cream White Choc croissant",
    description1: "145 Baht net",
    description2: "Bright red Santa croissants with a cute fondant belt like Santa's belly. The filling is a soft and smooth white chocolate creamer, cut with a sour taste from raspberry jam. Perfectly balanced. 🎁",
  },
  {
    id: 3,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
  {
    id: 4,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
  {
    id: 5,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
  {
    id: 6,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
  {
    id: 7,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
  {
    id: 8,
    image: "/assets/Christmas/Whitemalt.jpg",
    name: "Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
  },
];

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // เริ่มใช้ fade-in ก่อน 0.10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="News" className={`bg-[#171614] py-6 px-6 md:py-6 lg:py-6 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container max-w-[1100px] mx-auto py-1 px-1 md:py-1 lg:py-1 ">
        {/* Title Section */}
        <div className="text-center text-white mb-4 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
            News
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto px-4">
            Cafe Eiffel offers authentic French bakery and pastry made with premium ingredients.
            Freshly baked from the oven every day.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative w-full ">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="py-4"
          >
            {NewFeel.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#292929] rounded-lg overflow-hidden h-full flex flex-col shadow-lg">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 md:p-6 flex flex-col">
                    <h3 className="text-sm md:text-base font-semibold text-white mb-2 line-clamp-2 min-h-[2.5rem]">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 mb-2">
                      {item.description1}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-3">
                      {item.description2}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="hidden lg:block">
            <button
              className="custom-prev absolute top-1/2 -left-16 transform -translate-y-1/2 z-10 
                text-white transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="custom-next absolute top-1/2 -right-16 transform -translate-y-1/2 z-10 
                text-white transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;