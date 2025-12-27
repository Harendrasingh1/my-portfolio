
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaCode } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const { skills } = portfolioData;

    // Helper to render section
    const SkillSection = ({ title, items, delay }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay }}
            className="mb-8"
        >
            <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-skyBlue pl-3">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                    <Tilt
                        key={index}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareColor={skill.color || "#ffffff"}
                        glarePosition="all"
                        glareBorderRadius="8px"
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={800}
                        scale={1.1}
                        transitionSpeed={400}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-darkLight border border-white/5 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white transition-all shadow-md cursor-default text-base flex items-center gap-2 h-full"
                        >
                            {skill.icon && <skill.icon style={{ color: skill.color }} className="text-lg" />}
                            {skill.name}
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="min-h-screen py-20 px-4 bg-dark relative flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <FaCode className="text-skyBlue" />
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-skyBlue to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <SkillSection title="Languages" items={skills.languages} delay={0.1} />
                        <SkillSection title="Technologies & Frameworks" items={skills.technologies} delay={0.2} />
                    </div>

                    {/* Right Column */}
                    <div>
                        <SkillSection title="Tools & Platforms" items={skills.tools} delay={0.3} />
                        <SkillSection title="Core & Coursework" items={skills.core} delay={0.4} />
                        <SkillSection title="Soft Skills" items={skills.softSkills} delay={0.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
