import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Tilt from 'react-parallax-tilt';

const About = () => {
    const { bio, highlights } = portfolioData.about;

    return (
        <section id="about" className="min-h-[80vh] flex items-center justify-center relative bg-darkLight/30 py-20 px-4">
            <div className="max-w-4xl mx-auto w-full">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-10 items-center">
                    {/* Highlights Grid */}
                    <div className="col-span-1 grid gap-4">
                        {highlights.map((item, index) => (
                            <Tilt
                                key={index}
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                perspective={1000}
                                scale={1.1}
                                transitionSpeed={1000}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:border-primary/40 transition-colors shadow-lg"
                                >
                                    <p className="text-gray-300 font-medium text-base text-center">
                                        {item}
                                    </p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>

                    {/* Bio Text */}
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor="#ffffff"
                        glarePosition="all"
                        glareBorderRadius="16px"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1000}
                        className="col-span-1 md:col-span-2 h-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-dark/50 p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center shadow-xl backdrop-blur-sm"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {bio}
                            </p>
                            <p className="mt-6 text-base text-gray-500 font-light">
                                I am passionate about solving complex problems and building efficient, scalable systems. My journey in tech has been driven by curiosity and a relentless pursuit of excellence in both development and competitive programming.
                            </p>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;
