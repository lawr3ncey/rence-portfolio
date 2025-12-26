import React, { useState, useEffect, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_yecdr5s';
const EMAILJS_TEMPLATE_ID = 'template_vk3ebyb';
const EMAILJS_PUBLIC_KEY = 'rWKiPm9GBz-9jVzh9';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const observers = Object.entries(sectionRefs.current).map(([key, element]) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(key));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject || 'No Subject',
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            

            {/* Right Column - Get in Touch */}
            <div>
              <div 
                ref={(el) => { sectionRefs.current['header'] = el; }}
                className={`mb-8 transition-all duration-1000 ${
                  visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >

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
              <div 
                ref={(el) => { sectionRefs.current['cards'] = el; }}
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-200 ${
                  visibleSections.has('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                
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
              <div 
                ref={(el) => { sectionRefs.current['social'] = el; }}
                className={`transition-all duration-1000 delay-400 ${
                  visibleSections.has('social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Me On</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            btn-icon
                            text-[#4b5563]
                              group
                              w-10 h-10
                              flex items-center justify-center
                              rounded-full
                              bg-gray-100
                              hover:bg-gradient-to-tr
                              hover:from-yellow-400
                              hover:via-pink-500
                              hover:to-purple-600
                            "
                          >
                            <FaInstagram className="text-lg group-hover:text-white transition" />
                          </a>
                </div>
              </div>

            </div>

            {/* Left Column - Contact Form */}
            <div 
              ref={(el) => { sectionRefs.current['form'] = el; }}
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.has('form') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errorMessage}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message here..."
                    required
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto btn-primary text-sm sm:text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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