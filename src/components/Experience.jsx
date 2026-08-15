
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaBriefcase } from 'react-icons/fa';
import rdsLogo from '../assets/RDS Logo final_V04.png';

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
                    {experience.map((exp, index) => {
                        const logoSrc = exp.organization === 'Real Dimension Studio' ? rdsLogo : exp.logo;
                        const websiteLabel = exp.website
                            ? exp.website.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
                            : null;

                        return (
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

                            <div className="glass-card rounded-xl border-l-4 border-l-skyBlue p-6 transition-colors hover:bg-white/5 md:p-8">
                                {/* Organization Header */}
                                <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-4">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 p-1">
                                        <img
                                            src={logoSrc}
                                            alt={exp.organization || exp.institution}
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            {exp.organization || exp.institution}
                                        </h3>
                                        {exp.website && (
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-1 inline-block text-sm text-skyBlue hover:text-white transition-colors"
                                            >
                                                {websiteLabel}
                                            </a>
                                        )}
                                        {exp.location && (
                                            <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                                                {exp.location}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Roles Timeline within the card */}
                                <div className="relative space-y-8">
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

                                            <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-start">
                                                <h4 className="text-lg font-bold text-skyBlue">{role.title}</h4>
                                                <span className="mt-1 w-fit rounded border border-white/5 bg-black/30 px-2 py-1 text-xs font-mono text-gray-400 md:mt-0">
                                                    {role.duration}
                                                </span>
                                            </div>

                                            {role.employment_type && (
                                                <p className="mb-2 text-xs text-gray-500">{role.employment_type}</p>
                                            )}

                                            {role.location && (
                                                <p className="mb-3 text-sm text-gray-400">{role.location}</p>
                                            )}

                                            {Array.isArray(role.description) ? (
                                                <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                                                    {role.description.map((item, descriptionIndex) => (
                                                        <li key={descriptionIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="mb-4 text-sm leading-relaxed text-gray-300">
                                                    {role.description}
                                                </p>
                                            )}

                                            {/* Skills Tags */}
                                            {role.skills && (
                                                <div className="flex flex-wrap gap-2">
                                                    {role.skills.map((skill, sIndex) => (
                                                        <span
                                                            key={sIndex}
                                                            className="rounded bg-white/5 px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-white/10"
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
                        </motion.div>
                    )})}
                </div>
            </div>
        </section>
    );
};

export default Experience;
