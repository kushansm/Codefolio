import { useState } from 'react';
import {
    FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaResearchgate
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SocialMedia from '../../assets/SocialMedia2.gif';

// Tailwind background color classes
const colorPalette = [
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-rose-500',
];

// Social links
const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/kushansm', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kushan-siriwardhana-a07131167/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/kushandileep', label: 'X' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/kushan.siriwardhana', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/dilu_boy_/', label: 'Instagram' },
    { icon: <FaResearchgate />, url: 'https://www.researchgate.net/profile/Kushan-Siriwardhana?ev=hdr_xprf', label: 'ResearchGate' },
];

export function FloatingSocialMenu() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed right-6 bottom-24 z-40 flex flex-col items-center">
            {/* Social Icons */}
            <AnimatePresence>
                {expanded && (
                    <div className="flex flex-col items-center mb-2">
                        {socialLinks.map((item, index) => {
                            const colorClass = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                            return (
                                <motion.a
                                    key={item.label}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={`mb-2 w-12 h-12 ${colorClass} text-white rounded-full flex items-center justify-center 
                                                shadow-lg hover:scale-110 hover:rotate-6 
                                                hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300`}
                                >
                                    {item.icon}
                                </motion.a>
                            );
                        })}
                    </div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setExpanded(prev => !prev)}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
            >
                <img
                    src={SocialMedia}
                    alt="Social Toggle"
                    className="w-8 h-8 transition-transform duration-500"
                />
            </motion.button>
        </div>
    );
}
