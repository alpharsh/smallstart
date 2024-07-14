import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-white text-black py-10 px-6 md:pb-20 rounded-t-3xl">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        <img src="/logo-dark.png" alt="Small Start AI" className="md:w-56 w-48 " />
                        <p className="text-center md:text-left mx-auto md:w-[32rem] font-light">
                            We provide app development, website development and digital marketing services. We can help you achieve success with proven track record in the market.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-8 md:mb-0">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold">Headquarters</h4>
                            <p className='text-gray-700'>Prayagraj, India</p>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold">Sales</h4>
                            <p className='text-gray-700'>sales@smallstart.com</p>
                        </div>
                        <div>
                            <h4 className="font-bold">General Inquiries</h4>
                            <p className='text-gray-700'>team@smallstartai.com</p>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold ">Follow Us</h4>
                            <div className='ml-0  flex flex-row justify-between text-2xl md:space-x-2'>
                                <a href="https://instagram.com" target="_blank">
                                    <i class="fa-brands fa-instagram"></i></a>
                                <a href="https://facebook.com" target="_blank" >
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className=" bg-gradient-to-r from-[#FF0000] via-[#DE0000] to-[#990000] h-8  flex justify-center items-center text-sm text-white">
                © 2024 SmallStart.ai All rights reserved.
            </div>
        </>
    );
}

export default Footer;
