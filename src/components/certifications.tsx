import React, { useState, useEffect, useRef } from 'react';

interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    credentialUrl?: string;
    image?: string;
    skills: string[];
}

const certificationsData: Certification[] = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "December 2024",
        credentialId: "AWS-SAA-123456",
        credentialUrl: "https://aws.amazon.com/verification",
        skills: ["Cloud Architecture", "AWS Services", "Security", "Networking"]
    },
    {
        id: 2,
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (via Coursera)",
        date: "October 2024",
        credentialId: "META-FED-789012",
        credentialUrl: "https://coursera.org/verify",
        skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"]
    },
    {
        id: 3,
        title: "Google UX Design Professional Certificate",
        issuer: "Google (via Coursera)",
        date: "August 2024",
        credentialId: "GOOGLE-UX-345678",
        credentialUrl: "https://coursera.org/verify",
        skills: ["User Research", "Wireframing", "Prototyping", "Figma"]
    },
    {
        id: 4,
        title: "Microsoft Certified: Azure Developer Associate",
        issuer: "Microsoft",
        date: "June 2024",
        credentialId: "MS-AZ-204-901234",
        credentialUrl: "https://learn.microsoft.com/certifications",
        skills: ["Azure", "Cloud Development", ".NET", "DevOps"]
    },
    {
        id: 5,
        title: "Certified Scrum Master (CSM)",
        issuer: "Scrum Alliance",
        date: "March 2024",
        credentialId: "CSM-567890",
        credentialUrl: "https://scrumalliance.org/verify",
        skills: ["Agile", "Scrum", "Project Management", "Team Leadership"]
    }
];

const Certifications: React.FC = () => {
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
        <section id="certifications" className="bg-white py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div 
                    ref={(el) => { sectionRefs.current['header'] = el; }}
                    className={`mb-12 transition-all duration-1000 ${
                        visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Certifications
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
                        Certifications
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Professional certifications and credentials that validate my expertise 
                        and commitment to continuous learning.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div 
                    ref={(el) => { sectionRefs.current['certs'] = el; }}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
                        visibleSections.has('certs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    {certificationsData.map((cert, index) => (
                        <div 
                            key={cert.id}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Certificate Icon */}
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <svg 
                                    className="w-6 h-6 text-blue-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                                    />
                                </svg>
                            </div>

                            {/* Certificate Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {cert.title}
                            </h3>

                            {/* Issuer */}
                            <p className="text-blue-600 font-medium text-sm mb-2">
                                {cert.issuer}
                            </p>

                            {/* Date */}
                            <p className="text-gray-500 text-sm mb-4">
                                Issued: {cert.date}
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {cert.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Credential ID & Link */}
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 mb-2">
                                    Credential ID: {cert.credentialId}
                                </p>
                                {cert.credentialUrl && (
                                    <a 
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        Verify Credential
                                        <svg 
                                            className="w-4 h-4 ml-1" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                            />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
