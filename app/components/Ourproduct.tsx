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

  // Item Images
  const items = [
    { id: 1, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 1", Description1: "Description 1" },
    { id: 2, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 2", Description2: "Description 2" },
    { id: 3, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 3", Description3: "Description 3" },
    { id: 4, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 4", Description4: "Description 4" },
    { id: 5, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 5", Description5: "Description 5" },
    { id: 6, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 6", Description6: "Description 6" },
    { id: 7, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 7", Description7: "Description 7" },
    { id: 8, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 8", Description8: "Description 8" },
    { id: 9, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 9", Description9: "Description 9" },
    { id: 10, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 10", Description10: "Description 10" },
    { id: 11, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 11", Description11: "Description 11" },
    { id: 12, category: "EIFFEL BREAD", src: "/assets/TEST01/cr03.webp", Name: "Bread 12", Description12: "Description 12" },

    { id: 13, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 13", Description13: "Description 13" },
    { id: 14, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 14", Description14: "Description 14" },
    { id: 15, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 15", Description15: "Description 15" },
    { id: 16, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 16", Description16: "Description 16" },
    { id: 17, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 17", Description17: "Description 17" },
    { id: 18, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 18", Description18: "Description 18" },
    { id: 19, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 19", Description19: "Description 19" },
    { id: 20, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 20", Description20: "Description 20" },
    { id: 21, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 21", Description21: "Description 21" },
    { id: 22, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 22", Description22: "Description 22" },
    { id: 23, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 23", Description23: "Description 23" },
    { id: 24, category: "EIFFEL COFFEE", src: "/assets/TEST01/cr03.webp", Name: "COFFEE 24", Description24: "Description 24" },

    { id: 25, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 25", Description25: "Description 25" },
    { id: 26, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 26", Description26: "Description 26" },
    { id: 27, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 27", Description27: "Description 27" },
    { id: 28, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 28", Description28: "Description 28" },
    { id: 29, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 29", Description29: "Description 29" },
    { id: 30, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 30", Description30: "Description 30" },
    { id: 31, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 31", Description31: "Description 31" },
    { id: 32, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 32", Description32: "Description 32" },
    { id: 33, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 33", Description33: "Description 33" },
    { id: 34, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 34", Description34: "Description 34" },
    { id: 35, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 35", Description35: "Description 35" },
    { id: 36, category: "ORGANIC BEVERAGES", src: "/assets/TEST01/cr03.webp", Name: "BEVERAGES 36", Description36: "Description 36" },

    { id: 37, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 37", Description37: "Description 37" },
    { id: 38, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 38", Description38: "Description 38" },
    { id: 39, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 39", Description39: "Description 39" },
    { id: 40, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 40", Description40: "Description 40" },
    { id: 41, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 41", Description41: "Description 41" },
    { id: 42, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 42", Description42: "Description 42" },
    { id: 43, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 43", Description43: "Description 43" },
    { id: 44, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 44", Description44: "Description 44" },
    { id: 45, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 45", Description45: "Description 45" },
    { id: 46, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 46", Description46: "Description 46" },
    { id: 47, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 47", Description47: "Description 47" },
    { id: 48, category: "EIFFEL CAKE", src: "/assets/TEST01/cr03.webp", Name: "CAKE 48", Description48: "Description 48" },

  ];

  const itemproduct = [
    { id: 1, src: "/assets/Product/crproduct.jpg", alt: "Product 1" },
    { id: 2, src: "/assets/Product/crproduct2.jpg", alt: "Product 2" },
    { id: 3, src: "/assets/Product/crproduct3.jpg", alt: "Product 3" },
  ];

  const [activeTab, setActiveTab] = useState("EIFFEL BREAD");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Filter items by Active Tab
  const filteredItems = items.filter((item) => item.category === activeTab);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemproduct.length); // Change image
        setFade(true); // Start fade-in effect
      }, 600); // Duration of fade-out effect
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [itemproduct.length]);

   // Handle tab change with fade effect
   const handleTabChange = (tabName: React.SetStateAction<string>) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tabName);
      setIsVisible(true);
    }, 400); // Duration of fade-out effect
  };
  
  return (
    <>
      <main className="bg-white py-12 px-12 md:py-12 lg:py-12">
        {/* Product Section */}
        <section id="Our Products">
          <div className="container mx-auto">
            <div className="max-w-[1060px] xl:max-w-[1070px] mx-auto ">
              <h2 className="text-black text-3xl sm:text-4xl font-bold text-left mb-4 md:mb-4">
                Our Products
              </h2>
              <p className="text-black text-base sm:text-sm md:text-base leading-relaxed mb-4 md:mb-4">
                Cafe Eiffel is a French-inspired bakery and café offering high-quality food and beverages.
                With warm hospitality and a cozy ambiance, we strive to create memorable dining experiences
                for our customers.
              </p>
            </div>
          </div>
        </section>


        {/* Hero Image Section */}
        <section className="container mx-auto py-6 md:py-6 lg:py-6 flex justify-center items-center min-h-[300px] md:min-h-[500px] lg:min-h-[600px]">
          <div
            className={`w-full max-w-[1060px] h-[300px] md:h-[500px] lg:h-[600px] transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={itemproduct[currentIndex].src}
              alt={itemproduct[currentIndex].alt}
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Tab Menu */}
        <section className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.name)}
                  className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === category.name
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Items */}
        <section>
          <div className="container mx-auto pt-6">
            <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-4 max-w-[1060px] 
            mx-auto transition-opacity duration-1000 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-opacity duration-500 ease-in-out"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      src={item.src}
                      alt={item.Name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-center 
                  opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-lg md:text-xl font-semibold">
                      {item.Name}
                    </p>
                    <div>
                      <p className="text-white text-sm md:text-base mt-1 text-center">
                        {Object.entries(item)
                          .filter(([key]) => key.startsWith('Description'))
                          .map(([_, value]) => value)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Menu Button */}
        <section>
          <div className="container mx-auto flex justify-center pt-6">
            <a
              href="/assets/Product/Menu.jpg"
              download="Menu"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 py-3 
              font-medium text-neutral-200 duration-500"
            >
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                Download Menu
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ourproduct;
