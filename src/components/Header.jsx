import React from 'react';


const Header = () => {
  return (
    <header className="bg-black p-4 z-10 flex justify-between items-center sticky top-0 border-b border-gray-800 rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-center">
        <img src="\src\assets\logo.png" alt="Logo" className="h-10 mr-3" />
      </div>
      <nav className="flex items-center space-x-4 mr-6">
        <a href="#home" className="text-white">Home</a>
        <a href="#services" className="text-white">Services</a>
        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full shadow-lg transition duration-300">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
