import React, { useRef } from 'react';

const services = [
  {
    title: 'Product Photography',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services1.png',
  },
  {
    title: 'Content Writing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services2.png',
  },
  {
    title: 'Content Writing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services2.png',
  },
  {
    title: 'Influencer Marketing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services3.png',
  },
  {
    title: 'Influencer Marketing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services3.png',
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-black md:mt-20 text-white py-12 px-6 mx-auto md:w-3/4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg mb-8 text-[#AFAFAF] mx-auto md:w-2/3">
          At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
        </p>
        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition duration-300">
          <i className="fas fa-chevron-left"></i>
          </button>
          <div ref={scrollRef} className="flex overflow-x-scroll space-x-6 scrollbar-hide">
            {services.map((service, index) => (
              <div key={index} className="group bg-[#262626] rounded-3xl overflow-hidden shadow-lg w-80 flex-shrink-0 border border-custom-gray hover:shadow-custom2">
                <div className='overflow-hidden'>
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="mb-4 text-[#AFAFAF]">{service.description}</p>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-red-700 mx-auto w-4/5">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition duration-300">
          <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
