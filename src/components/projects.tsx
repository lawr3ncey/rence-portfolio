import React from 'react';

// Project data - Update with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One, highlighting its features and technologies used.",
    image: "/images/sample1.png", // Add your project screenshot here
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://example.com", // Add your live project URL
    githubLink: "https://github.com/yourusername/project1" // Add your GitHub repo URL
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two, highlighting its features and technologies used.",
    image: "/images/sample2.png", // Add your project screenshot here
    technologies: ["Node.js", "Express", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three, highlighting its features and technologies used.",
    image: "/images/sample3.png", // Add your project screenshot here
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project3"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-gray-50">
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
                    pointer-events-none mb-12
                "
                >
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technologies Used */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
    )
}
export default Projects;