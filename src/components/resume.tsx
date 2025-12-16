import React, { useState, useEffect, useRef } from 'react';

const Resume: React.FC = () => {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

    return (
        <section id="resume" className="bg-gray-50 py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div 
                    ref={(el) => { sectionRefs.current['header'] = el; }}
                    className={`mb-12 transition-all duration-1000 ${
                        visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Resume
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
                        Resume
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        A comprehensive overview of my professional journey, technical expertise, 
                        and educational background.
                    </p>
                </div>

                {/* Work Experience Section */}
                <div 
                    ref={(el) => { sectionRefs.current['work'] = el; }}
                    className={`mb-16 transition-all duration-1000 delay-200 ${
                        visibleSections.has('work') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-blue-600 mr-3"></span>
                        Work Experience
                    </h3>

                    <div className="space-y-8">
                        {/* Job 1 */}
                        <div className="relative pl-8 border-l-2 border-gray-300">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h4 className="text-xl font-semibold text-gray-900">Senior Software Developer</h4>
                                <span className="text-sm text-gray-500 mt-1 sm:mt-0">Jan 2022 - Present</span>
                            </div>
                            <p className="text-blue-600 font-medium mb-3">Tech Solutions Inc.</p>
                            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                                <li>Led development of responsive web applications using React, TypeScript, and Tailwind CSS</li>
                                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                                <li>Implemented CI/CD pipelines and improved deployment efficiency by 40%</li>
                                <li>Mentored junior developers and conducted code reviews</li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="relative pl-8 border-l-2 border-gray-300">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h4 className="text-xl font-semibold text-gray-900">Frontend Developer</h4>
                                <span className="text-sm text-gray-500 mt-1 sm:mt-0">Jun 2020 - Dec 2021</span>
                            </div>
                            <p className="text-blue-600 font-medium mb-3">Digital Agency Corp.</p>
                            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                                <li>Built and maintained multiple client websites with focus on performance and accessibility</li>
                                <li>Developed reusable component libraries to streamline development process</li>
                                <li>Optimized web applications resulting in 50% faster load times</li>
                                <li>Worked closely with designers to implement pixel-perfect UI/UX</li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div className="relative pl-8 border-l-2 border-gray-300">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h4 className="text-xl font-semibold text-gray-900">Junior Web Developer</h4>
                                <span className="text-sm text-gray-500 mt-1 sm:mt-0">Jan 2019 - May 2020</span>
                            </div>
                            <p className="text-blue-600 font-medium mb-3">StartUp Innovations</p>
                            <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                                <li>Assisted in developing web applications using HTML, CSS, JavaScript, and React</li>
                                <li>Fixed bugs and implemented new features based on user feedback</li>
                                <li>Participated in agile development process and daily stand-ups</li>
                                <li>Gained experience in version control using Git and GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div 
                    ref={(el) => { sectionRefs.current['education'] = el; }}
                    className={`mb-16 transition-all duration-1000 delay-400 ${
                        visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-blue-600 mr-3"></span>
                        Education
                    </h3>

                    <div className="space-y-6">
                        {/* Degree 1 */}
                         <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                                <span className="text-sm text-gray-500 mt-1 sm:mt-0">2015 - 2019</span>
                            </div>
                            <p className="text-blue-600 font-medium mb-2">University of Technology</p>
                            <p className="text-gray-600 text-sm">
                                Graduated with honors. Focused on software engineering, web development, 
                                and database management systems.
                            </p>
                        </div>

                        {/* Degree 2 / Certification */}
                         <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-xl font-semibold text-gray-900">Full Stack Web Development Bootcamp</h4>
                                <span className="text-sm text-gray-500 mt-1 sm:mt-0">2018</span>
                            </div>
                            <p className="text-blue-600 font-medium mb-2">Code Academy Online</p>
                            <p className="text-gray-600 text-sm">
                                Intensive 6-month program covering modern web technologies including React, 
                                Node.js, Express, MongoDB, and RESTful APIs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div 
                    ref={(el) => { sectionRefs.current['skills'] = el; }}
                    className={`transition-all duration-1000 delay-600 ${
                        visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-blue-600 mr-3"></span>
                        Skills & Technologies
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Frontend Skills */}
                        <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">JavaScript</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CSS3</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tailwind CSS</span>
                            </div>
                        </div>

                        {/* Backend Skills */}
                         <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Backend</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Express</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">MongoDB</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">PostgreSQL</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">REST APIs</span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">GraphQL</span>
                            </div>
                        </div>

                        {/* Tools & Others */}
                         <div className="space-y-2 bg-white shadow-lg rounded-md p-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tools & Others</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Git</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">GitHub</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">VS Code</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Figma</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Agile</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Docker</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Resume