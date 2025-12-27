
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Tilt from 'react-parallax-tilt';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="min-h-screen py-20 px-4 bg-darkLight/30 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaBriefcase className="text-skyBlue" />
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <span className="absolute -left-[9px] top-6 bg-dark border-2 border-skyBlue w-4 h-4 rounded-full" />

                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.4}
                                glareColor="#ffffff"
                                glarePosition="all"
                                glareBorderRadius="12px"
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1000}
                            >
                                <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-skyBlue hover:bg-white/5 transition-all">
                                    {/* Organization Header */}
                                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 p-1">
                                            <img
                                                src={exp.logo}
                                                alt={exp.organization || exp.institution}
                                                className="w-full h-full object-contain rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                                {exp.organization || exp.institution}
                                            </h3>
                                            {exp.location && (
                                                <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                                    {/* You could add a location icon here if desired */}
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Roles Timeline within the card */}
                                    <div className="space-y-8 relative">
                                        {/* Inner line for multiple roles */}
                                        {exp.roles.length > 1 && (
                                            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10" />
                                        )}

                                        {exp.roles.map((role, rIndex) => (
                                            <div key={rIndex} className="relative pl-6">
                                                {/* Sub-dot for role */}
                                                {exp.roles.length > 1 && (
                                                    <span className="absolute left-[0px] top-2 w-[16px] h-[16px] bg-dark rounded-full border border-gray-600 flex items-center justify-center">
                                                        <span className="w-1.5 h-1.5 bg-skyBlue rounded-full" />
                                                    </span>
                                                )}

                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                                    <h4 className="text-lg font-bold text-skyBlue">{role.title}</h4>
                                                    <span className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5 mt-1 md:mt-0 w-fit">
                                                        {role.duration}
                                                    </span>
                                                </div>

                                                {role.employment_type && (
                                                    <p className="text-xs text-gray-500 mb-2">{role.employment_type}</p>
                                                )}

                                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                    {role.description}
                                                </p>

                                                {/* Skills Tags */}
                                                {role.skills && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {role.skills.map((skill, sIndex) => (
                                                            <span
                                                                key={sIndex}
                                                                className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
