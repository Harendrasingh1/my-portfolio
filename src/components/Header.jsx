import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { portfolioData } from '../data/portfolio';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Unified Links for Desktop and Mobile
    const visibleLinks = [
        { id: "hero", name: "Home" },
        { id: "about", name: "About" },
        { id: "experience", name: "Experience" },
        { id: "education", name: "Education" },
        { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" },
        { id: "achievements", name: "Achievements" },
        { id: "contact", name: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-[999] transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo / Name */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer font-bold text-2xl tracking-tighter text-white flex items-center gap-2"
                >
                    <div className="w-10 h-10 md:w-12 md:h-12">
                        <img
                            src="/assets/logo_h.jpg"
                            alt="Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.5)] rounded-full"
                        />
                    </div>
                    <span>
                        {portfolioData.header.name}
                        <span className="text-primary"></span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-6">
                        {visibleLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.id}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-gray-300 hover:text-primary transition-colors cursor-pointer text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Menu Icon for Drawer */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Open Menu"
                    >
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white p-2"
                        aria-label="Open Menu"
                    >
                        <HiMenuAlt3 size={28} />
                    </button>
                </div>
            </div>

            {/* Drawer / Overlay Menu - Rendered via Portal */}
            {typeof document !== 'undefined' && ReactDOM.createPortal(
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMenu}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                            />

                            {/* Drawer Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-[80%] md:w-[400px] bg-darkLight border-l border-white/10 z-[9999] shadow-2xl overflow-y-auto"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-10">
                                        <h2 className="text-xl font-bold text-white">Menu</h2>
                                        <button
                                            onClick={toggleMenu}
                                            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                                        >
                                            <HiX size={28} />
                                        </button>
                                    </div>

                                    <nav className="flex flex-col space-y-6">
                                        {visibleLinks.map((section, index) => (
                                            <Link
                                                key={section.id}
                                                to={section.id}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                onClick={toggleMenu}
                                                className="group flex items-center space-x-4 cursor-pointer"
                                            >

                                                <span className="text-2xl font-bold text-gray-300 group-hover:text-primary transition-colors">
                                                    {section.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="mt-auto pt-10 border-t border-white/5">
                                        <p className="text-gray-500 text-sm">
                                            &copy; {new Date().getFullYear()} {portfolioData.header.name}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </header>
    );
};

export default Header;
