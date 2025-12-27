
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

import Tilt from 'react-parallax-tilt';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 px-4 bg-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaLaptopCode className="text-skyBlue" />
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={1000}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-darkLight border border-white/5 rounded-xl overflow-hidden h-full flex flex-col hover:border-skyBlue/30 transition-all shadow-lg group relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="p-6 md:p-8 flex-grow relative z-10 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-skyBlue transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                                title="GitHub Code"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-skyBlue transition-colors p-2 hover:bg-white/10 rounded-full"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-skyBlue bg-skyBlue/10 px-3 py-1 rounded-full border border-skyBlue/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
