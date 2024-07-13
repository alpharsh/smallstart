import React from 'react';

const Clients = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-montserrat-alternates">GROW YOUR BUSINESS</h2>
        <p className=" text-lg mb-8 text-[#AFAFAF] mx-auto w-2/3">
          Small Start is a tech and social media company providing app development, website development and digital marketing service. We can help you achieve success with proven track record in the market.
        </p>
        <h3 className="text-2xl font-semibold mb-6">Our Satisfied Clients</h3>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
          <img src="\src\assets\clientimg\client1.png" alt="Client 1" className="h-16" />
          <img src="\src\assets\clientimg\client2.png" alt="Client 3" className="h-16" />
          <img src="\src\assets\clientimg\client3.png" alt="Client 2" className="h-16" />
          <img src="\src\assets\clientimg\client4.png" alt="Client 4" className="h-16" />
          <img src="\src\assets\clientimg\client5.png" alt="Client 5" className="h-16" />
          <img src="\src\assets\clientimg\client6.png" alt="Client 6" className="h-16" />
        </div>
      </div>
    </section>
  );
}

export default Clients;