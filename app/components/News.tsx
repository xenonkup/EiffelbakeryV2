import React,{useState , useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
];
const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeOut);
  }, []);

  if(!isLoaded) return null

  return (
    <section id="News" className="bg-[#181919] py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            News
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Cafe Eiffel offers authentic French bakery and pastry made with premium ingredients.
            Freshly baked from the oven every day.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative w-full px-2 md:px-4">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 1 }, // Small screens
              768: { slidesPerView: 2 }, // Medium screens 
              1024: { slidesPerView: 4 }, // Large screens 
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
           
           
           
            className="py-4"
          >
            {NewFeel.length > 0 && NewFeel.map((item) => (
              <SwiperSlide key={item.id}>
                 <div className="bg-[#292929] rounded-lg overflow-hidden h-full flex flex-col shadow-lg">
                  {/* Fixed Aspect Ratio Container */}
                  <div className="w-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
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

          {/* Custom Navigation Buttons - Desktop Only */}
          <div className="hidden lg:block">
            <button
              className="custom-prev absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 
                text-white hover:text-gray-400 transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
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
              className="custom-next absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 
                text-white hover:text-gray-400 transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
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