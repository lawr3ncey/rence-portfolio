import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from "./profilecard"

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">

      {/* Beige background block - hidden on mobile, visible on larger screens */}

      {/* Content */}
      <div 
        ref={heroRef}
        className={`flex flex-col md:flex-row items-center w-full gap-6 md:gap-[4%] justify-center sm:px-8 md:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        {/* Left - Profile Card */}
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <ProfileCard />
        </div>

        {/* Right - Hero Content */}
        <div className={`max-w-xl text-center md:text-left transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Hello</h1>
          <p className="text-gray-600 mb-6 font-bold text-base sm:text-lg">Here's what I can do</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm sm:text-base font-semibold">
              My Resume
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 text-sm font-semibold">
              My Portfolio
            </button>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I am a software developer who builds responsive and user-friendly web applications using modern technologies. 
            I also have experience developing applications using Unity and React Native. 
            I focus on clean design, accessibility, and performance, and I enjoy turning ideas into functional, 
            well-structured solutions.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero
