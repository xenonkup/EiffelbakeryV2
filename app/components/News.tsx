import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const News = () => {
  const NewFeel = [
    {
      id: 1,
      Image: "/assets/Christmas/Matcha.jpg",
      name: "Matcha Coconut Raspberry X mas tree",
      description1: "185 Baht net",
      description2: "Indulge in the sweet and fragrant green tea white chocolate mousse that melts in your mouth 🍃 Hidden deliciousness with raspberry and cream cheese filling, topped with crispy pistachio cake, designed like a Christmas tree, guaranteed to be delicious and bright to welcome the festival! 💚",
    },
    {
      id: 2,
      Image: "/assets/Christmas/Ras.jpg",
      name: "Raspberry cream White Choc croissant",
      description1: "145 Baht net",
      description2: "Bright red Santa croissants with a cute fondant belt like Santa's belly. The filling is a soft and smooth white chocolate creamer, cut with a sour taste from raspberry jam. Perfectly balanced. 🎁",
    },
    {
      id: 3,
      Image: "/assets/Christmas/Whitemalt.jpg",
      name: "Whitemalt Choc Hazelnut Reindeer",
      description1: "185 Baht net",
      description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
    },
    {
      id: 5,
      Image: "/assets/Christmas/Whitemalt.jpg",
      name: "Whitemalt Choc Hazelnut Reindeer",
      description1: "185 Baht net",
      description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
    },
    {
      id: 6,
      Image: "/assets/Christmas/Whitemalt.jpg",
      name: "Whitemalt Choc Hazelnut Reindeer",
      description1: "185 Baht net",
      description2: "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
    },
  ];

  return (
    <section id="News" className="bg-[#181919] py-10 sm:py-12 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1130px] mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
            News
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Cafe Eiffel offers authentic French bakery and pastry made with premium ingredients.
            Freshly baked from the oven every day.
          </p>
        </div>

        {/* Swiper with Navigation and Mobile-Friendly Design */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              // Mobile (sm)
              640: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              // Tablet (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Large screens (lg)
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // Extra large screens (xl)
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="w-full pb-10 sm:pb-12"
          >
            {NewFeel.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-[#292929] rounded-lg overflow-hidden transition-transform transform 
                hover:scale-105 duration-300 ease-out shadow-md h-full flex flex-col">
                  {/* Image with aspect ratio */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={item.Image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-4 sm:p-5 space-y-2 text-center flex-grow">
                    <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-1">
                      {item.description1}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 flex-grow">
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
              className="custom-prev absolute top-1/2 -left-12 xl:-left-20 transform -translate-y-1/2 z-10 
              text-white bg-transparent hover:text-gray-400 transition-transform duration-300"
              style={{ fontSize: "2.5rem" }}
            >
              &#10094;
            </button>
            <button
              className="custom-next absolute top-1/2 -right-12 xl:-right-20 transform -translate-y-1/2 z-10 
              text-white bg-transparent hover:text-gray-400 transition-transform duration-300"
              style={{ fontSize: "2.5rem" }}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;