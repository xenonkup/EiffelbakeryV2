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
      name: "Raspberry cream White Choc croissant ",
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
    <section className="py-16 bg-[#1F1F1F]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          {/* Main Title */}
          <h2 className="text-4xl font-extrabold text-white tracking-wide mb-4">
            News
          </h2>

          {/* Subtitle */}
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Cafe Eiffel offers authentic French bakery and pastry made with premium ingredients.
            Freshly baked from the oven every day.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NewFeel.map((item) => (
            <div
              key={item.id}
              className="bg-[#292929] text-center rounded-lg overflow-hidden 
          transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              {/* Image */}
              <img
                src={item.Image}
                alt={item.name}
                className="w-[100%] h-[50%] object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-sm lg:text-base text-gray-400 mb-1">
                  {item.description1}
                </p>
                <p className="text-sm lg:text-base text-gray-400">
                  {item.description2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default News;
