import React from 'react';

const Clients = () => {
  return (
    <>
      <section className="bg-black text-white py-12 pb-0 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-montserrat-alternates">GROW YOUR BUSINESS</h2>
          <p className=" text-lg mb-8 text-[#AFAFAF] mx-auto md:w-2/3">
            Small Start is a tech and social media company providing app development, website development and digital marketing service. We can help you achieve success with proven track record in the market.
          </p>
          <h3 className="text-2xl font-semibold mb-6">Our Satisfied Clients</h3>
        </div>
      </section>
      <div className="logos overflow-hidden relative">
        <div className="logos-slide flex items-center">
          <img src="/clientimg/client1.png" alt="Client 1" className="h-16 mx-4" />
          <img src="/clientimg/client2.png" alt="Client 2" className="h-16 mx-4" />
          <img src="/clientimg/client3.png" alt="Client 3" className="h-16 mx-4" />
          <img src="/clientimg/client4.png" alt="Client 4" className="h-16 mx-4" />
          <img src="/clientimg/client5.png" alt="Client 5" className="h-16 mx-4" />
          <img src="/clientimg/client6.png" alt="Client 6" className="h-16 mx-4" />
          {/* Repeating logos to create the infinite effect */}
          <img src="/clientimg/client1.png" alt="Client 1" className="h-16 mx-4" />
          <img src="/clientimg/client2.png" alt="Client 2" className="h-16 mx-4" />
          <img src="/clientimg/client3.png" alt="Client 3" className="h-16 mx-4" />
          <img src="/clientimg/client4.png" alt="Client 4" className="h-16 mx-4" />
          <img src="/clientimg/client5.png" alt="Client 5" className="h-16 mx-4" />
          <img src="/clientimg/client6.png" alt="Client 6" className="h-16 mx-4" />
          <img src="/clientimg/client1.png" alt="Client 1" className="h-16 mx-4" />
          <img src="/clientimg/client2.png" alt="Client 2" className="h-16 mx-4" />
          <img src="/clientimg/client3.png" alt="Client 3" className="h-16 mx-4" />
          <img src="/clientimg/client4.png" alt="Client 4" className="h-16 mx-4" />
          <img src="/clientimg/client5.png" alt="Client 5" className="h-16 mx-4" />
          <img src="/clientimg/client6.png" alt="Client 6" className="h-16 mx-4" />
        </div>
      </div>
    </>
  );
}

export default Clients;
