import React from 'react';

const services = [
  {
    title: 'Product Photography',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: 'src/assets/servicesimg/services1.png',
  },
  {
    title: 'Content Writing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: 'src/assets/servicesimg/services2.png',
  },
  {
    title: 'Influencer Marketing',
    description: 'Our Influencer Marketing service is a game-changer for brands seeking to broaden their audience reach and increase brand awareness.',
    image: 'src/assets/servicesimg/services3.png',
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg mb-8 text-[#AFAFAF] mx-auto w-2/3">
          At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
        </p>
        <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#262626] rounded-lg overflow-hidden shadow-lg w-full md:w-1/4 p-4">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 text-[#AFAFAF]">{service.description}</p>
                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-red-700">
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
