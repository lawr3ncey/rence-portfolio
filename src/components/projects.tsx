import React, { useState, useEffect, useRef } from 'react';

// Project data - Update with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project One. Here you can explain the problem it solves, your role in the project, challenges faced, and key features implemented. Add as much detail as you'd like about the architecture, design decisions, and technologies used.",
    images: [
      "/images/sample1.png",
      "/images/sample1.png",
      "/images/sample1.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "Owned", // "Owned" or "Contributed"
    role: "Full Stack Developer",
    duration: "3 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Two. Explain your contributions, the team size, what you learned, and the impact of the project. Include technical challenges and how you overcame them.",
    images: [
      "/images/sample2.png",
      "/images/sample2.png",
      "/images/sample2.png"
    ],
    technologies: ["Node.js", "Express", "MongoDB"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "2 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Three. Discuss the scope of the project, your specific contributions, technologies you mastered, and the outcomes achieved. Share any metrics or results if applicable.",
    images: [
      "/images/sample3.png",
      "/images/sample3.png",
      "/images/sample3.png"
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    type: "Owned",
    role: "Lead Developer",
    duration: "4 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project3"
  },
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project One. Here you can explain the problem it solves, your role in the project, challenges faced, and key features implemented. Add as much detail as you'd like about the architecture, design decisions, and technologies used.",
    images: [
      "/images/sample1.png",
      "/images/sample1.png",
      "/images/sample1.png"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "Owned", // "Owned" or "Contributed"
    role: "Full Stack Developer",
    duration: "3 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Two. Explain your contributions, the team size, what you learned, and the impact of the project. Include technical challenges and how you overcame them.",
    images: [
      "/images/sample2.png",
      "/images/sample2.png",
      "/images/sample2.png"
    ],
    technologies: ["Node.js", "Express", "MongoDB"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "2 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Three. Discuss the scope of the project, your specific contributions, technologies you mastered, and the outcomes achieved. Share any metrics or results if applicable.",
    images: [
      "/images/sample3.png",
      "/images/sample3.png",
      "/images/sample3.png"
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    type: "Owned",
    role: "Lead Developer",
    duration: "4 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project3"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Animation state and refs
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            <div 
              ref={headerRef}
              className={`transition-all duration-1000 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <div 
                    key={project.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    onClick={() => openModal(project)}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 cursor-pointer hover:scale-105 ${
                      visibleCards.has(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${(index % 3) * 150}ms` }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.images[0]}
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
                      
                      <p className="text-blue-600 text-sm font-medium">Click to view details →</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={closeModal}
              >
                <div 
                  className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    {/* Image Gallery with Navigation */}
                    <div className="relative mb-6">
                      <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Image Navigation Buttons */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 rounded-full transition-all"
                            >
                              ‹
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 rounded-full transition-all"
                            >
                              ›
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {selectedProject.images.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Image Thumbnails */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-2 mt-3 overflow-x-auto">
                          {selectedProject.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                                currentImageIndex === index 
                                  ? 'border-blue-600' 
                                  : 'border-gray-300'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Type & Role */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                        selectedProject.type === 'Owned' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {selectedProject.type}
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                        {selectedProject.role}
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                        Duration: {selectedProject.duration}
                      </span>
                    </div>

                    {/* Full Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Project</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Live Project
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
    </section>
    )
}
export default Projects;