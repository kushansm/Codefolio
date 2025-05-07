import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import SocialMedia from '../../assets/SocialMedia.png'

const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaFacebook />, url: 'https://facebook.com/yourusername', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', label: 'Instagram' },
];

export function FloatingSocialMenu() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed right-6 bottom-24  z-40 flex flex-col items-center">
            {/* Social Icons Stack */}
            <div
                className={`flex flex-col items-center transition-all duration-500 ease-in-out mb-2 ${
                    expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
                {socialLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.label}
                        className="mb-2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all duration-300"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Main button with GIF */}
            <button
                onClick={() => setExpanded(prev => !prev)}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:rotate-90"
            >
                <img
                    src={SocialMedia}
                    alt="Social Toggle"
                    className="w-8 h-8"
                />
            </button>
        </div>
    );
}
