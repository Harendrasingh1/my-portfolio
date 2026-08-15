import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaJava, FaAws, FaServer, FaNetworkWired, FaBrain, FaLightbulb, FaUsersCog, FaSyncAlt, FaComments } from 'react-icons/fa';
import { SiLeetcode, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiGit, SiPython, SiExpress, SiMysql, SiLinux, SiPostman, SiGithubactions, SiDiagramsdotnet } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbCircleSquare } from 'react-icons/tb';

export const portfolioData = {
    header: {
        name: '',
        links: [
            { id: 'home', name: 'Home' },
            { id: 'about', name: 'About' },
            { id: 'experience', name: 'Experience' },
            { id: 'skills', name: 'Skills' },
            { id: 'projects', name: 'Projects' },
            { id: 'contact', name: 'Contact' },
        ],
    },
    hero: {
        name: 'Harendra Singh',
        title: 'Software Engineer',
        subtitle: 'Software Engineer with 1.5+ years of experience building scalable web and mobile applications.',
        socials: [
            { icon: FaGithub, link: 'https://github.com/Harendrasingh1' },
            { icon: FaLinkedin, link: 'https://linkedin.com/in/harendra8587' },
            { icon: SiLeetcode, link: 'https://leetcode.com/u/Thakurji01/' },
            { icon: FaEnvelope, link: 'mailto:Harendra8587@gmail.com' },
        ],
    },
    about: {
        bio: 'I am a Software Engineer at Urban Company with 1.5+ years of experience building scalable web and mobile applications using React, Node.js, MongoDB, and React Native. I deliver reusable UI systems, third-party integrations, performance improvements, and CI/CD optimizations in production.',
        highlights: [
            'Software Engineer at Urban Company',
            'React, Node.js, MongoDB & React Native',
            'Production performance & CI/CD optimization',
            'B.Tech, IIIT Allahabad (8.07 CGPA)',
        ],
    },
    education: [
        {
            degree: 'Bachelor of Technology in Information Technology',
            college: 'Indian Institute of Information Technology, Allahabad',
            duration: 'Aug 2021 – Jun 2025',
            grade: 'CGPA 8.07/10',
            logo: '/assets/IIITA.jpg',
        },
    ],
    experience: [
        {
            organization: 'Urban Company',
            logo: '/assets/urbancompany_logo.jpg',
            website: 'https://www.urbancompany.com',
            roles: [{
                title: 'Software Engineer',
                duration: 'Sep 2025 – Present',
                location: 'Gurugram, Haryana, India',
                description: [
                    'Built a reusable carousel widget enabling multiple event banners on the homepage instead of a single static banner, improving content flexibility and user engagement.',
                    "Designed a generic third-party integration framework, enabling any merchant partner to plug into Urban Company's platform with minimal custom engineering.",
                    'Improved application stability by reducing Cumulative Layout Shift from 21% to 9% through targeted app performance improvements.',
                    'Resolved multiple backend and frontend production issues, handled on-call, and improved system reliability.',
                    'Reduced CI/CD pipeline time from 1 hour to 35 minutes by introducing build caching and selective package updates.',
                ],
                skills: ['React', 'React Native', 'Node.js', 'MongoDB', 'Third-Party Integrations', 'CI/CD'],
            }],
        },
        {
            organization: 'Real Dimension Studio',
            logo: '/assets/RDS Logo final_V04.png',
            website: 'https://realdimensionstudio.com',
            roles: [{
                title: 'Full Stack Developer',
                employment_type: 'Full Time',
                duration: 'May 2025 – Sep 2025',
                description: 'Engineered the Real Dimension Studio website as a full-stack product using React for the public-facing application and Node.js for backend content workflows. Created reusable UI sections and an internal dashboard for structured website data updates and non-technical content management.',
                skills: ['React', 'Node.js', 'Dashboard Development', 'CRUD Workflows', 'Full Stack Development'],
            }],
        },
        {
            organization: 'Indian Institute of Information Technology, Allahabad',
            logo: '/assets/IIITA.jpg',
            roles: [{
                title: 'Research Intern, Federated Learning; Placement Coordinator',
                duration: 'Jul 2024 – Jun 2025',
                location: 'Prayagraj, Uttar Pradesh, India',
                description: 'Simulated federated learning workflows using distributed client-server training without moving raw data to a central server, and explored communication-efficient model aggregation for privacy-preserving learning across mobile and edge environments.',
                skills: ['Machine Learning', 'Python', 'TensorFlow', 'Distributed Systems'],
            }],
        },
    ],
    skills: {
        languages: [
            { name: 'C++', icon: SiCplusplus, color: '#00599C' }, { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }, { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }, { name: 'Java', icon: FaJava, color: '#007396' }, { name: 'Python', icon: SiPython, color: '#3776AB' },
        ],
        technologies: [
            { name: 'React', icon: SiReact, color: '#61DAFB' }, { name: 'React Native', icon: SiReact, color: '#61DAFB' }, { name: 'Node.js', icon: SiNodedotjs, color: '#339933' }, { name: 'Express', icon: SiExpress, color: '#000000' }, { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }, { name: 'MySQL', icon: SiMysql, color: '#4479A1' }, { name: 'REST API', icon: FaServer, color: '#0096FF' }, { name: 'RPC API', icon: FaNetworkWired, color: '#FF5733' }, { name: 'Microservices', icon: FaServer, color: '#0096FF' },
        ],
        tools: [
            { name: 'Git', icon: SiGit, color: '#F05032' }, { name: 'AWS', icon: FaAws, color: '#232F3E' }, { name: 'Jenkins', icon: SiGithubactions, color: '#D24939' }, { name: 'Linux', icon: SiLinux, color: '#FCC624' }, { name: 'Postman', icon: SiPostman, color: '#FF6C37' }, { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
        ],
        core: [
            { name: 'DSA', icon: FaCode, color: '#5865F2' }, { name: 'System Design', icon: SiDiagramsdotnet, color: '#F08705' }, { name: 'OOPS', icon: TbCircleSquare, color: '#FF4500' }, { name: 'DBMS', icon: DiDatabase, color: '#4169E1' }, { name: 'Machine Learning', icon: FaBrain, color: '#FF6F00' }, { name: 'Distributed Systems', icon: FaNetworkWired, color: '#FF5733' },
        ],
        softSkills: [
            { name: 'Problem Solving', icon: FaLightbulb, color: '#F7DF1E' }, { name: 'Management', icon: FaUsersCog, color: '#4CAF50' }, { name: 'Continuous Learning', icon: FaSyncAlt, color: '#00BCD4' }, { name: 'Communication', icon: FaComments, color: '#E91E63' },
        ],
    },
    projects: [
        {
            title: 'BuyNow Shop',
            description: 'Full-stack e-commerce platform with JWT authentication, protected routes, shopping cart, order tracking, admin workflows, Razorpay payments, product search, pagination, reviews, ratings, and checkout.',
            techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay'],
            link: 'https://mern-shop-abxs.onrender.com/',
            github: 'https://github.com/Harendrasingh1/Mern-Shop',
        },
        {
            title: 'Portfolio Website',
            description: 'Responsive portfolio with reusable data-driven sections, interactive UI components, and a maintainable content structure for recruiter-friendly presentation.',
            techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            link: 'https://harendra-portfolio.netlify.app',
            github: 'https://github.com/Harendrasingh1/my-portfolio.git',
        },
    ],
    achievements: [
        'Built scalable production web and mobile applications with React, Node.js, MongoDB, and React Native.',
        'Reduced Cumulative Layout Shift from 21% to 9% through targeted performance improvements.',
        'Reduced CI/CD pipeline time from 1 hour to 35 minutes using build caching and selective package updates.',
        "Overall Placement Coordinator at IIIT Allahabad and Head of Aparoksha'24 and Effervescence.",
    ],
    profiles: [
        { platform: 'LeetCode', handle: 'Thakurji01', link: 'https://leetcode.com/u/Thakurji01/', icon: SiLeetcode },
        { platform: 'LinkedIn', handle: 'Harendra Singh', link: 'https://linkedin.com/in/harendra8587', icon: FaLinkedin },
        { platform: 'GitHub', handle: 'Harendrasingh1', link: 'https://github.com/Harendrasingh1', icon: FaGithub },
    ],
    positions: [
        { title: 'Overall Placement Coordinator', organization: 'IIIT Allahabad', description: 'Planned and managed the placement process for the 2024–25 academic year, connecting students with recruiters and supporting stronger career opportunities.', logo: '/assets/IIITA.jpg' },
        { title: 'Head', organization: "Aparoksha'24", description: 'Led coding events, sponsorship coordination, and event timeline planning for IIIT Allahabad’s annual technical festival.', logo: '/assets/APA.jpg' },
        { title: 'Head', organization: 'Effervescence', description: 'Led public relations and sponsorship efforts for IIIT Allahabad’s annual cultural festival.', logo: '/assets/EffeImage.jpg' },
    ],
    footer: {
        contactInfo: {
            email: 'Harendra8587@gmail.com',
            emails: ['Harendra8587@gmail.com', 'Harendrajobs01@gmail.com'],
            phone: '+91-9068956883',
            location: { current: 'Gurugram, Haryana, India', home: 'Agra, Uttar Pradesh, India, 283125' },
        },
    },
};
