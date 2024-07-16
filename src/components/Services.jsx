import React, { useRef } from 'react';

const services = [
  {
    title: 'Graphics & Animation Support',
    description: 'Elevate your brand with stunning graphics and animations that captivate and engage your audience.',
    image: '/servicesimg/services1.png',
  },
  {
    title: 'Content Support',
    description: 'Drive engagement with compelling content that resonates with your audience and boosts your brand\'s online presence.',
    image: '/servicesimg/services2.png',
  },
  {
    title: 'Video Editing',
    description: 'Transform your raw footage into polished, professional videos that tell your brand\'s story and captivate viewers.',
    image: '/servicesimg/services2.png',
  },
  {
    title: 'Application Development',
    description: 'Turn your ideas into powerful, user-friendly applications that enhance your business and delight your customers.',
    image: '/servicesimg/services3.png',
  },
  {
    title: 'Web Development',
    description: 'Create a seamless online experience with a visually stunning and highly functional website that stands out in the digital world.',
    image: '/servicesimg/services3.png',
  },
  {
    title: 'Review Seeding',
    description: 'Build trust and credibility with authentic reviews that highlight your brand’s strengths and attract new customers.',
    image: '/servicesimg/services3.png',
  },
  {
    title: 'Target-Based Offline Marketing',
    description: 'Reach your audience where they are with strategic offline marketing campaigns tailored to your brand’s unique goals.',
    image: '/servicesimg/services3.png',
  },
  {
    title: 'Influencer Marketing',
    description: 'Partner with influential voices to expand your reach, increase brand awareness, and drive impactful engagement.',
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
