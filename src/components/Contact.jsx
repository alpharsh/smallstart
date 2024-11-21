import React from "react";

const Contact = () => {
  return (
    <div className="py-12 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl text-white font-bold hero-title">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          We'd love to hear from you! Fill out the form below or reach us
          directly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3 shadow-lg rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full lg:w-1/3 space-y-6 p-2">
          <div className="bg-gray-200 shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold text-red-500">Contact Info</h3>
            <p className="text-gray-600 mt-4">
              <strong>Email:</strong> sales@smallstart.com
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Address:</strong> Prayagraj, India
            </p>
          </div>

          {/* Google Map */}
          <div className="bg-gray-200 shadow-lg rounded-lg p-4 ">
            <h3 className="text-xl font-semibold text-red-500 mb-1">
              Our Location
            </h3>
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28765.123456789!2d81.846311!3d25.435801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534b1b1b1b1b1%3A0x1234567890abcdef!2sPrayagraj%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1615992624207!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
