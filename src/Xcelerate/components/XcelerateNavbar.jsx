import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function XcelerateNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", url: "/" },
    { text: "Events", url: "/Events" },
    { text: "Gallery", url: "/Gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-finance-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/xcelerate" className="flex items-center gap-2 group">
           <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-finance-green transition-colors">
            Xcelerate <span className="text-finance-green">2.0</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-finance-green transition-colors relative group"
            >
              {item.text}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-finance-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Register Button (Desktop) */}
        <div className="hidden md:block">
           <button className="px-6 py-2 border border-finance-green text-finance-green text-sm uppercase tracking-wider hover:bg-finance-green hover:text-black transition-all duration-300">
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-finance-black border-b border-white/10 p-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="text-gray-300 hover:text-finance-green text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
            <button className="w-full py-3 border border-finance-green text-finance-green hover:bg-finance-green hover:text-black transition-all">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default XcelerateNavbar;
