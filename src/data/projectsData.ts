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
    description: "The system integrates voice assistance, allowing users to receive audio guidance and feedback while navigating, improving accessibility and user experience.",
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
    liveLink: "#",
    githubLink: "https://github.com/lawr3ncey/Earist-Cavite-3D-Map"
  },

  {
    id: 8,
    title: "Personal Money Management System",
    description: "The system allows users to manage their savings, monitor income and expenses, and view transaction history in an intuitive and user-friendly interface.",
    fullDescription: "This project is a work-in-progress full-stack personal money management system designed to help users track their finances through structured jars, transactions, and activity logs, while providing administrators with full visibility and control through a dedicated admin dashboard. <br><br> The system allows users to manage their savings, monitor income and expenses, and view transaction history in an intuitive and user-friendly interface. On the admin side, the project includes features such as user management, financial analytics, transaction monitoring, notifications, and system activity logs, all presented through a responsive and consistent dashboard layout. <br><br> At its current stage, the project uses MongoDB as a local database for development and testing, enabling rapid iteration and validation of core features. As the project matures, the backend and data layer are planned to be migrated to Supabase, allowing the application to leverage cloud-based authentication, real-time data updates, and improved scalability. <br><br> This project demonstrates my experience in building end-to-end applications, focusing on clean UI/UX, reusable components, responsive layouts, and scalable architecture using React, Node.js, Express, Material-UI, Tailwind CSS, and TypeScript. It also reflects my ability to plan future enhancements while delivering a functional system at each development stage.",
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
    technologies: ["React.js", "Node.js", "Express", "Material-UI", "Tailwind CSS", "TypeScript", "Supabase"],
    type: "Owned",
    role: "Full Stack Developer",
    duration: "5 months",
    liveLink: "https://personal-money-management.vercel.app/",
    githubLink: "https://github.com/lawr3ncey/personal-money-management-system"
  },

  {
    id: 7,
    title: "Blood and Thorn of Maze: Pericing Studio Website",
    description: "Blood and Thorn of Maze is a full-stack web application designed for a professional piercing studio, showcasing services, portfolios, aftercare information, and client engagement features through a modern and gothic-inspired interface.",
    fullDescription: "Blood and Thorn of Maze is a full-stack web application designed for a professional piercing studio, showcasing services, portfolios, aftercare information, and client engagement features through a modern and gothic-inspired interface. The project focuses on delivering a visually striking yet user-friendly experience while maintaining clean structure and responsive design across devices. <br><br> The frontend is built using React.js with React Router to enable seamless multi-page navigation without full page reloads. Custom UI components such as the image gallery, hero section, and responsive navigation bar were implemented to enhance user interaction and branding. Styling and layout were carefully designed to reflect the studio’s identity while remaining accessible and mobile-friendly. <br><br> On the backend side, Node.js and Express are used to handle server logic and RESTful APIs, while MongoDB manages structured data such as bookings and administrative content. The project follows a component-based architecture and organized folder structure to improve scalability and maintainability. <br><br> The application is deployed using Netlify, demonstrating real-world deployment practices, version control with GitHub, and an end-to-end development workflow from design to production.",
    images: [
      "/images/piercing-studio/piercing-studio-1.jpg",
      "/images/piercing-studio/piercing-studio-2.jpg",
      "/images/piercing-studio/piercing-studio-3.jpg",
      "/images/piercing-studio/piercing-studio-4.jpg",
      "/images/piercing-studio/piercing-studio-5.jpg"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "React Router", "Material UI", "Netlify"],
    type: "Contributed",
    role: "Frontend Developer",
    duration: "2 months",
    liveLink: "https://blood-and-thorn-of-maze.netlify.app/",
    githubLink: "https://github.com/lawr3ncey/maze-piercing-website/"
  },

  {
    id: 5,
    title: "Elavate Results Training & Consulting Website",
    description: "Elevate Results PH is a business-oriented website built to promote online programs and coaching services with a strong focus on conversion and user engagement.",
    fullDescription: "Elevate Results PH is a business-oriented website built to promote online programs and coaching services with a strong focus on conversion and user engagement. Developed using WordPress and Elementor, the site features responsive layouts, dynamic content sections, and integrated e-commerce functionality via WooCommerce and PayMongo. The project highlights experience in CMS customization, payment integration, and creating scalable, performance-focused websites for digital businesses.",
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
    id: 3,
    title: "BeautyConnect – Booking & Order Platform (Beauty Industry)",
    description: "BeautyConnect Book Orders is a custom-built booking and order management platform developed on WordPress with a fully customized theme, using HTML, CSS, JavaScript, and PHP.",
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
    id: 10,
    title: "UNA Finance Website",
    description: "The UNA website was delivered as a modern, content-led corporate presence for a microfinance organization focused on fair, transparent, community-based financing for women-led micro and small businesses in the Philippines.",
    fullDescription: "The UNA website was delivered as a modern, content-led corporate presence for a microfinance organization focused on fair, transparent, community-based financing for women-led micro and small businesses in the Philippines. The experience is structured to clearly communicate UNA’s value proposition (“match payments to cash flow” with upfront, plain-language pricing), while guiding different stakeholder segments, clients, partners, and the broader public through a cohesive narrative across Our Work, Our Approach, and Our Impact.",
    images: [
      "/images/una/una-1.jpg",
      "/images/una/una-2.jpg",
      "/images/una/una-3.jpg",
      "/images/una/una-4.jpg"
    ],
    technologies: ["WordPress", "Elementor"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "3 months",
    liveLink: "https://una.mojde.space/",
    githubLink: "#"
  },

  {
    id: 4,
    title: "3D Beauty Product Showcase – Technical Challenge Project (Animations and Interactive UI)",
    description: "A modern interactive hero slider built with React + Swiper.js, featuring smooth 3D animations, scroll-triggered transitions, and a fully responsive mobile view.",
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
    id: 9,
    title: "SaveSocial.App",
    description: "SaveSocial is a web-based utility platform designed to help users download and save media content from various social media platforms through a simple, fast, and user-friendly interface.",
    fullDescription: "SaveSocial is a web-based utility platform designed to help users download and save media content from various social media platforms through a simple, fast, and user-friendly interface. The application focuses on accessibility and efficiency, allowing users to retrieve content by simply pasting a media URL and processing it server-side. <br><br> The platform emphasizes clean UI, minimal friction, and performance, ensuring users can complete actions with as few steps as possible. The interface is fully responsive and optimized for both desktop and mobile users, with clear input validation, loading feedback, and error handling to improve the overall user experience. <br><br> The platform emphasizes clean UI, minimal friction, and performance, ensuring users can complete actions with as few steps as possible. The interface is fully responsive and optimized for both desktop and mobile users, with clear input validation, loading feedback, and error handling to improve the overall user experience. <br><br> On the backend, the system is built to securely process requests, fetch media resources, and deliver downloadable files while maintaining stability and scalability. The application follows a classic client–server architecture, where frontend interactions trigger server-side processing handled by PHP scripts running on an Apache web server. Care was taken to ensure proper request handling, security considerations, and compatibility across browsers. <br><br> From a technical perspective, the project demonstrates strong fundamentals in web development, server-side scripting, and UI responsiveness, as well as experience deploying and managing applications on a traditional web server stack.",
    images: [
      "/images/save-social-App/savesocial-1.jpg",
      "/images/save-social-App/savesocial-2.jpg",
      "/images/save-social-App/savesocial-3.jpg",
      "/images/save-social-App/savesocial-4.jpg",
      "/images/save-social-App/savesocial-5.jpg",
      "/images/save-social-App/savesocial-6.jpg"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "Apache"],
    type: "Contributed",
    role: "Backend Developer",
    duration: "3 months",
    liveLink: "https://savesocial.app/",
    githubLink: "#"
  },

  {
    id: 2,
    title: "Alpha Premier Group Website",
    description: "A corporate website and internal system developed during my internship program. The project was built using Vanilla (HTML, CSS, JavaScript), PHP, and MySQL, focusing on performance, data handling, and backend logic.",
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
  }

  /* {
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
  }, */
];
