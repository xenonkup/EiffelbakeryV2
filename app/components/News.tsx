import React from 'react';

const News = () => {
  const NewFeel = [
    {
      id: 1,
      Image: "/assets/Christmas/Matcha.jpg",
      name: "Matcha Coconut Raspberry X mas tree",
      description1: "185 Baht net",
      description2:
        "Indulge in the sweet and fragrant green tea white chocolate mousse that melts in your mouth 🍃 Hidden deliciousness with raspberry and cream cheese filling, topped with crispy pistachio cake, designed like a Christmas tree, guaranteed to be delicious and bright to welcome the festival! 💚",
    },
    {
      id: 2,
      Image: "/assets/Christmas/Ras.jpg",
      name: "Raspberry cream White Choc croissant",
      description1: "145 Baht net",
      description2:
        "Bright red Santa croissants with a cute fondant belt like Santa's belly. The filling is a soft and smooth white chocolate creamer, cut with a sour taste from raspberry jam. Perfectly balanced. 🎁",
    },
    {
      id: 3,
      Image: "/assets/Christmas/Whitemalt.jpg",
      name: "Whitemalt Choc Hazelnut Reindeer",
      description1: "185 Baht net",
      description2:
        "Experience the soft and smooth white malt mousse with a smooth chocolate ganache filling, with the crunchiness of fetaine sheets and hazelnut praline – delicious and satisfying! 😍",
    },
    {
      id: 4,
      Image: "/assets/Christmas/Yuzu.jpg",
      name: "Coffee Yuzu Santa",
      description1: "175 Baht net",
      description2:
        "Rich Yuzu Coffee Mousse, combined with the freshness of sweet and sour Yuzu jam, and adding a crunchy texture with almond fetaine. A complete deliciousness in one bite! ✨",
    },
  ];

  return (
    <section id="News">
      <div className="py-8 sm:py-12 md:py-16 bg-[#181919]">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 sm:mb-4">
            News
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            Cafe Eiffel offers authentic French bakery and pastry made with premium ingredients.
            Freshly baked from the oven every day.
          </p>
        </div>

        {/* News Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-4">
            {NewFeel.map((item) => (
              <div
                key={item.id}
                className="bg-[#292929] rounded-lg overflow-hidden transition-transform transform hover:scale-105 
               duration-300 ease-in-out shadow-md w-[250px] h-[500px] flex flex-col mx-auto" // ใช้ mx-auto เพื่อให้การ์ดอยู่กึ่งกลาง
              >
                {/* Image Container with Fixed Width and Height */}
                <div className="relative w-full h-[300px] overflow-hidden">
                  <img
                    src={item.Image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-4">
                  <h3 className="text-center text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-1 line-clamp-1">
                    {item.description1}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 flex-grow line-clamp-3 overflow-hidden">
                    {item.description2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
