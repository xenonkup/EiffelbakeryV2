import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#Homes" },
    { name: "About Us", href: "#About Us" },
    { name: "News", href: "#News" },
    { name: "Our Products", href: "#Our Products" },
    { name: "Contact", href: "#Contact" },
  ];

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event handler
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close the menu when screen size is larger than the mobile breakpoint
      }
    };
    /// Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // open the menu on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when the component unmounts
    };
  }, [isMenuOpen]);


  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-3 transition-all duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        ${isScrolled ? "bg-black/70 text-white shadow-lg" : "bg-transparent text-white"}`}
      >
        <div>
          {/* Mobile Hamburger Button */}
          <button className="md:hidden z-10 pt-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors duration-300"
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
          <div id="Home" className="absolute top-0 left-1/2 transform -translate-x-1/2 md:hidden pt-1">
            <a href="#Homes">
            <Image
              src="/assets/Logo/logow1.png"
              alt="Mobile Logo"
              width={1000}
              height={1000}
              className="w-[50px] h-[50px] object-contain"
            />
            </a>
          </div>


          {/* Mobile Sliding Menu */}
          <div
            className={`fixed top-0 left-0 h-screen bg-white z-50 
            shadow-xl flex flex-col transform transition-transform duration-500 
            ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            w-[70%] max-w-sm overflow-hidden`}
          >

            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b">
              <p className="text-2xl font-medium text-black ">Eiffelbakery</p>
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
                    className="block text-left text-lg font-medium text-black uppercase rounded-lg hover:bg-black/50
                    hover:text-white transition-all duration-300 px-4 py-2 w-full"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full items-center">

            {/* Left Navigation */}
            <ul className="flex flex-1 justify-end space-x-6 uppercase tracking-wide">
              {navItems.slice(0, 3).map((item) => (
                <li
                  key={item.name}
                  className="relative text-xs lg:text-sm xl:text-base transition-all duration-300"
                >
                  <a
                    href={item.href}
                    className="inline-block px-2 py-1 transform transition-transform duration-300 hover:-translate-y-1 hover:text-gray-500"
                  >
                    {item.name}
                    {/* เส้นใต้ */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Logo */}
            <div className="hidden md:flex justify-center w-[200px] pt-1 pb-1">
              <a href="#Homes">
             <Image
                src="/assets/Logo/logow1.png"
                alt="Desktop Logo"
                width={1000}
                height={1000}
                className="w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] object-contain"
              />
              </a>
            </div>


            {/* Right Navigation */}
            <ul className="flex flex-1 justify-start space-x-6 uppercase tracking-wide">
              {navItems.slice(3).map((item) => (
                <li
                  key={item.name}
                  className="relative text-xs lg:text-sm xl:text-base transition-all duration-300"
                >
                  <a
                    href={item.href}
                    className="inline-block px-2 py-1 transform transition-transform duration-300 hover:-translate-y-1 hover:text-gray-500"
                  >
                    {item.name}
                    {/* เส้นใต้ */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-500 transition-all duration-300 hover:w-full"></span>
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
