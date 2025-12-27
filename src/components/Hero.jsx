import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolio';

const roles = ["Software Engineer", "Full Stack Engineer", "Backend Engineer", "Competitive Programmer"];

const Hero = () => {
    const {
        name,
        subtitle,
        socials
    } = portfolioData.hero;

    const [roleIndex, setRoleIndex] = useState(0);

    // Typing Effect Logic
    const [displayedName, setDisplayedName] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = name;
        const typeSpeed = isDeleting ? 100 : 150; // Faster deleting, normal typing
        const pauseTime = 500; // Pause at end of word

        const handleTyping = () => {
            setDisplayedName(current => {
                if (isDeleting) {
                    return fullText.substring(0, current.length - 1);
                } else {
                    return fullText.substring(0, current.length + 1);
                }
            });
        };

        const timer = setTimeout(() => {
            if (!isDeleting && displayedName === fullText) {
                // Finished typing, wait before deleting
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && displayedName === "") {
                // Finished deleting, wait before typing again
                setIsDeleting(false);
            } else {
                handleTyping();
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayedName, isDeleting, name]);


    // Role Rotator
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000); // Change role every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark to-skyDark/20"
        >
            {/* 3D Glass Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Sphere 1 (Top Right) */}
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] right-[5%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl border border-white/10 shadow-[inner_0_0_40px_rgba(255,255,255,0.1)] z-0"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 40%, transparent 60%)' }}
                />

                {/* Floating Sphere 2 (Bottom Left) */}
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] left-[5%] w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-skyBlue/20 to-purple-500/20 backdrop-blur-3xl filter blur-[60px] z-0 opacity-60"
                />

                {/* Glass Panels/Shards */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-2xl rotate-12 border border-white/5 opacity-30" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-skyBlue/10 backdrop-blur-sm rounded-full border border-white/5 opacity-40 animate-pulse" />
            </div>

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-skyBlue font-medium tracking-wider text-xl md:text-2xl bg-skyBlue/10 px-4 py-1 rounded-full border border-skyBlue/20">
                            &lt;HELLO /&gt;
                        </span>
                        <span className="text-gray-300 font-medium tracking-wider text-xl md:text-2xl">
                            I AM
                        </span>
                    </motion.div>

                    {/* Typing Name (Transparent Bg / Lighting Effect) */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-skyBlue to-primary leading-tight drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] min-h-[2.5em] md:min-h-[1.2em]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {displayedName}
                    </motion.h1>

                    {/* Rotating Roles */}
                    <div className="h-[70px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={roleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-skyBlue to-primary"
                            >
                                {roles[roleIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-gray-300 text-lg md:text-2xl max-w-lg leading-relaxed font-light"
                    >
                        {subtitle}
                    </motion.p>

                    <div className="flex flex-wrap gap-4 pt-6">
                        <a
                            href="https://drive.google.com/file/d/14u3l0IhLt0c-a87UFLVy6qQbP-F-jsul/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-skyBlue/80 hover:bg-skyBlue text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transform hover:-translate-y-1 backdrop-blur-sm"
                        >
                            Download Resume
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-8 pt-8">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-skyBlue transition-colors transform hover:scale-125"
                                >
                                    <Icon size={32} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Visual - Image from src/data/Harendra.png copied to assets */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center items-center"
                >
                    <div className="relative w-[500px] h-[500px] flex justify-center items-center">
                        {/* Rotating Outer Glow */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-tr from-skyBlue via-primary to-purple-500 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-30 blur-3xl"
                        />

                        {/* Floating & Morphing Container */}
                        <motion.div
                            animate={{
                                borderRadius: [
                                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                                    "30% 70% 70% 30% / 30% 30% 70% 70%"
                                ],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                borderRadius: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="relative w-[400px] h-[400px] overflow-hidden border-2 border-white/20 z-10 shadow-[0_0_60px_rgba(14,165,233,0.3)] bg-dark/50"
                        >
                            <img
                                src="/assets/Harendra.png"
                                alt="Harendra Singh"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-darkLight');
                                    e.target.parentElement.innerHTML = '<div class="text-center p-8"><span class="text-6xl">✨</span><p class="mt-4 text-skyBlue/80 text-sm font-mono">Harendra Singh</p></div>';
                                }}
                            />

                            {/* Inner Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-skyBlue to-transparent" />
                <span className="text-xs text-skyBlue tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
