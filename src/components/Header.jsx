import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-4 z-10 flex justify-between items-center sticky top-0 border-b border-gray-800 rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mr-3" />
      </div>
      <nav className="hidden md:flex items-center space-x-4 md:mr-6">
        <a href="#home" className="text-white">Home</a>
        <a href="#services" className="text-white">Services</a>
        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300">Contact</a>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`}></i>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 p-4 md:hidden">
          <a href="#home" className="text-white">Home</a>
          <a href="#services" className="text-white" >Services</a>
          <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
