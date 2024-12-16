import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        className={`fixed top-0 left-0 w-full z-30 px-4 py-5 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
          } ${isScrolled ? "bg-white/80 backdrop-blur-md shadow text-black" : "bg-transparent text-white"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 max-w-7xl relative">
          {/* Mobile Hamburger Button */}
          <button className="md:hidden z-10" onClick={toggleMenu}>
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
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/assets/Logo/Eiffel.jpg"
              alt="Logo"
              className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] object-contain"
            />
          </div>

          {/* Mobile Sliding Menu */}
          <div
            className={`fixed top-0 left-0 h-screen bg-white z-50 shadow-xl flex flex-col
            transform transition-transform duration-500 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            w-[75%] max-w-sm overflow-hidden`}
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
                    className="block text-left text-lg font-medium text-black uppercase rounded-lg hover:bg-black/50 hover:text-white transition-all duration-300 px-4 py-2 w-full"
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
                  className="text-base lg:text-xl xl:text-2xl transition-colors duration-300"
                >
                  <a
                    href={item.href}
                    className="hover:text-gray-500 rounded-xl px-2 py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Centered Logo */}
            <div className="flex justify-center w-[200px]">
              <img
                src="/assets/Logo/Eiffel.jpg"
                alt="Logo"
                className="w-[100px] h-[100px] object-contain"
              />
            </div>

            {/* Right Navigation */}
            <ul className="flex flex-1 justify-start space-x-6 uppercase tracking-wide">
              {navItems.slice(3).map((item) => (
                <li
                  key={item.name}
                  className="text-base lg:text-xl xl:text-2xl transition-colors duration-300"
                >
                  <a
                    href={item.href}
                    className="hover:text-gray-500 rounded-xl px-2 py-1"
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
