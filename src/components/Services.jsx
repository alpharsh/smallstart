import React from 'react';

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
    title: 'Influencer Marketing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: '/servicesimg/services3.png',
  },
];

const Services = () => {
  return (
    <section className="bg-black md:mt-20 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg mb-8 text-[#AFAFAF] mx-auto md:w-2/3">
          At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
        </p>
        <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-[#262626] rounded-3xl overflow-hidden shadow-lg w-full md:w-1/4 hover:shadow-custom2" style={{ border: '1px solid rgba(107, 114, 128, 0.3)' }}>
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
      </div>
    </section>
  );
}

export default Services;
