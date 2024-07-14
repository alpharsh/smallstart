import React from 'react';
import Header from './Header';

const Hero = () => {
    return (
        <>
        <Header />
        <section className=" bg-gradient-to-b from-black/100 to-[#282828]/100 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 pt-0 pb-0">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="hero-title text-5xl font-bold mb-4">
                                Small Start.<span className="text-red-500">AI</span>
                            </h1>
                            <p className="text-lg text-[#AFAFAF] mb-8 pr-9">
                                SmallStart is a tech and social media company providing app development, website development and digital marketing services. We can help you achieve success with proven track record in the market.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                        <img src="/img1.png" alt="Hero" className="w-full md:w-2/3 lg:w-4/5" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-3">
                <div className="bg-red-500 rounded-full h-3 w-3 mx-1"></div>
                <div className="bg-gray-400 rounded-full h-3 w-3 mx-1"></div>
                <div className="bg-gray-400 rounded-full h-3 w-3 mx-1"></div>
                <div className="bg-gray-400 rounded-full h-3 w-3 mx-1"></div>
            </div>
        </section>
        </>
    );
}

export default Hero;
