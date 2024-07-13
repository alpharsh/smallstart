import React from 'react';

const testimonials = [
  {
    name: "Rahul Verma",
    handle: "Stealth Company",
    text: "This firm elevated our online presence! Amazing content, stunning product photos, and effective influencer campaigns.",
    avatar: "\src\assets\testimonialsimg\man1.png"
  },
  {
    name: "Khushi",
    handle: "FitFashionista88",
    text: "Their SEO and content expertise put my fitness brand on the map! Highly recommend.",
    avatar: "\src\assets\testimonialsimg\women1.png"
  },
  {
    name: "TechStartUpGuru",
    handle: "TechStartUpGuru",
    text: "This firm's full-service approach rocketed our startup's online success. Killer website, content, and influencers!",
    avatar: "\src\assets\testimonialsimg\man2.png"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-red-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-white">TESTIMONIALS</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          What Our Clients Say!
        </h3>
      </div>
      <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-black text-white">
            <div className="flex-shrink-0">
              <img className="h-32 w-32 mx-auto rounded-full mt-4" src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <blockquote className="mt-2">
                <p className="text-lg leading-7 italic">"{testimonial.text}"</p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-medium text-white">{testimonial.handle}</p>
                <p className="text-base font-medium text-white">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
