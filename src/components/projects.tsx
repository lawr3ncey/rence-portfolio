import React, { useState, useEffect, useRef } from 'react';
import { projectsData, Project } from '../data/projectsData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // NEW: Animation lock
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Helper to detect if URL is a video
  const isVideo = (url: string) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(url) || url.includes('cloudinary.com/video/');
  };

  // Circular index helpers (unchanged)
  const getNextIndex = () =>
    selectedProject
      ? (currentImageIndex + 1) % selectedProject.images.length
      : 0;

  const getPrevIndex = () =>
    selectedProject
      ? (currentImageIndex - 1 + selectedProject.images.length) %
        selectedProject.images.length
      : 0;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setDirection(null);
    setIsAnimating(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsAnimating(false);
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const enterFullscreen = () => {
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
  };

  // ✅ UNIFIED NAVIGATION FUNCTION - Single source of truth for all slide changes
  const changeSlide = (slideDirection: 'next' | 'prev') => {
    if (!selectedProject || isAnimating) return; // Lock during animation
    
    // Clear any drag offset immediately to prevent snap-back
    setDragOffset(0);
    setIsAnimating(true);
    setDirection(slideDirection);
  };

  // Animation complete handler - updates index and unlocks navigation
  const handleAnimationEnd = () => {
    if (direction === 'next') {
      setCurrentImageIndex(getNextIndex());
    } else if (direction === 'prev') {
      setCurrentImageIndex(getPrevIndex());
    }
    setDirection(null);
    setIsAnimating(false);
  };

  // NEW: Unified thumbnail click handler
  const handleThumbnailClick = (index: number) => {
    if (!selectedProject || isAnimating) return;
    
    if (index === currentImageIndex) return; // Already on this image
    
    // Determine direction for animation
    const newDirection = index > currentImageIndex ? 'next' : 'prev';
    setIsAnimating(true);
    setDirection(newDirection);
    
    // Use setTimeout to allow animation to start before index update
    setTimeout(() => {
      setCurrentImageIndex(index);
      setDirection(null);
      setIsAnimating(false);
    }, 600); // Match animation duration
  };

  // Touch/Drag handlers
  const handleDragStart = (clientX: number) => {
    if (isAnimating) return;
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || isAnimating) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      // Swipe right = prev, swipe left = next
      changeSlide(dragOffset > 0 ? 'prev' : 'next');
    } else {
      // Under threshold - snap back to center smoothly
      setDragOffset(0);
    }
  };

  // Touch events (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events (desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Animation state and refs (unchanged)
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
                    <div className="relative h-48 bg-gray-900 overflow-hidden">
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
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10 shadow-lg">
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
                      <div 
                        className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden select-none"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseLeave}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                      >
                        {/* CURRENT MEDIA (slides out) */}
                        {isVideo(selectedProject.images[currentImageIndex]) ? (
                          <video
                            key={`current-${currentImageIndex}`}
                            src={selectedProject.images[currentImageIndex]}
                            controls
                            className={`absolute inset-0 w-full h-full object-contain pointer-events-auto ${
                              direction === 'next'
                                ? 'animate-slide-out-left'
                                : direction === 'prev'
                                ? 'animate-slide-out-right'
                                : ''
                            }`}
                            style={{
                              transform: dragOffset !== 0 && !direction ? `translateX(${dragOffset}px)` : undefined,
                              transition: !isDragging && !direction ? 'transform 0.2s ease-out' : 'none'
                            }}
                          />
                        ) : (
                          <img
                            key={`current-${currentImageIndex}`}
                            src={selectedProject.images[currentImageIndex]}
                            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${
                              direction === 'next'
                                ? 'animate-slide-out-left'
                                : direction === 'prev'
                                ? 'animate-slide-out-right'
                                : ''
                            }`}
                            style={{
                              transform: dragOffset !== 0 && !direction ? `translateX(${dragOffset}px)` : undefined,
                              transition: !isDragging && !direction ? 'transform 0.2s ease-out' : 'none'
                            }}
                          />
                        )}

                        {/* INCOMING MEDIA (slides in) */}
                        {direction && (
                          <>
                            {isVideo(
                              direction === 'next'
                                ? selectedProject.images[getNextIndex()]
                                : selectedProject.images[getPrevIndex()]
                            ) ? (
                              <video
                                key={`incoming-${direction === 'next' ? getNextIndex() : getPrevIndex()}`}
                                src={
                                  direction === 'next'
                                    ? selectedProject.images[getNextIndex()]
                                    : selectedProject.images[getPrevIndex()]
                                }
                                controls
                                className={`absolute inset-0 w-full h-full object-contain pointer-events-auto ${
                                  direction === 'next'
                                    ? 'animate-slide-in-from-right'
                                    : 'animate-slide-in-from-left'
                                }`}
                                onAnimationEnd={handleAnimationEnd}
                              />
                            ) : (
                              <img
                                key={`incoming-${direction === 'next' ? getNextIndex() : getPrevIndex()}`}
                                src={
                                  direction === 'next'
                                    ? selectedProject.images[getNextIndex()]
                                    : selectedProject.images[getPrevIndex()]
                                }
                                alt={`${selectedProject.title} screenshot ${
                                  (direction === 'next' ? getNextIndex() : getPrevIndex()) + 1
                                }`}
                                className={`absolute inset-0 w-full h-full object-cover ${
                                  direction === 'next'
                                    ? 'animate-slide-in-from-right'
                                    : 'animate-slide-in-from-left'
                                }`}
                                onAnimationEnd={handleAnimationEnd}
                              />
                            )}
                          </>
                        )}
                        
                        {/* Image Navigation Buttons - NOW USING changeSlide() */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={() => changeSlide('prev')}
                              disabled={isAnimating}
                              aria-label="Previous image"
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              ‹
                            </button>
                            <button
                              onClick={() => changeSlide('next')}
                              disabled={isAnimating}
                              aria-label="Next image"
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-2 px-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              ›
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {selectedProject.images.length}
                            </div>
                          </>
                        )}

                        {/* Fullscreen Button */}
                        <button
                          onClick={enterFullscreen}
                          aria-label="View fullscreen"
                          className="absolute bottom-3 left-3 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                          title="View fullscreen"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>

                      {/* Image Thumbnails */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
                          {selectedProject.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => handleThumbnailClick(index)}
                              disabled={isAnimating}
                              className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden transition-all ${
                                currentImageIndex === index 
                                  ? 'border-blue-600 scale-105' 
                                  : 'border-gray-300 hover:border-gray-400'
                              } ${isAnimating ? 'opacity-50 cursor-wait' : ''}`}
                            >
                              {isVideo(img) ? (
                                <div className="relative w-full h-full">
                                  <img
                                    src="/images/3d-campus/3d-campus.jpg"
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[25px] h-[25px] rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-lg">
                                      <svg className="w-4 h-4 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <img
                                  src={img}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Full Description */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Project</h3>
                      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} />
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

            {/* Fullscreen View */}
            {isFullscreen && selectedProject && (
              <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center">
                {/* Exit Fullscreen Button */}
                <button
                  onClick={exitFullscreen}
                  aria-label="Exit fullscreen"
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Fullscreen Media */}
                {isVideo(selectedProject.images[currentImageIndex]) ? (
                  <video
                    src={selectedProject.images[currentImageIndex]}
                    controls
                    autoPlay
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1} - Fullscreen`}
                    className="max-w-full max-h-full object-contain"
                  />
                )}

                {/* Navigation in Fullscreen */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => changeSlide('prev')}
                      disabled={isAnimating}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => changeSlide('next')}
                      disabled={isAnimating}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ›
                    </button>

                    {/* Image Counter in Fullscreen */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>
            )}
        </div>
    </section>
    )
}
export default Projects;