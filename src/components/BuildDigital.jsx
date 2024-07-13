import React from 'react';

const BuildDigital = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold">WE BUILD</h2>
        <h2 className="text-5xl font-bold">YOU DIGITALLY</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <img src="\src\assets\digitalimg\digital1.png" alt="We Build" className="w-full mb-4" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Who We Are ?</h3>
            <p className="text-lg">
              At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">Built for Your Business</h3>
            <p className="text-lg mb-4">
              At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
            </p>
          </div>
          <img src="\src\assets\digitalimg\digital2.png" alt="Business" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default BuildDigital;
