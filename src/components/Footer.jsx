
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const { contactInfo } = portfolioData.footer;
    const { socials } = portfolioData.hero;
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_eatn9rh', 'template_yprzjy5', form.current, 'U-tim9JNaZGaUy0PK')
            .then((result) => {
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.error(error);
                setStatus('error');
            });
    };

    return (
        <footer id="contact" className="bg-dark pt-20 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">Let's <span className="text-skyBlue">Connect</span></h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            I am Software Engineer. If you want to connect With me Fill this Form and Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-skyBlue">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-white transition-colors">{contactInfo.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-skyBlue">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">{contactInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-skyBlue">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    {typeof contactInfo.location === 'string' ? (
                                        <p className="font-medium">{contactInfo.location}</p>
                                    ) : (
                                        <div className="space-y-1">
                                            <p className="font-medium text-sm"><span className="text-gray-500">Current:</span> {contactInfo.location.current}</p>
                                            <p className="font-medium text-sm"><span className="text-gray-500">Home:</span> {contactInfo.location.home}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            {socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-skyBlue hover:text-white hover:border-skyBlue transition-all"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    className="w-full bg-darkLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-skyBlue transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-darkLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-skyBlue transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-darkLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-skyBlue transition-colors"
                                    placeholder="Discussion regarding..."
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-darkLight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-skyBlue transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-skyBlue to-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>Send Message <FaPaperPlane /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {portfolioData.header.name}. All rights reserved. Made with React & Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
