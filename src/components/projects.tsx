import React from 'react';
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Projects
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
              Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                 <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Project One
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        A brief description of Project One, highlighting its features and technologies used.
                    </p>
                </div>
                {/* Project Card 2 */}
                 <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Project Two
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        A brief description of Project Two, highlighting its features and technologies used.
                    </p>
                </div>
                {/* Project Card 3 */}
                 <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Project Three
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        A brief description of Project Three, highlighting its features and technologies used.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Projects;