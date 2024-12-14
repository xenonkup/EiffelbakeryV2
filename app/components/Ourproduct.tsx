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
            dragFree: true, // เปิดใช้งานการ Swipe
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
    </>
  );
};

export default Ourproduct;
