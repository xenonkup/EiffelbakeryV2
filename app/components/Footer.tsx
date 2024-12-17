import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-5">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-4">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
          <p className="sm:inline-block">More channels to contact us</p>
          <div className="flex gap-3 justify-center sm:justify-start">
            <a href="https://www.facebook.com/EiffelBakery?locale=th_TH" target="_blank">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/cafeeiffel_bakery" target="_blank">
              <FaInstagram size={24} />
            </a>
            <a href="https://page.line.me/yly8794k?oat_referrer=PROFILE&openQrModal=true" target="_blank">
              <FaLine size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mt-4 sm:mt-0">
          <p className="text-sm">Eiffel Bakery | Copyright © 2024 Siam Sindhorn Co., Ltd. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
