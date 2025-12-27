
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Tilt from 'react-parallax-tilt';
import { FaUserTie } from 'react-icons/fa';

const Positions = () => {
    const { positions } = portfolioData;

    return (
        <section id="positions" className="py-20 px-4 bg-darkLight/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaUserTie className="text-skyBlue" />
                        Positions of Responsibility
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {positions.map((pos, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
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
                                className="bg-dark border border-white/5 p-6 rounded-xl hover:border-skyBlue/30 hover:bg-white/5 transition-all group h-full shadow-lg"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-lg bg-white/5 p-2 flex-shrink-0">
                                        <img
                                            src={pos.logo}
                                            alt={pos.organization}
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-skyBlue transition-colors">
                                            {pos.title}
                                        </h3>
                                        <h4 className="text-skyBlue font-medium text-sm">
                                            {pos.organization}
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {pos.description}
                                </p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Positions;
