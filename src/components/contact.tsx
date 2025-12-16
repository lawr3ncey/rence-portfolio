import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            

            {/* Right Column - Get in Touch */}
            <div>
              <div className="mb-8">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Contact
                </h2>

                {/* Reflection */}
                <h2
                    className="
                        text-4xl md:text-5xl font-bold
                        transform scale-y-[-1]
                        opacity-40
                        bg-[linear-gradient(to_top,rgba(17,24,39,3)_0%,rgba(17,24,39,0.4)_40%,rgba(17,24,39,0.05)_70%,rgba(17,24,39,0)_100%)]
                        bg-clip-text text-transparent
                        pointer-events-none
                    "
                    >
                Contact
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Have a project in mind or just want to chat? Feel free to reach out. 
                  I'm always open to discussing new opportunities, creative ideas, or 
                  partnerships.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                
                {/* Phone */}
                <div className="flex items-start space-x-3  bg-white shadow-lg rounded-md p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-sm text-gray-600">+63 993 326 8212</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3  bg-white shadow-lg rounded-md p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-sm text-[#4b5563]">babelonialawrence@gmail.com</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-3 bg-white shadow-lg rounded-md p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaGlobe className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Website</h4>
                    <p className="text-sm text-[#4b5563]"> <a href= "https://lawrence-babelonia.vercel.app/">https://lawrence-babelonia.vercel.app/</a> </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 bg-white shadow-lg rounded-md p-6">
                  <div className="flex-shrink-0 w-10 h-10  rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-sm text-[#4b5563]">4528 V. Francisco Street, Sta. Mesa, Manila, Philippines</p>
                  </div>
                </div>

              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Me On</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>

            </div>

            {/* Left Column - Contact Form */}
            <div>
              <form className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm sm:text-base font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact