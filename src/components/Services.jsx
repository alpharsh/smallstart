import React, { useRef } from 'react';

const services = [
  {
    title: 'Graphics & Animation Support',
    description: 'Elevate your brand with stunning graphics and animations that captivate and engage your audience.',
    image: 'https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Content Support',
    description: 'Drive engagement with compelling content that resonates with your audience and boosts your brand\'s online presence.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Video Editing',
    description: 'Transform your raw footage into polished, professional videos that tell your brand\'s story and captivate viewers.',
    image: 'https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Application Development',
    description: 'Turn your ideas into powerful, user-friendly applications that enhance your business and delight your customers.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Web Development',
    description: 'Create a seamless online experience with a visually stunning and highly functional website that stands out in the digital world.',
    image: 'https://images.unsplash.com/photo-1558174685-430919a96c8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Recruitment & Staffing Services',
    description: 'Build trust and credibility with authentic reviews that highlight your brand’s strengths and attract new customers.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Offline Marketing',
    description: 'Reach your audience where they are with strategic offline marketing campaigns tailored to your brand’s unique goals.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Influencer Marketing',
    description: 'Partner with influential voices to expand your reach, increase brand awareness, and drive impactful engagement.',
    image: 'https://plus.unsplash.com/premium_photo-1665203450678-f225f576b509?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scrollByCard = (direction) => {
    const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 24; // Card width + margin
    scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="bg-black md:mt-20 text-white py-12 px-6 mx-auto lg:max-w-[1200px] md:w-3/4 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg mb-8 text-[#AFAFAF] mx-auto md:w-2/3">
          At SmallStart, we offer a range of services to help your business succeed. From app development and website development to digital marketing and more, we have everything you need to take your business to the next level.
        </p>
        <div className="relative">
          <button onClick={() => scrollByCard(-1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div ref={scrollRef} className="flex overflow-x-scroll space-x-6 rounded-3xl scrollbar-hide mx-auto w-[93%]">
            {services.map((service, index) => (
              <div key={index} className="group bg-[#262626] rounded-3xl overflow-hidden shadow-lg w-full md:w-80 flex-shrink-0 border border-custom-gray">
                <div className='overflow-hidden'>
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:scale-105" />
                </div>
                <div className="p-5 ">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="mb-4 text-[#AFAFAF]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scrollByCard(1)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
