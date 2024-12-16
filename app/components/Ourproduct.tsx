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
      <section id="Our Products" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-black text-4xl font-extrabold mb-6 text-left">
              Product
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed sm:leading-loose max-w-3xl">
              Cafe Eiffel is a French-inspired bakery and café offering high-quality food and beverages.
              With warm hospitality and a cozy ambiance, we strive to create memorable dining experiences
              for our customers.
            </p>
            <div className="border-t border-gray-300 mt-6 w-24"></div>


            <section className="grid grid-cols-3 md:grid-cols-3 gap-4">
              {[
                ["/assets/OurGallery/Cr01.jpg", "/assets/OurGallery/ORGANIC8.jpg", "/assets/OurGallery/LEMON-TART.jpg"],
                ["/assets/OurGallery/cake7.jpg", "/assets/OurGallery/ORGANIC14.jpg", "/assets/OurGallery/cake3.jpg"],
                ["/assets/OurGallery/Mille-feuille.jpg", "/assets/OurGallery/ORGANIC7.jpg", "/assets/OurGallery/cake8.jpg"],
              ].map((column, i) => (
                <div key={i} className="grid gap-4">
                  {column.map((src, idx) => (
                    <Image
                      key={idx}
                      className="h-full w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                      src={src}
                      alt={`Image ${i}-${idx}`}
                      width={500}
                      height={500}
                    />
                  ))}
                </div>
              ))}
            </section>
          </div>
        </div>
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
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={600}
                    height={600}
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
}; export default Ourproduct;