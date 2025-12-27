import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGraduationCap } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="min-h-screen flex items-center justify-center relative bg-dark py-20 px-4">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-skyBlue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaGraduationCap className="text-skyBlue" />
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                    {/* Visual / Icon side (Optional, or just center the single education item if only one) */}
                    {/* Since there's only one main entry, let's make it a featured centered card */}

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="md:col-span-2 max-w-3xl mx-auto w-full"
                        >
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.2}
                                glareColor="#ffffff"
                                glarePosition="all"
                                glareBorderRadius="16px"
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1000}
                            >
                                <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-skyBlue/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            {edu.logo && (
                                                <div className="w-16 h-16 rounded-lg bg-white/5 p-2 flex-shrink-0 border border-white/10">
                                                    <img
                                                        src={edu.logo}
                                                        alt={edu.college}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.college}</h3>
                                                <p className="text-skyBlue text-lg font-medium mb-1">{edu.degree}</p>
                                                <p className="text-gray-400 text-sm italic">{edu.duration}</p>
                                            </div>
                                        </div>

                                        <div className="md:text-right">
                                            <div className="inline-block bg-dark/50 border border-skyBlue/30 px-6 py-3 rounded-xl backdrop-blur-sm">
                                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Grade</p>
                                                <p className="text-2xl font-bold text-white tracking-tight">{edu.grade}</p>
                                            </div>
                                        </div>
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

export default Education;
