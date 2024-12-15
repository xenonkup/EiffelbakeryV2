import React, { useState, useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Ourproduct = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const initFancybox = async () => {
      try {
        const { Fancybox } = await import("@fancyapps/ui");

        // Destroy any existing Fancybox instance
        Fancybox?.destroy();

        // Bind Fancybox with valid options
        Fancybox.bind("[data-fancybox]", {
          Carousel: {
            infinite: true,
            dragFree: true,
            center: true,
          },
          Toolbar: {
            display: {
              left: ["prev", "next"],
              middle: [],
              right: ["close"],
            },
          },
          Thumbs: false,
          Images: {
            zoom: true,
          },
        });
      } catch (error) {
        console.error("Fancybox initialization error:", error);
      }
    };

    initFancybox();
  }, [value]);

  const product = [
    {
      id: 1,
      Image: "/assets/BRADE/BREAD 2.jpg",
      name: "EIFFEL BRADE",
    },
    {
      id: 2,
      Image: "/assets/CAKE/cake1.jpg",
      name: "EIFFEL CAKE",
    },
    {
      id: 3,
      Image: "/assets/ORGANIC/ORGANIC2.jpg",
      name: "ORGANIC BEVERAGES",
    },
  ];

  const icons = [
    {
      id: 1,
      src: "/assets/Chef/Chef01.png",
      alt: "Professionals",
      title: "Professionals",
      description:
        "We are highly skilled and experienced in our field, ensuring that every product meets the highest standards.",
    },
    {
      id: 2,
      src: "/assets/Quality/Quality01.png",
      alt: "Quality",
      title: "Quality",
      description:
        "Only the best ingredients and strict quality control allow us to deliver outstanding results.",
    },
    {
      id: 3,
      src: "/assets/Education/Book001.png",
      alt: "Education",
      title: "Education",
      description:
        "We provide educational materials and training for anyone interested in learning our craft.",
    },
    {
      id: 4,
      src: "/assets/Presentaion/Presentaion01.png",
      alt: "Presentation",
      title: "Presentation",
      description:
        "How we serve our products is just as important as their quality. We deliver visually stunning and delicious products.",
    },
  ];

  return (
    <>
      {/* Product Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <h2 className="text-black text-3xl font-bold mb-10 text-left">
              Product
              <p className="text-sm  sm:text-base font-normal mt-5">
              Cafe Eiffel is a French-inspired bakery and café offering high-quality food and beverages. With warm hospitality and a cozy ambiance,
              we strive to create memorable dining experiences for our customers.
            </p>
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {product.map((item) => (
                <div key={item.id} className="text-center">
                  {/* Image Box */}
                  <a
                    href={item.Image}
                    data-fancybox="gallery"
                    data-caption={item.name}
                    className="block"
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg mb-4">
                      <img
                        src={item.Image}
                        alt={item.name}
                        className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </a>
                  {/* Name and Description */}
                  <h3 className="text-lg font-semibold text-black">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Menu Image Section */}
      <section className="w-full h-full">
        <img
          src="/assets/Product/MenuAll.jpg"
          alt="Eiffel"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12">
              Eiffel Bakery combines expert craftsmanship with premium ingredients
              to create delicious and visually stunning baked goods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    {icon.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {icon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourproduct;