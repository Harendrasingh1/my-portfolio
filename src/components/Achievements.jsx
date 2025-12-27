
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Achievements = () => {
    const { achievements, profiles } = portfolioData;

    return (
        <section id="achievements" className="py-20 px-4 bg-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaTrophy className="text-skyBlue" />
                        Achievements & Profiles
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Achievements List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-skyBlue pl-4">
                            Honors & Awards
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <Tilt
                                    key={index}
                                    tiltMaxAngleX={3}
                                    tiltMaxAngleY={3}
                                    perspective={1000}
                                    scale={1.02}
                                    transitionSpeed={1000}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-darkLight border border-white/5 p-4 rounded-xl flex items-start gap-4 hover:bg-white/5 hover:border-skyBlue/30 transition-all shadow-md group"
                                    >
                                        <div className="bg-skyBlue/10 p-3 rounded-lg text-skyBlue group-hover:scale-110 transition-transform">
                                            <FaMedal size={20} />
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                                            {item}
                                        </p>
                                    </motion.div>
                                </Tilt>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coding Profiles */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-skyBlue pl-4">
                            Coding Profiles
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {profiles.map((profile, index) => (
                                <Tilt
                                    key={index}
                                    tiltMaxAngleX={10}
                                    tiltMaxAngleY={10}
                                    perspective={1000}
                                    scale={1.05}
                                    transitionSpeed={1000}
                                >
                                    <a
                                        href={profile.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-darkLight border border-white/5 p-6 rounded-xl flex flex-col items-center gap-3 hover:bg-white/5 hover:border-skyBlue/30 transition-all shadow-md group h-full justify-center"
                                    >
                                        <div className="text-gray-400 group-hover:text-skyBlue transition-colors group-hover:scale-110 transform duration-300">
                                            {profile.icon && <profile.icon size={32} />}
                                        </div>
                                        <span className="text-white font-medium">{profile.platform}</span>
                                        <span className="text-xs text-gray-500 group-hover:text-skyBlue/80 transition-colors">
                                            @{profile.handle}
                                        </span>
                                    </a>
                                </Tilt>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
