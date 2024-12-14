import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl">

        {/* Column 1 : Logo and contact Info */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Eiffel Bakery & Cafe</h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta at esse consectetur
          </p>
          <p className="mt-4 text-lg font-medium">123456789</p>
          <p className="text-sm">EiffelBakeryCafe@gmail.com</p>
        </div>

        {/* Column 2 : Menu Navigation */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Menu Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Our Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 : Images */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4">Our Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Example images */}
            <Image
              src="/assets/test01/01.png"
              alt="Image 1"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Image
              src="/assets/test01/01.png"
              alt="Image 2"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Image
              src="/assets/test01/01.png"
              alt="Image 3"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Image
              src="/assets/test01/01.png"
              alt="Image 4"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Image
              src="/assets/test01/01.png"
              alt="Image 5"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <Image
              src="/assets/test01/01.png"
              alt="Image 6"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-bold uppercase">Follow Us</h3>
          <div className="flex justify-start space-x-4">
            <a href="#" className="flex items-center p-2 pt-5">
              <Image
                src="/assets/Icon/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="flex items-center p-2 pt-5">
              <Image
                src="/assets/Icon/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="flex items-center p-2 pt-5">
              <Image
                src="/assets/Icon/line.png"
                alt="Line"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer