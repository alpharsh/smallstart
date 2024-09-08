import React from "react";
import CallToAction from "./CallToAction";

const ServicesPage = () => {
  return (
    <>
      {/* Title Section */}
      <div className="bg-gradient-to-b from-[#9300006b] to-black text-white h-52 md:h-60 flex justify-center items-center">
        <div className="container mx-auto text-center ">
          <h2 className="text-5xl md:text-7xl font-bold hero-title">
            <span className="text-red-500">OUR </span>SERVICES
          </h2>
        </div>
      </div>

      <section className="text-white py-12 pb-0 px-6">
        <div className="container mx-auto space-y-10 md:space-y-20 w-11/12">
          {/* Graphic & Animation Support */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/graphic.png"
                alt="Graphic & Animation Support"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-3xl text-center md:text-left md:text-6xl font-medium mb-4">
                Graphic & Animation Support
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                In a world dominated by visual content, compelling designs and
                animations can make or break your brand's message. Our talented
                team of graphic designers and animators is dedicated to creating
                stunning visuals that not only capture attention but also
                communicate your brand's identity effectively. Whether it's
                eye-catching social media graphics, website designs, motion
                graphics, or animated explainer videos, we ensure every piece of
                creative work aligns with your vision and engages your target
                audience.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/content.png"
                alt="Content Support"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-4xl text-center md:text-left md:text-6xl font-medium mb-4">
                Content Support
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                Your brand's voice is one of its most valuable assets. From
                well-researched blog posts and SEO-optimized web content to
                social media copy and email marketing campaigns, we offer a full
                suite of content services designed to inform, educate, and
                convert. Our content team crafts engaging and purposeful
                narratives that reflect your brand's ethos while driving traffic
                and fostering connections with your audience.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/video.png"
                alt="Video Editing"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-4xl text-center md:text-left md:text-6xl font-medium mb-4">
                Video Editing
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                Videos have become the most powerful tool for online
                communication, and we understand how important it is to create
                visually compelling and high-quality content. Our video editing
                services are designed to turn raw footage into polished,
                professional videos that tell your story in an engaging way.
                From corporate videos and product demos to promotional clips and
                social media videos, we take care of the editing process,
                ensuring seamless transitions, top-notch sound design, and
                high-definition visuals that leave a lasting impression.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/appdev.png"
                alt="Content Support"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-[2.22rem] text-center md:text-left md:text-6xl font-medium mb-4">
                App Development
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                In today’s fast-evolving digital landscape, a custom-built
                application can be a game-changer for your business. Our
                developers specialize in creating innovative, scalable, and
                secure mobile and web applications that cater to your business
                needs. Whether you’re looking to build a new eCommerce platform,
                an internal tool, or a customer-facing app, we prioritize user
                experience and functionality, ensuring that your app is
                responsive, intuitive, and easy to navigate, giving you a
                competitive edge in the marketplace.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/webdev.png"
                alt="Video Editing"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-[2.15rem] text-center md:text-left md:text-6xl font-medium mb-4">
                Web Development
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                Your website is often the first interaction potential clients
                have with your brand, and we make sure that first impression
                counts. Our web development team combines cutting-edge
                technology with creative design to build websites that are
                visually appealing, fully responsive, and optimized for search
                engines. From eCommerce platforms to corporate websites and
                personal portfolios, we ensure your site is fast, secure, and
                optimized for a seamless user experience. Let us help you turn
                visitors into loyal customers.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/offlinemark.png"
                alt="Content Support"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-4xl text-center md:text-left md:text-6xl font-medium mb-4">
                Offline Marketing
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                While the world is shifting to digital, traditional marketing
                still holds immense value in building a brand. Our offline
                marketing services focus on reaching your audience through
                tangible channels such as print media, radio, television, and
                outdoor advertising. Whether you’re planning a product launch, a
                local event, or a brand awareness campaign, our offline
                strategies work hand-in-hand with your digital marketing efforts
                to create a cohesive and impactful brand presence.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/corpvid.png"
                alt="Video Editing"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-[1.94rem] text-center md:text-left md:text-6xl font-medium mb-4">
                Influencer Marketing
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                Influencers can help bridge the gap between your brand and a
                wider, more engaged audience. We work with a network of trusted
                influencers across various industries and platforms to ensure
                your brand message reaches the right people. By leveraging
                influencers who genuinely resonate with your brand values, we
                create authentic and impactful campaigns that drive brand
                awareness, increase engagement, and ultimately result in
                conversions. Let us help you identify the perfect influencers
                who align with your vision.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>

          <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/servicespageimg/corpgift.png"
                alt="Content Support"
                className="w-2/3 md:w-3/5"
              />
            </div>
            <div className="md:w-1/2 md:text-left">
              <h3 className="text-[2.2rem] text-center md:text-left md:text-6xl font-medium mb-4">
                Corporate Gifting
              </h3>
              <p className="text-lg text-[#AFAFAF]">
                Corporate gifting is a powerful way to express gratitude to
                clients and employees, strengthen business relationships, and
                leave a lasting impression. We offer personalized corporate
                gifting solutions that reflect the uniqueness of your brand.
                Whether you’re looking to send custom gift hampers, branded
                merchandise, or exclusive tokens of appreciation, our corporate
                gifting services are designed to make your recipients feel
                valued and remembered. We ensure the highest quality and
                attention to detail in every gift we curate.
              </p>
            </div>
          </div>
          <div className="border-t border-[#AFAFAF] w-full my-0 md:my-8"></div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default ServicesPage;
