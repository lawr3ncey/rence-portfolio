// Project TypeScript Interface
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  images: string[]; // Supports both images and videos (mixed media)
  technologies: string[];
  type: "Owned" | "Contributed";
  role: string;
  duration: string;
  liveLink?: string;
  githubLink?: string;
}

// Centralized Project Data
export const projectsData: Project[] = [
  {
    id: 1,
    title: "EARIST Cavite 3D Campus: Implementing A* Algorithm, Ray Casting and NLP for Voice Assistance",
    description: "A brief description of Project One, highlighting its features and technologies used.",
    fullDescription: "The EARIST Cavite 3D Campus Guide is an interactive navigation system designed to help students, visitors, and staff efficiently explore the campus through a realistic 3D environment. The system solves the common problem of campus disorientation by providing an intuitive way to locate buildings, facilities, and destinations with guided navigation.<br><br> At the core of the system is a Shortest Path Finder that utilizes the A* (A-Star) algorithm to calculate the most efficient route between two points within the campus. Ray Casting is implemented to accurately detect walkable paths, obstacles, and user interactions within the 3D space, ensuring reliable and realistic navigation.<br><br> The system also integrates voice assistance, allowing users to receive audio guidance and feedback while navigating, improving accessibility and user experience. Interactive UI elements enable users to select destinations, view paths in real time, and quickly identify important landmarks such as main buildings and emergency exits.<br><br> This project demonstrates the application of algorithms, 3D visualization, and user-centered design in building a smart campus solution. It was developed as both an academic and practical system, showcasing how modern technologies can enhance wayfinding, safety, and digital transformation in educational institutions.",
    images: [
      "/images/3d-campus/3D-1.jpg",
      "https://res.cloudinary.com/dvdojy5eq/video/upload/EARIST_CAVITE_ADAPTIVE_3D_CAMPUS_GUIDE_AVP_-_Made_with_Clipchamp_2_nt1dhj.mp4",
      "/images/3d-campus/3D-2.jpg",
      "/images/3d-campus/3D-3.jpg",
      "/images/3d-campus/3D-4.jpg",
      "/images/3d-campus/3D-5.png",
      "/images/3d-campus/3D-6.png",
      "/images/3d-campus/3D-7.png",
      "/images/3d-campus/3D-8.png",
      "/images/3d-campus/3D-9.png"
    ],
    technologies: ["Unity3D", "C#", "NLP Algorithm", "A* Algorithm", "Ray Casting", "Text-to-Speech", "Speech-to-Text"],
    type: "Owned",
    role: "Full Stack Developer",
    duration: "3 months",
    liveLink: "https://example.com",
    githubLink: "https://github.com/lawr3ncey/Earist-Cavite-3D-Map"
  },
  {
    id: 2,
    title: "Alpha Premier Group Website",
    description: "A brief description of Project Two, highlighting its features and technologies used.",
    fullDescription: "A corporate website and internal system developed during our internship program. The project was built using Vanilla (HTML, CSS, JavaScript), PHP, and MySQL, focusing on performance, data handling, and backend logic. I was primarily assigned to the backend development, where I worked on database integration, server-side functionality, and system logic to support dynamic content and internal operations.",
    images: [
      "/images/alpha-premier/alpha.jpg",
      "/images/alpha-premier/alpha-2.jpg",
      "/images/alpha-premier/alpha-3.jpg",
      "/images/alpha-premier/alpha-4.jpg"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Vanilla"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "2 months",
    liveLink: "https://alphapremiergroup.com/",
    githubLink: "#"
  },
  {
    id: 3,
    title: "BeautyConnect – Booking & Order Platform (Custom WordPress Development)",
    description: "A brief description of Project Three, highlighting its features and technologies used.",
    fullDescription: "BeautyConnect Book Orders is a custom-built booking and order management platform developed on WordPress with a fully customized theme, using HTML, CSS, JavaScript, and PHP. The system is designed to streamline service reservations by allowing users to submit detailed booking requests through a structured, multi-field form interface. The platform focuses on user-friendly booking flow, backend data handling, and efficient order management, making it suitable for service-based businesses that require organized customer requests and admin-side processing.",
    images: [
      "/images/beauty-connect/bc-1.jpg",
      "/images/beauty-connect/bc-2.jpg",
      "/images/beauty-connect/bc-3.jpg",
      "/images/beauty-connect/bc-4.jpg",
      "/images/beauty-connect/bc-5.jpg",
      "/images/beauty-connect/bc-6.jpg",
      "/images/beauty-connect/bc-7.jpg",
      "/images/beauty-connect/bc-8.jpg"
    ],
    technologies: ["WordPress (Custom Theme)", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Jquery"],
    type: "Owned",
    role: "Lead Developer",
    duration: "4 months",
    liveLink: "https://beautyconnect.us/",
    githubLink: "#"
  },
  {
    id: 4,
    title: "3D Beauty Product Showcase – Technical Challenge Project (Animations and Interactive UI)",
    description: "A brief description of Project Four, highlighting its features and technologies used.",
    fullDescription: "A 3D interactive beauty product showcase built as a technical challenge to exceed company requirements, featuring real-time 3D rendering, smooth user interactions, and performance-focused front-end development. A modern interactive hero slider built with React + Swiper.js, featuring smooth 3D animations, scroll-triggered transitions, and a fully responsive mobile view. This project was developed as part of a challenge to demonstrate animation, responsiveness, and UI design skills.",
    images: [
      "/images/beauty-products/bp-1.png",
      "/images/beauty-products/bp-2.png",
      "/images/beauty-products/bp-3.png"
    ],
    technologies: ["React.js", "Swiper.js", "CSS3", "CSS keyframes"],
    type: "Contributed",
    role: "Frontend Developer",
    duration: "2 months",
    liveLink: "https://3d-beauty-product.netlify.app/",
    githubLink: "https://github.com/lawr3ncey/beauty-product-challenge"
  },
  {
    id: 5,
    title: "Elavate Results Training & Consulting Website",
    description: "A brief description of Project Five, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Five. Share the impact of the project, your role in the team, key learnings, and the technologies you worked with.",
    images: [
      "/images/elevate-results/erta-1.jpg",
      "/images/elevate-results/erta-2.jpg",
      "/images/elevate-results/erta-3.jpg",
      "/images/elevate-results/erta-4.jpg",
      "/images/elevate-results/erta-5.jpg",
      "/images/elevate-results/erta-6.jpg",
      "/images/elevate-results/erta-7.jpg"
    ],
    technologies: ["WordPress", "Elementor", "Paymongo", "WooCommerce"],
    type: "Owned",
    role: "Full Stack Developer",
    duration: "5 months",
    liveLink: "https://elevateresultsph.com/",
    githubLink: "#"
  },
  {
    id: 6,
    title: "OutSource: Customers Index",
    description: "A brief description of Project Six, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Six. Explain the business problem, your solution approach, the team dynamics, and the outcomes achieved.",
    images: [
      "/images/out-source/outSource1.jpg",
      "/images/out-source/outSource2.jpg",
      "/images/out-source/outSource3.jpg",
      "/images/out-source/outSource4.jpg",
      "/images/out-source/outSource5.jpg",
      "/images/out-source/outSource6.jpg",
      "/images/out-source/outSource7.jpg"
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "3 months",
    liveLink: "#",
    githubLink: "#"
  },

  {
    id: 7,
    title: "Blood and Thorn of Maze: Pericing Studio Website",
    description: "A brief description of Project Four, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Four. Include information about the project scope, your contributions, challenges overcome, and technologies mastered.",
    images: [
      "/images/piercing-studio/piercing-studio-1.jpg",
      "/images/piercing-studio/piercing-studio-2.jpg",
      "/images/piercing-studio/piercing-studio-3.jpg",
      "/images/piercing-studio/piercing-studio-4.jpg",
      "/images/piercing-studio/piercing-studio-5.jpg"
    ],
    technologies: ["Vue.js", "Firebase", "TailwindCSS"],
    type: "Contributed",
    role: "Frontend Developer",
    duration: "2 months",
    liveLink: "https://blood-and-thorn-of-maze.netlify.app/",
    githubLink: "https://github.com/lawr3ncey/maze-piercing-website/"
  },
  {
    id: 8,
    title: "Personal Money Management System",
    description: "A brief description of Project Five, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Five. Share the impact of the project, your role in the team, key learnings, and the technologies you worked with.",
    images: [
      "/images/pmms/pmms-1.jpg",
      "/images/pmms/pmms-2.jpg",
      "/images/pmms/pmms-3.jpg",
      "/images/pmms/pmms-4.jpg",
      "/images/pmms/pmms-5.jpg",
      "/images/pmms/pmms-6.jpg",
      "/images/pmms/pmms-7.jpg",
      "/images/pmms/pmms-8.jpg",
      "/images/pmms/pmms-9.jpg",
      "/images/pmms/pmms-10.jpg"
    ],
    technologies: ["Python", "Django", "Docker"],
    type: "Owned",
    role: "Full Stack Developer",
    duration: "5 months",
    liveLink: "https://personal-money-management.vercel.app/",
    githubLink: "https://github.com/lawr3ncey/personal-money-management-system"
  },
  {
    id: 9,
    title: "SaveSocial.App",
    description: "A brief description of Project Six, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Six. Explain the business problem, your solution approach, the team dynamics, and the outcomes achieved.",
    images: [
      "/images/save-social-App/savesocial-1.jpg",
      "/images/save-social-App/savesocial-2.jpg",
      "/images/save-social-App/savesocial-3.jpg",
      "/images/save-social-App/savesocial-4.jpg",
      "/images/save-social-App/savesocial-5.jpg",
      "/images/save-social-App/savesocial-6.jpg"
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "3 months",
    liveLink: "https://savesocial.app/",
    githubLink: "#"
  },

  {
  id: 10,
    title: "UNA Website",
    description: "A brief description of Project Six, highlighting its features and technologies used.",
    fullDescription: "This is a more detailed description of Project Six. Explain the business problem, your solution approach, the team dynamics, and the outcomes achieved.",
    images: [
      "/images/una/una-1.jpg",
      "/images/una/una-2.jpg",
      "/images/una/una-3.jpg",
      "/images/una/una-4.jpg"
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "3 months",
    liveLink: "https://una.mojde.space/",
    githubLink: "#"
  }
];
