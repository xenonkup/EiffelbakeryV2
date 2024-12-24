import Image from "next/image";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-6">
      
      {/* เส้น Border ด้านบน */}
      <div className="w-full">
        <div className="border-t border-gray-300 w-full max-w-screen-2xl mx-auto pb-5"></div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-4 px-6 md:px-10">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
          <p className="sm:inline-block">More channels to contact us</p>
          <div className="flex gap-3 justify-center sm:justify-start">
            <a href="https://www.facebook.com/EiffelBakery?locale=th_TH" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/cafeeiffel_bakery" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://page.line.me/yly8794k?oat_referrer=PROFILE&openQrModal=true" target="_blank" rel="noopener noreferrer">
              <FaLine size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center sm:justify-end gap-2">
          {/* โลโก้ */}
          <a href="" className="flex items-center">
            <Image
              src="/assets/Logo/logossd.webp"
              alt="Logo"
              width={100}
              height={100}
              className="hidden sm:block"
            />
          </a>

          {/* เส้นคั่น */}
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>

          {/* ข้อความลิขสิทธิ์ */}
          <p className="text-sm text-gray-600 text-center sm:text-left">
            Copyright © 2024 <span className="font-semibold italic">Siam Sindhorn Co., Ltd.</span> All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
