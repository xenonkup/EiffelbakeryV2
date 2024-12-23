import React, { useState, useEffect } from "react";
import Image from "next/image";

const Ourproduct = () => {
  // Categories and Items
  const categories = [
    { id: 1, name: "EIFFEL BREAD" },
    { id: 2, name: "EIFFEL COFFEE" },
    { id: 3, name: "ORGANIC BEBERAGES" },
    { id: 4, name: "EIFFEL CAKE" },
    // { id: 5, name: "WEEKEND MENU" },
    { id: 6, name: "SEASON’S BAKERY" },
    { id: 7, name: "OUR CAFÉ" },
  ];

  // Item Images
  const items = [
    { id: 1, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant truffle.jpg", Name: "Croissant truffle", Description1: " (120.-) Baht net" },
    { id: 2, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant lemon meringue.jpg", Name: "Croissant lemon meringue", Description2: "(95.-) Baht net" },
    { id: 3, category: "EIFFEL BREAD", src: "/assets/BRADE1/Pain suisse au choc chips.jpg", Name: "Pain suisse au choc chips.jpg", Description3: "(85.-) Baht net" },
    { id: 4, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant chocolate lava.jpg", Name: "Croissant chocolate lava", Description4: "(95.-) Baht net" },
    { id: 5, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant egg lava.jpg", Name: "Croissant egg lava", Description5: "(95.-) Baht net" },
    { id: 6, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant butterfly pea lava.jpg", Name: "Croissant butterfly pea lava", Description6: "(85.-) Baht net" },
    { id: 7, category: "EIFFEL BREAD", src: "/assets/BRADE1/Cranberry cream cheese croissant.jpg", Name: "Cranberry cream cheese croissant", Description7: "(115.-) Baht net" },
    { id: 8, category: "EIFFEL BREAD", src: "/assets/BRADE1/Strawberry & Vanilla cream cube.jpg", Name: "Strawberry & Vanilla cream cube", Description7: "(145.-) Baht net" },
    { id: 9, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant Passion fruit cheese cake.jpg", Name: "Croissant Passion fruit cheese cake", Description7: "(115.-) Baht net" },
    { id: 10, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant mango coconut cream.jpg", Name: "Croissant mango coconut cream", Description7: "(105.-) baht net" },
    { id: 11, category: "EIFFEL BREAD", src: "/assets/BRADE1/Croissant cheese garlic.jpg", Name: "Croissant cheese garlic", Description7: "(95.-) Baht net" },
    { id: 12, category: "EIFFEL BREAD", src: "/assets/BRADE1/Chocolate pistachio cruffin .jpg", Name: "Chocolate pistachio cruffin", Description7: "(105.-) baht net" },


    { id: 13, category: "EIFFEL COFFEE", src: "/assets/Coffee/Ice coconut coffee.png", Name: "Ice coconut coffee", Description13: "Description 13" },
    { id: 14, category: "EIFFEL COFFEE", src: "/assets/Coffee/Yuzu coffee.png", Name: "Yuzu coffee", Description14: "Description 14" },
    { id: 15, category: "EIFFEL COFFEE", src: "/assets/Coffee/Ice coconut thai tea.jpg", Name: "Ice coconut thai tea", Description15: "(130.-) baht net" },
    // { id: 16, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 16", Description16: "Description 16" },
    // { id: 17, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 17", Description17: "Description 17" },
    // { id: 18, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 18", Description18: "Description 18" },
    // { id: 19, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 19", Description19: "Description 19" },
    // { id: 20, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 20", Description20: "Description 20" },
    // { id: 21, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 21", Description21: "Description 21" },
    // { id: 22, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 22", Description22: "Description 22" },
    // { id: 23, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 23", Description23: "Description 23" },
    // { id: 24, category: "EIFFEL COFFEE", src: "/assets/Coffee/cr03.webp", Name: "COFFEE 24", Description24: "Description 24" },

    { id: 25, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC9.jpg", Name: "ORGANIC BEBERAGES 25", Description25: "Description 25"},
    { id: 26, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC2.jpg", Name: "ORGANIC BEBERAGES 26", Description26: "Description 26" },
    { id: 27, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC3.jpg", Name: "ORGANIC BEBERAGES 27", Description27: "Description 27" },
    { id: 28, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC5.jpg", Name: "ORGANIC BEBERAGES 28", Description28: "Description 28" },
    { id: 29, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC6.jpg", Name: "ORGANIC BEBERAGES 29", Description29: "Description 29" },
    { id: 30, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC7.jpg", Name: "ORGANIC BEBERAGES 30", Description30: "Description 30" },
    { id: 31, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC8.jpg", Name: "ORGANIC BEBERAGES 31", Description31: "Description 31" },
    { id: 32, category: "ORGANIC BEBERAGES", src: "/assets/ORGANIC BEBERAGES/ORGANIC14.jpg", Name: "ORGANIC BEBERAGES 32", Description32: "Description 32" },

    { id: 37, category: "EIFFEL CAKE", src: "/assets/CAKE1/Chestnut salted egg mooncake.jpg", Name: "Chestnut salted egg mooncake", Description37: "(160.-) Baht net" },
    { id: 38, category: "EIFFEL CAKE", src: "/assets/CAKE1/Sweet purple potato cake.jpg", Name: "Sweet purple potato cake.jpg ", Description38: "(140.-) Baht net" },
    { id: 39, category: "EIFFEL CAKE", src: "/assets/CAKE1/Coconut jelly cake.jpg", Name: "Coconut jelly cake", Description39: "(160.-) Baht net" },
    { id: 40, category: "EIFFEL CAKE", src: "/assets/CAKE1/Pandan coconut cake.jpg", Name: "Pandan coconut cake", Description40: "(120.-) Baht net" },
    { id: 41, category: "EIFFEL CAKE", src: "/assets/CAKE1/Shine muscat cake.jpg", Name: "Shine muscat cake", Description41: "(140.-) Baht net" },
    { id: 42, category: "EIFFEL CAKE", src: "/assets/CAKE1/Corn cheese cake.jpg", Name: "Corn cheese cake.jpg", Description42: "(120.-) Baht net" },
    { id: 43, category: "EIFFEL CAKE", src: "/assets/CAKE1/Chocolate orange mousse.jpg", Name: "Chocolate orange mousse", Description43: "(150.-) Baht net" },
    { id: 44, category: "EIFFEL CAKE", src: "/assets/CAKE1/Caramel sea salt banana cake.jpg", Name: "Caramel sea salt banana cake ", Description44: "Description 44" },
    { id: 45, category: "EIFFEL CAKE", src: "/assets/CAKE1/Lod chong chiffon cake.jpg", Name: "Lod chong chiffon cake", Description45: "(140.-) Baht net" },
    { id: 46, category: "EIFFEL CAKE", src: "/assets/CAKE1/Pina Colada mousse.jpg", Name: "Pina Colada mousse", Description46: "(150.-) Baht net" },
    { id: 47, category: "EIFFEL CAKE", src: "/assets/CAKE1/Durian mousse cake.jpg", Name: "Durian mousse cake", Description47: "(195.-) Baht net" },
    { id: 48, category: "EIFFEL CAKE", src: "/assets/CAKE1/Mango sticky rice short cake.jpg", Name: "Mango sticky rice short cake", Description48: "(140.-) Baht net" },

    // { id: 49, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 49", Description49: "Description 49" },
    // { id: 50, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 50", Description50: "Description 50" },
    // { id: 51, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 51", Description51: "Description 51" },
    // { id: 52, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 52", Description52: "Description 52" },
    // { id: 53, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 53", Description53: "Description 53" },
    // { id: 54, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 54", Description54: "Description 54" },
    // { id: 55, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 55", Description55: "Description 55" },
    // { id: 56, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 56", Description56: "Description 56" },
    // { id: 57, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 57", Description57: "Description 57" },
    // { id: 58, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 58", Description58: "Description 58" },
    // { id: 59, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 59", Description59: "Description 59" },
    // { id: 60, category: "WEEKEND MENU", src: "/assets/TEST01/cr03.webp", Name: "WEEKEND MENU 60", Description60: "Description 60" },

    { id: 61, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe1.jpg", Name: "OUR CAFÉ 61", Description61: "Description 61" },
    { id: 63, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe2.jpg", Name: "OUR CAFÉ 63", Description63: "Description 63" },
    { id: 64, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe3.jpg", Name: "OUR CAFÉ 64", Description64: "Description 64" },
    { id: 65, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe4.jpg", Name: "OUR CAFÉ 65", Description65: "Description 65" },
    { id: 66, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe5.jpg", Name: "OUR CAFÉ 66", Description66: "Description 66" },
    { id: 67, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe6.jpg", Name: "OUR CAFÉ 67", Description67: "Description 67" },
    { id: 68, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe7.jpg", Name: "OUR CAFÉ 68", Description68: "Description 68" },
    { id: 69, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe8.jpg", Name: "OUR CAFÉ 69", Description69: "Description 69" },
    { id: 70, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe9.jpg", Name: "OUR CAFÉ 70", Description70: "Description 70" },
    { id: 71, category: "OUR CAFÉ", src: "/assets/Ourcafe/cafe10.jpg", Name: "OUR CAFÉ 71", Description71: "Description 71" },


    { id: 73, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/BREAD 3.jpg", Name: "SEASON’S BAKERY 73", Description73: "Description 73" },
    { id: 74, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/BREAD 4.jpg", Name: "SEASON’S BAKERY 74", Description74: "Description 74" },
    { id: 75, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/BREAD 5.jpg", Name: "SEASON’S BAKERY 75", Description75: "Description 75" },
    { id: 76, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/cake2.jpg", Name: "SEASON’S BAKERY 76", Description76: "Description 76" },
    { id: 77, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/cake3.jpg", Name: "SEASON’S BAKERY 77", Description77: "Description 77" },
    { id: 78, category: "SEASON’S BAKERY", src: "/assets/SEASON'S BAKERY/cake7.jpg", Name: "SEASON’S BAKERY 78", Description78: "Description 78" },
  ]
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
      <main className="bg-white py-6 px-6 md:py-6 lg:py-6">
        {/* Product Section */}
        <section id="Our Products">
          <div className="container mx-auto">
            <div className="max-w-[1060px] xl:max-w-[1090px] mx-auto ">
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
        <section className="container mx-auto flex justify-center items-center min-h-[300px] md:min-h-[500px] lg:min-h-[600px]">
          <div
            className={`w-full max-w-[1090px] h-[300px] md:h-[500px] lg:h-[600px] transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
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
        <section className="relative w-full">
          <div className="container mx-auto py-6">
            <div className="px-4 md:px-6">
              <div
              // Use overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                className="
                flex flex-row gap-3 md:gap-3 overflow-x-auto 
                whitespace-nowrap scroll-smooth pb-2
                scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                md:justify-center
                "
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.name)}
                    className={`px-4 md:px-4 py-3 md:py-3 
                      text-xs md:text-sm font-medium rounded-md
                      transition-all duration-300 flex-shrink-0
                      ${activeTab === category.name
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Items */}
        <section>
          <div className="container mx-auto">
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-4 max-w-[1090px] 
              mx-auto transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-opacity duration-500 ease-in-out"
                >
                  <div className="w-full h-[300px]">
                    {/* กำหนดขนาดที่แน่นอน */}
                    <Image
                      src={item.src}
                      alt={item.Name}
                      width={2000}
                      height={2000}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-center 
                    opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 transition-all duration-300"
                  >
                    <p className="text-white text-center text-lg md:text-xl font-semibold">
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
