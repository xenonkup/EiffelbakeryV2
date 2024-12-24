import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const NewFeel = [
  {
    id: 1,
    image: "/assets/News/Festive/Festive Gift Box.jpg",
    name: "Festive Gift Box",
    description1: "1,090 Baht net",
    description2: "(Palmier Box, Hazelnut Bonbon, Madeleine, Pocko Choc Pistachio) Experience the finest treats with a premium selection, including Palmier Box, Hazelnut Bonbon, Madeleine, and Pocko Choc Pistachio, all packed together for you to enjoy in one box!",
  },
  {
    id: 2,
    image: "/assets/News/Ras/Ras.jpg",
    name: "Raspberry cream White Choc croissant",
    description1: "145 Baht net",
    description2: "Bright red cubic croissant in Santa style, with a cute fondant belt resembling Santa's belly. Filled with smooth white chocolate cream, complemented by the tartness of raspberry jam - perfectly balanced.",
  },
  {
    id: 3,
    image: "/assets/News/Gana/Whitemalt.jpg",
    name: " Whitemalt Choc Hazelnut Reindeer",
    description1: "185 Baht net",
    description2: "Experience the delicate white malt mousse with smooth chocolate ganache filling, layered with crispy feuilletine and hazelnut praline - a delightful bite full of flavor",
  },
  {
    id: 4,
    image: "/assets/News/Mat/Matcha.jpg",
    name: "Matcha Coconut Raspberry X mas tree",
    description1: "185 Baht net",
    description2: "Indulge in sweet-scented white chocolate green tea mousse that melts in your mouth, with hidden deliciousness of raspberry and cream cheese filling, enhanced by crispy pistachio cake. Uniquely designed like a Christmas tree - guaranteed to bring delicious festive cheer!",
  },
  {
    id: 5,
    image: "/assets/News/Yuzu/Yuzu1.jpg",
    name: "Coffee Yuzu Santa",
    description1: "175 Baht net",
    description2: "Intense coffee yuzu mousse blended with the refreshing tang of sweet and sour yuzu orange jam, complemented by a crispy crunch of almond feuilletine. A perfect bite of delightful flavors!",
  },
  {
    id: 6,
    image: "/assets/News/White/White1.jpg",
    name: "White Choc Cointreau croissant",
    description1: "145 Baht net",
    description2: "The White Chocolate and Cointreau Croissant is back! Perfect for the festive season, it offers a delightful blend of sweet and creamy flavors. Served in a log-shaped design, it’s elegantly decorated with white chocolate and snowy white dust, making it a stunning treat to celebrate Christmas.",
  },
  {
    id: 7,
    image: "/assets/News/Berry/BerryLogcake.png",
    name: "Berry Log cake",
    description1: "175 Baht net",
    description2: "Soft vanilla cake filled with tangy-sweet berry jam, complemented by the smooth aroma of vanilla pastry cream. Enhanced with rich brown butter milk chocolate ganache, offering a perfect balance of sweet and slightly bitter flavors in every bite!",
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
    <section id="News" className={`bg-[#171614] py-20 md:py-24 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container max-w-[1100px] mx-auto px-6 md:px-10  ">
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
        <div className="relative w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
                // ขนาดของการ์ดเมื่อเหลือ 1 รูป
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
                // ขนาดของการ์ดเมื่อมี 2 รูป
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
                // ขนาดของการ์ดเมื่อมี 3 รูป
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
                // ขนาดของการ์ดเมื่อมี 3 รูป
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
                // ขนาดของการ์ดเมื่อมี 3 รูป
              },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            className="py-4 w-full"
          >
            {NewFeel.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Card Container */}
                <div className="bg-[#292929] rounded-lg overflow-hidden flex flex-col shadow-lg">
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