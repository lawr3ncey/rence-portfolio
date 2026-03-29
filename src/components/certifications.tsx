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
        title: "Microsoft Full-Stack Developer",
        issuer: "Microsoft (via Coursera)",
        date: "January 2026",
        credentialId: "8Q6HL8OBWQL6",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/8Q6HL8OBWQL6",
        skills: ["C#", "ASP.NET", "Full-Stack Development", ".NET Core", "Azure DevOps", "SQL", "Blazor", "Authentication"]
    },
    {
        id: 2,
        title: "Machine Learning with Python",
        issuer: "freeCodeCamp",
        date: "January 2026",
        credentialId: "lawrence_babelonia/machine-learning-with-python-v7",
        credentialUrl: "https://www.freecodecamp.org/certification/lawrence_babelonia/machine-learning-with-python-v7",
        skills: ["Python", "Machine Learning", "TensorFlow", "Neural Networks", "Data Science", "NumPy", "Pandas"]
    },
    {
        id: 3,
        title: "IBM DevOps and Software Engineering",
        issuer: "IBM (via Coursera)",
        date: "February 2026",
        credentialId: "MRGOJ4731FZS",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/MRGQI4731FZS",
        skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "OpenShift", "Microservices", "Agile", "Scrum", "Python", "Linux", "Shell Scripting", "GitHub Actions", "Serverless", "Test-Driven Development"]
    },
    {
        id: 4,
        title: "Python Project for AI & Application Development",
        issuer: "IBM (via Credly)",
        date: "January 2026",
        credentialId: "416e5250-7308-43f0-9c05-adc4799ddad3",
        credentialUrl: "https://www.credly.com/badges/416e5250-7308-43f0-9c05-adc4799ddad3/linked_in_profile",
        skills: ["Python", "AI", "Flask", "Application Development", "API Integration"]
    },
    {
        id: 5,
        title: "Academy Accreditation - Generative AI Fundamentals",
        issuer: "Databricks",
        date: "January 2026",
        credentialId: "9cc6ab2f-9b40-4533-be86-02ea186951a2",
        credentialUrl: "https://credentials.databricks.com/9cc6ab2f-9b40-4533-be86-02ea186951a2",
        skills: ["Generative AI", "LLMs", "Databricks", "AI Fundamentals"]
    },
    {
        id: 6,
        title: "Digital Transformation with Google Cloud",
        issuer: "Google Cloud Skills",
        date: "January 2026",
        credentialId: "21373471",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21373471",
        skills: ["Google Cloud", "Digital Transformation", "Cloud Strategy"]
    },
    {
        id: 7,
        title: "Machine Learning Operations (MLOps) for Generative AI",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21107438",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21107438",
        skills: ["MLOps", "Generative AI", "Google Cloud", "Machine Learning"]
    },
    {
        id: 8,
        title: "Responsible AI: Applying AI Principles with Google Cloud",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21107226",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21107226",
        skills: ["Responsible AI", "AI Ethics", "Google Cloud"]
    },
    {
        id: 9,
        title: "Prompt Design in Vertex AI",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21104933",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21104933",
        skills: ["Prompt Engineering", "Vertex AI", "Google Cloud", "Generative AI"]
    },
    {
        id: 10,
        title: "Introduction to Responsible AI",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21077208",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21077208",
        skills: ["Responsible AI", "AI Ethics", "Google Cloud"]
    },
    {
        id: 11,
        title: "Introduction to Generative AI",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21077194",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21077194",
        skills: ["Generative AI", "LLMs", "Google Cloud"]
    },
    {
        id: 12,
        title: "Introduction to Large Language Models",
        issuer: "Google Cloud Skills",
        date: "December 2025",
        credentialId: "21077163",
        credentialUrl: "https://www.skills.google/public_profiles/13ea0262-a6cb-4d64-8636-831782aef8ad/badges/21077163",
        skills: ["LLMs", "NLP", "Google Cloud", "Generative AI"]
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
