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

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
            <a href="#resume" className="btn-primary text-sm sm:text-base text-center">
              My Resume
            </a>

            <a href="#projects" className="btn-secondary text-sm text-center">
              My Portfolio
            </a>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I am a Microsoft Certified Full Stack Developer with hands-on DevOps experience, building responsive
            and user-friendly web applications using React, TypeScript, Node.js, and more. Beyond development,
            I manage Linux-based server infrastructure, CI/CD pipelines, and production deployments. I also have
            experience developing applications using Unity and React Native. I focus on clean design, accessibility,
            performance, and reliable infrastructure.
            <br></br>
            <br></br>
            With my Microsoft Full Stack Developer Professional Certificate, I bring expertise in frontend development,
            backend systems, and DevOps infrastructure — from writing code to deploying and maintaining it in production.
            I value collaboration and user-centered design, and my background in Computer Science allows me to build
            full-stack systems that balance functionality, performance, and usability.
            I’m continuously learning and currently exploring AI integration and emerging technologies
            to create smarter and more innovative digital experiences.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero
