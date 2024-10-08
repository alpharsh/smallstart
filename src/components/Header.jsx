import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black bg-opacity-40 backdrop-blur-xl p-3 z-20 flex justify-between items-center sticky top-0 border-b border-custom-gray rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-9 md:pl-6 pr-3 mr-3" />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-4 md:mr-6">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/services" className="text-white">
          Services
        </Link>
        <Link
          to="/contact"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300"
        >
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none mr-3"
        >
          <i
            className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
            style={{ fontSize: "1.3em" }}
          ></i>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-2 rounded-xl mx-auto w-3/4 bg-black flex flex-col items-center space-y-4 p-4 md:hidden animate-fadeIn">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
