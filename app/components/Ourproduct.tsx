import React, { useState, useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

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
      <section className="py-16 bg-white">
        <div className="flex justify-center">
          <div className="container w-full px-4 sm:w-[500px] lg:w-2/3">
            {/* Header */}
            <h2 className="text-black text-4xl font-bold mb-12 text-center">
              Product
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {product.map((item) => (
                <div key={item.id} className="text-center">
                  {/* Image Box */}
                  <a
                    href={item.Image} // Link to image for Fancybox
                    data-fancybox="gallery"
                    data-caption={item.name} // Optional caption for Fancybox
                  >
                    <div
                      className="rounded-lg overflow-hidden shadow-lg"
                      style={{
                        backgroundColor: "#292929",
                        width: "100%",
                        height: "250px",
                        margin: "0 auto"
                      }}
                    >
                      <img
                        src={item.Image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  {/* Name and Description */}
                  <h3 className="text-lg font-semibold text-black mt-4">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Menu Image Section */}
      <section className="w-full min-h-screen">
        <div>
          <img
            src="/assets/Product/MenuAll.jpg"
            alt="Eiffel"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            Eiffel Bakery combines expert craftsmanship with premium ingredients
            to create delicious and visually stunning baked goods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {icons.map((icon) => (
              <div key={icon.id} className="flex flex-col items-center">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={100}
                  height={100}
                  className="w-28 h-28 mb-4"
                />
                <h3 className="text-lg font-semibold">{icon.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{icon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Ourproduct;
