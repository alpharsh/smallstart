import React from 'react';

const BuildDigital = () => {

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold">WE BUILD</h2>
        <h2 className="text-5xl font-bold">YOU DIGITALLY</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-col items-center justify-between px-6 space-y-8 md:space-y-0">
        <div className="relative md:w-3/4 mx-auto flex flex-col md:flex-row items-center md:items-center">
          <div className='relative w-full md:w-1/2 flex justify-center items-center mb-8'>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="md:w-64 w-40 h-52 md:h-64 rounded-full bg-red-600 opacity-60 blur-3xl"></div>
            </div>
            <img src="/digitalimg/digital1.png" alt="We Build" className="w-full mb-4 relative z-10" />
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <div className='flex flex-col justify-center'>
              <h3 className="md:text-5xl text-4xl font-bold mb-4">Who We Are ?</h3>
              <p className="text-lg text-[#AFAFAF] leading-tight">
                At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
              </p>
            </div>
          </div>
        </div>

        <div className="relative md:w-3/4 mx-auto flex flex-col items-center md:flex-row-reverse md:items-center">
          <div className='relative w-full md:w-1/2 flex justify-center items-center mb-8'>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="md:w-64 w-40 h-52 md:h-64 rounded-full bg-red-600 opacity-60 blur-3xl"></div>
            </div>
            <img src="/digitalimg/digital2.png" alt="Business" className="w-full relative z-10" />
          </div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <div className='flex flex-col justify-center'>
              <h3 className="md:text-5xl text-4xl font-bold mb-4">Built for Your Business</h3>
              <p className="text-lg text-[#AFAFAF] leading-tight">
                At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildDigital;
