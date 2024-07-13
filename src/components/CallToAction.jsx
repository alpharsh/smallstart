import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative text-white rounded-3xl overflow-hidden mx-auto shadow-lg p-12 text-center gradient-to-b md:w-3/4 h-[#369]">
        <h4 className="text-2xl font-semibold mb-2 text-[#202020]">ARE YOU READY</h4>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 mx-auto md:w-7/12">Take Your Business To Next Level</h2>
        <button className="bg-black text-white text-xl py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300 w-[206.18px] h-[67.97px]">Contact Us</button>
      </div>
    </div>
  );
}

export default CallToAction;