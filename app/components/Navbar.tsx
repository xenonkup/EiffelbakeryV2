import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "News", href: "#" },
    { name: "Our Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-transparent absolute top-0 left-0 w-full z-30 p-4">
        <div className="container mx-auto flex items-center justify-between py-4 max-w-7xl relative">

          {/* Mobile Hamburger Button */}
          <button className="md:hidden z-10" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>


          {/* Mobile Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/assets/Logo/Eiffel.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] object-contain"
            />
          </div>

          <div className="hidden md:flex w-full items-center">
            {/* Desktop Left Navigation */}
            <ul className="flex flex-1 justify-end space-x-6 uppercase text-white tracking-wide">
              {navItems.slice(0, 3).map((item) => (
                <li key={item.name} className="text-base lg:text-xl xl:text-2xl">
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300 rounded-xl px-2 py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Logo (centered) */}
            <div className="flex justify-center w-[200px]">
              <img
                src="/assets/Logo/Eiffel.jpg"
                alt="Logo"
                className="w-[100px] h-[100px] object-contain"
              />
            </div>

            {/* Desktop Right Navigation */}
            <ul className="flex flex-1 justify-start space-x-6 uppercase text-white tracking-wide">
              {navItems.slice(3).map((item) => (
                <li key={item.name} className="text-base lg:text-xl xl:text-2xl">
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300 rounded-xl px-2 py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Mobile Sliding Menu */}
          <div
            className={`fixed top-0 left-0 bg-white z-10 h-full transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} shadow-lg ease-in-out duration-300
            w-2/3 sm:w-3/4 md:w-1/2 lg:w-1/3`}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b">
              <p className="text-2xl font-medium">Eiffelbakery</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 focus:outline-none transition-all duration-300"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L17.94 6M18 18L6.06 6"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col pt-8 px-6">
              {navItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <a
                    href={item.href}
                    className="text-left text-lg font-medium text-gray-800 uppercase hover:bg-black/50 hover:text-white rounded-lg transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
