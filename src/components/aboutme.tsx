import React from 'react';

const Aboutme: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Content */}
          <div>

            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Me
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
              About Me
            </h2>
            
            {/* Description Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-12">
              I'm a passionate software developer with a focus on creating meaningful digital 
              experiences. With expertise in modern web technologies and a keen eye for design, 
              I transform ideas into functional, user-friendly applications.
            </p>

            {/* Numbered Info Blocks - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Block 1 */}
              <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                <div className="text-5xl font-bold text-blue-600">01</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Clean Code
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Writing maintainable, scalable code that follows industry best practices 
                  and clean architecture principles.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                <div className="text-5xl font-bold text-blue-600">02</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  User-Focused
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Designing intuitive interfaces with accessibility and user experience 
                  at the forefront of every decision.
                </p>
              </div>

              {/* Block 3 */}
              <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                <div className="text-5xl font-bold text-blue-600">03</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Responsive Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building fully responsive applications that deliver seamless experiences 
                  across all devices and screen sizes.
                </p>
              </div>

              {/* Block 4 */}
              <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                <div className="text-5xl font-bold text-blue-600">04</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Problem Solving
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tackling complex challenges with creative solutions and a systematic 
                  approach to debugging and optimization.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Large Image - Spans 2 rows */}
            <div className="row-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop"
                  alt="Coding workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top Right Image */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                  alt="Development tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Right Image */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
                  alt="Code editor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Full Width Image */}
            <div className="col-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-40">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Aboutme