import React from 'react';

const testimonials = [
  {
    name: "Rahul Verma",
    handle: "Stealth Company",
    text: "This firm elevated our online presence! Amazing content, stunning product photos, and effective influencer campaigns.",
    avatar: "/testimonialsimg/man1.png"
  },
  {
    name: "Khushi",
    handle: "FitFashionista88",
    text: "Their SEO and content expertise put my fitness brand on the map! Highly recommend.",
    avatar: "/testimonialsimg/women1.png"
  },
  {
    name: "TechStartUpGuru",
    handle: "TechStartUpGuru",
    text: "This firm's full-service approach rocketed our startup's online success. Killer website, content, and influencers!",
    avatar: "/testimonialsimg/man2.png"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#460500] to-[#230503] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-white">TESTIMONIALS</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          What Our Clients Say!
        </h3>
      </div>
      <div className="mt-32 w-3/4 mx-auto grid gap-20 lg:grid-cols-3 lg:max-w-none">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative flex flex-col rounded-2xl shadow-lg bg-black text-white p-4">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <img
                className="h-32 w-32 rounded-full"
                src={testimonial.avatar}
                alt={testimonial.name}
              />
            </div>
            <div className="flex-1 pt-14 flex flex-col justify-between items-center text-center">
              <blockquote className="md:px-4">
                <p className="text-lg leading-7 italic">"{testimonial.text}"</p>
              </blockquote>
              <div className="mt-6">
                <p className="text-base font-semibold">
                  <svg style={{ display: "inline", verticalAlign: "top", paddingRight: "2px" }} vertical-align="top" width="12" height="13" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.69908 1.62496L4.45285 7.73045L2.67826 8.21562C2.86914 7.83106 3.09221 7.51041 3.34746 7.25366C3.63471 6.99682 3.93834 6.86794 4.25834 6.86701C4.99433 6.86486 5.66726 7.18291 6.27712 7.82113C6.91889 8.42727 7.24117 9.21033 7.24397 10.1703C7.24686 11.1623 6.89738 12.0273 6.19552 12.7654C5.49367 13.5034 4.64675 13.8739 3.65475 13.8768C2.69475 13.8796 1.84573 13.5301 1.10768 12.8282C0.401544 12.0943 0.0469826 11.2153 0.0440003 10.1913C0.0427887 9.7753 0.12139 9.29507 0.279805 8.7506C0.470127 8.17405 0.788029 7.45312 1.23351 6.58781L4.76648 0.0494984L7.69908 1.62496ZM16.3859 1.59966L13.1397 7.70515L11.3651 8.19032C11.556 7.80576 11.779 7.48511 12.0343 7.22836C12.3216 6.97152 12.6252 6.84264 12.9452 6.84171C13.6812 6.83956 14.3541 7.15761 14.964 7.79583C15.6057 8.40196 15.928 9.18503 15.9308 10.145C15.9337 11.137 15.5842 12.002 14.8824 12.7401C14.1805 13.4781 13.3336 13.8486 12.3416 13.8515C11.3816 13.8543 10.5326 13.5048 9.79452 12.8029C9.08838 12.069 8.73382 11.19 8.73084 10.166C8.72963 9.75 8.80823 9.26977 8.96664 8.7253C9.15697 8.14875 9.47487 7.42782 9.92035 6.56251L13.4533 0.0241983L16.3859 1.59966Z" fill="white" />
                </svg>{testimonial.handle}</p>
                <p className="text-base text-start font-extralight ml-3">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
