import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaInstagram, FaJava, FaAws, FaServer, FaNetworkWired, FaBrain, FaLightbulb, FaUsersCog, FaSyncAlt, FaComments } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiGit, SiPython, SiExpress, SiMysql, SiLinux, SiPostman, SiGithubactions, SiDiagramsdotnet } from 'react-icons/si';
import { VscOrganization } from 'react-icons/vsc';
import { DiDatabase } from 'react-icons/di';
import { TbCircleSquare, TbVariable } from 'react-icons/tb';

export const portfolioData = {
    header: {
        name: "",
        links: [
            { id: "home", name: "Home" },
            { id: "about", name: "About" },
            { id: "experience", name: "Experience" },
            { id: "skills", name: "Skills" },
            { id: "projects", name: "Projects" },
            { id: "contact", name: "Contact" },
        ],
    },
    hero: {
        name: "Harendra Singh",
        title: "Software Engineer",
        subtitle: "Software Engineer experienced in building Microservices and distributed systems and developing scalable full-stack applications.",
        socials: [
            { icon: FaInstagram, link: "https://www.instagram.com/harendra.singh_1/" },
            { icon: FaGithub, link: "https://github.com/Harendrasingh1" },
            { icon: FaLinkedin, link: "https://linkedin.com/in/harendra8587" },
            { icon: SiLeetcode, link: "https://leetcode.com/u/Thakurji01/" },
            { icon: FaEnvelope, link: "mailto:harendrajobs01@gmail.com" },
        ],
    },
    about: {
        bio: "I am a Software Engineer at Urban Company and a Competitive Programmer. I specialize in building scalable web applications using the MERN stack and have a strong foundation in Microservices and distributed systems and algorithms.",
        highlights: [
            "Software Engineer at Urban Company",
            "Expert on Codeforces (1617)",
            "5 Star on CodeChef (2033)",
            "B.Tech IIIT Allahabad (8.07 CGPA)"
        ]
    },
    education: [
        {
            degree: "B.Tech in Information Technology",
            college: "Indian Institute of Information Technology, Allahabad",
            duration: "Aug 2021 – Jun 2025",
            grade: "CGPA 8.07/10",
            logo: "/assets/IIITA.jpg"
        },
        {
            degree: "Class 12th (Intermediate)",
            college: "Shri Paramhans Lambardar Inter College Shamsabad Agra",
            duration: "July 2018 - May 2020",
            grade: "75.6%",
            logo: "/assets/Board.png"
        },
        {
            degree: "Class 10th (High School)",
            college: "Thakur Shree Ram Higher Secondary School, Agra",
            duration: "June 2016 - May 2018",
            grade: "87.6%",
            logo: "/assets/Board.png"
        }
    ],
    experience: [
        {
            organization: "Urban Company",
            logo: "/assets/urbancompany_logo.jpg",
            roles: [
                {
                    title: "Software Engineer",
                    duration: "Sep 2025 – Present",
                    description: "Working as a Full Stack Engineer using Node.js, MongoDB, React, and React Native, building scalable systems with RPC APIs and REST APIs. Built the Investor Relations portal from scratch, owning the complete lifecycle—from database schema design and backend API development to frontend integration and business workflows. Developed a Dashboard to manage Investor Relations data, implementing end-to-end CRUD operations. Identified and fixed critical frontend performance issues, reducing Cumulative Layout Shift (CLS) from 21% to 9%, significantly improving UI stability and user experience. Worked extensively with the Urban Company Design System, refactoring and standardizing UI components to match design specifications and ensure consistency across the application.",
                    skills: ["React", "Node.js", "System Design", "React Native", "RPC API", "Rest API", "Postman", "MongoDb"]
                }
            ]
        },
        {
            institution: "Indian Institute Of Information Technology Allahabad",
            logo: "/assets/IIITA.jpg",
            roles: [
                {
                    title: "Placement Coordinator",
                    duration: "Oct 2024 - Jun 2025 · 9 mos",
                    description: "As the Coordinator of the Placement Cell, I successfully planned and managed the Placement Process for the 2024-25 academic year. Leading the 2021-2025 batch, I helped connect students with recruiters and create better job opportunities. My focus was on supporting my batchmates in their careers, improving the placement process, and building strong industry connections.",
                    skills: ["Communication", "Campus Placements", "Management"]
                },
                {
                    title: "Research Intern in Federated Learning",
                    employment_type: "Internship",
                    duration: "Jul 2024 - Nov 2024 · 5 mos",
                    location: "Prayagraj, Uttar Pradesh, India · On-site",
                    description: "Federated Learning enables decentralized model training by keeping data on local devices, exchanging only model updates for collaborative learning. It preserves data privacy, reduces communication costs, and enables efficient model training on resource-constrained devices like mobile phones.",
                    skills: ["Machine Learning", "Python", "TensorFlow", "Distributed Systems"]
                }
            ]
        },
        {
            organization: "Effervescence, IIIT Allahabad",
            logo: "/assets/EffeImage.jpg",
            roles: [
                {
                    title: "Head of Public Relations",
                    duration: "May 2023 - Apr 2024 · 1 yr",
                    location: "Prayagraj, Uttar Pradesh, India",
                    description: "Managed public relations and media outreach for the annual cultural festival.",
                    skills: ["Public Relations", "Leadership", "Event Management"]
                }
            ]
        }
    ],
    skills: {
        languages: [
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
        ],
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "REST API", icon: FaServer, color: "#0096FF" },
            { name: "RPC API", icon: FaNetworkWired, color: "#FF5733" },
        ],
        tools: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "AWS", icon: FaAws, color: "#232F3E" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
        ],
        core: [
            { name: "DSA", icon: FaCode, color: "#5865F2" },
            { name: "System Design", icon: SiDiagramsdotnet, color: "#F08705" },
            { name: "OOPS", icon: TbCircleSquare, color: "#FF4500" },
            { name: "DBMS", icon: DiDatabase, color: "#4169E1" },
            { name: "Machine Learning", icon: FaBrain, color: "#FF6F00" },
        ],
        softSkills: [
            { name: "Problem Solving", icon: FaLightbulb, color: "#F7DF1E" },
            { name: "Management", icon: FaUsersCog, color: "#4CAF50" },
            { name: "Continuous Learning", icon: FaSyncAlt, color: "#00BCD4" },
            { name: "Communication", icon: FaComments, color: "#E91E63" },
        ]
    },
    projects: [
        {
            title: "My Portfolio",
            description: "A premium, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, featuring 3D animations and a dynamic theme.",
            techStack: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
            link: "https://harenddra-portfolio.netlify.app",
            github: "https://github.com/Harendrasingh1/harenddra-portfolio.git"
        },
        {
            title: "Federated Learning in Resource Constrained Environments",
            description: "Built a distributed system for federated learning where multiple clients train a shared model without sharing raw data.",
            techStack: ["Python", "TensorFlow", "Flower", "Android"],
            link: "https://github.com/SuhailAhmadKhan/Federated-Learning-in-Resource-Constrained-Environments",
            github: "https://github.com/SuhailAhmadKhan/Federated-Learning-in-Resource-Constrained-Environments"
        },
        {
            title: "BuyNow Shop",
            description: "Full-stack eCommerce platform with secure authentication, shopping cart, and search functionality.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://mern-shop-abxs.onrender.com/",
            github: "https://github.com/Harendrasingh1/Mern-Shop"
        },
        {
            title: "Mausam App",
            description: "React-based weather forecasting application using OpenWeatherMap API for 5-day forecasts.",
            techStack: ["React", "OpenWeatherMap API", "CSS"],
            link: "https://meek-cajeta-2eb2bb.netlify.app/",
            github: "https://github.com/Harendrasingh1/Mausam-App"
        },
        {
            title: "Tic-Tac-Toe Game",
            description: "Developed a dynamic Tic-Tac-Toe game using HTML, CSS, and JavaScript with interactive game elements and a visually appealing interface.",
            techStack: ["HTML", "CSS", "JavaScript"],
            link: "https://harendrasingh1.github.io/Tic-Tac-Toe/",
            github: "https://github.com/Harendrasingh1/Tic-Tac-Toe"
        }
    ],
    achievements: [
        "Top 10 in MahaKumbh Hackathon (AR-based navigation System)- Developed an AR-based solution for seamless navigation, real-time updates, and safety during MahaKumbh.",
        "Solved 1500+ DSA problems across LeetCode, Codeforces, and GeeksforGeeks.",
        "Received Excellence Award for Placement Coordination (2025 Batch), achieving the highest-ever placement record in the institute's history.",
        "Received Excellence Award for exceptional leadership in Event Planning and Public Relations for college fest.",
    ],
    profiles: [
        { platform: "LeetCode", handle: "Thakurji01", link: "https://leetcode.com/u/Thakurji01/", icon: SiLeetcode },
        { platform: "LinkedIn", handle: "Harendra Singh", link: "https://linkedin.com/in/harendra8587", icon: FaLinkedin },
        { platform: "GitHub", handle: "Harendrasingh1", link: "https://github.com/Harendrasingh1", icon: FaGithub },
        { platform: "Instagram", handle: "harendra.singh_1", link: "https://www.instagram.com/harendra.singh_1/", icon: FaInstagram },
    ],
    positions: [
        {
            title: "Overall Placement Coordinator",
            organization: "IIIT Allahabad",
            description: "As the Coordinator of the Placement Cell, I successfully planned and managed the Placement Process for the 2024-25 academic year. Leading the 2021-2025 batch, I helped connect students with recruiters and create better job opportunities. My focus was on supporting my batchmates in their careers, improving the placement process, and building strong industry connections.",
            logo: "/assets/IIITA.jpg"
        },
        {
            title: "Member",
            organization: "Google Developer Groups (GDG)",
            description: "Google Developer Groups (GDG) on Campus (formerly known as Google Developer Student Clubs or GDSC) are university-based community groups powered by Google Developers for students interested in technology.",
            logo: "/assets/Google.png"
        },
        {
            title: "Head",
            organization: "Effervescence (Cultural Fest)",
            description: "Handled Event Public Relations and Sponsorship for the event.",
            logo: "/assets/EffeImage.jpg"
        },
        {
            title: "Head",
            organization: "Aparoksha’24 (Annual Tech Fest)",
            description: "Handled College Fest Coding events. Managed Sponsorship for the event and Planned Event Timeline.",
            logo: "/assets/APA.jpg"
        }
    ],
    footer: {
        contactInfo: {
            email: "harendrajobs01@gmail.com",
            phone: "+91-9068956883",
            location: {
                current: "Gurugram, Haryana, 122016",
                home: "Agra, Uttar Pradesh, India, 283125"
            }
        }
    }
};

// https://drive.google.com/file/d/14u3l0IhLt0c-a87UFLVy6qQbP-F-jsul/view?usp=sharing
