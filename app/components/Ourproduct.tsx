import React, { useState, useEffect } from "react";
import Image from "next/image";

const Ourproduct = () => {
  // Categories and Items
  const categories = [
    { id: 1, name: "EIFFEL BREAD" },
    { id: 2, name: "EIFFEL COFFEE" },
    { id: 3, name: "ORGANIC BEVERAGES" },
    { id: 4, name: "EIFFEL CAKE" },
  ];

  // Item Images ฝัง
  const items = [
    { id: 1, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 1" },
    { id: 2, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 2" },
    { id: 3, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 3" },
    { id: 4, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 4" },
    { id: 5, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 5" },
    { id: 6, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 6" },
    { id: 7, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 7" },
    { id: 8, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 8" },
    { id: 9, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", alt: "Image 9" },

    { id: 10, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 10" },
    { id: 11, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 11" },
    { id: 12, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 12" },
    { id: 13, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 13" },
    { id: 14, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 14" },
    { id: 15, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 15" },
    { id: 16, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 16" },
    { id: 17, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 17" },
    { id: 18, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", alt: "Image 18" },

    { id: 19, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 19" },
    { id: 20, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 20" },
    { id: 21, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 21" },
    { id: 22, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 22" },
    { id: 23, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 23" },
    { id: 24, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 24" },
    { id: 25, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 25" },
    { id: 26, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 26" },
    { id: 27, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", alt: "Image 28" },

    { id: 28, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 29" },
    { id: 29, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 30" },
    { id: 30, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 31" },
    { id: 31, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 32" },
    { id: 32, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 33" },
    { id: 33, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 34" },
    { id: 34, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 35" },
    { id: 35, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 36" },
    { id: 36, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", alt: "Image 37" },

  ];

  const itemproduct = [
    { id: 1, src: "/assets/Product/crproduct.jpg", alt: "Product 1" },
    { id: 2, src: "/assets/Product/crproduct2.jpg", alt: "Product 2" },
    { id: 3, src: "/assets/Product/crproduct3.jpg", alt: "Product 3" },
  ];

  // State for Active Tab
  const [activeTab, setActiveTab] = useState("EIFFEL BREAD");

  // Filter items by Active Tab
  const filteredItems = items.filter((item) => item.category === activeTab);

  // State for active image index and fade effect
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemproduct.length); // Change image
        setFade(true); // Start fade-in effect
      }, 600); // Duration of fade-out effect
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [itemproduct.length]);


  return (
    <>
      {/* Product Section */}
      <section id="Our Products" className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1060px] mx-auto">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5 text-left">
              Our Products
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-7xl">
              Cafe Eiffel is a French-inspired bakery and café offering high-quality food and beverages.
              With warm hospitality and a cozy ambiance, we strive to create memorable dining experiences
              for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="container mx-auto flex justify-center items-center py-6 px-4">
        <div
          className={`w-[1200px] max-w-[1060px] transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={itemproduct[currentIndex].src}
            alt={itemproduct[currentIndex].alt}
            width={3000}
            height={3000}
            className="w-full h-auto max-h-[100vh] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Tab Menu */}
      <section className="py-6 px-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.name)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 font-medium text-xs sm:text-sm rounded transition-all duration-300 ease-in-out ${activeTab === category.name
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Items */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-[340px] h-[300px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Download Menu Button */}
      <section className="flex justify-center items-center py-6 px-4">
        <a
          href="/assets/Product/Menu.jpg"
          download="Menu"
          className="group relative inline-flex h-10 sm:h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 sm:px-6 font-medium text-neutral-200 duration-500"
        >
          <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-xs sm:text-base">
            Download Menu
          </div>
          <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
            >
              <path
                d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </section>
    </>
  );
};

export default Ourproduct;
