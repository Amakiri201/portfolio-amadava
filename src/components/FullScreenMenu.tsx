import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { Button } from './ui/button';
import Toast from './ui/Toast';

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants = {
    closed: {
        y: "-100%",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as const,
            when: "afterChildren",
            staggerChildren: 0.03,
            staggerDirection: -1
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1] as const,
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const linkVariants = {
    closed: {
        y: -15,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: [0.76, 0, 0.24, 1] as const
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1] as const
        }
    }
};

const fadeInVariants = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "linear" as const
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "linear" as const,
            delay: 0.4
        }
    }
};

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    const [showToast, setShowToast] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("");

    const handleCopy = (text: string, message: string) => {
        navigator.clipboard.writeText(text);
        setToastMessage(message);
        setShowToast(true);
    };

    const handleNavigation = (path: string, hash?: string) => {
        if (hash) {
            if (location.pathname !== ROUTES.HOME) {
                navigate(`${ROUTES.HOME}${hash}`);
            } else {
                const element = document.querySelector(hash);
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
        }
        onClose();
    };

    const navLinks = [
        { id: '01', title: 'HOME', path: ROUTES.HOME, hash: '#hero' },
        { id: '03', title: 'ABOUT', path: ROUTES.HOME, hash: '#about' },
        { id: '02', title: 'PROJECTS', path: ROUTES.PROJECTS, hash: '#projects' },
        { id: '04', title: 'CONTACT', path: ROUTES.CONTACT },
    ];

    const socialLinks = [
        { title: 'Github', url: 'https://github.com/Amakiri201' },
        { title: 'Instagram', url: 'https://www.instagram.com/_davemak/' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/david-amakiri-872850295/' }
    ];

    const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 bg-[--bg-color] z-[60] flex flex-col p-6 lg:p-12 text-[--text-primary] overflow-hidden backdrop-blur-md"
                >
                    {/* Top Right Close Button - Removed, handled by Navbar */}
                    
                    <div className="flex flex-col lg:flex-row w-full h-full mt-24 lg:mt-0">
                        {/* Left Column - Navigation Links */}
                        <div className="flex-1 flex flex-col justify-center gap-6 lg:gap-8 pl-0 lg:pl-12">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    variants={linkVariants}
                                    className="overflow-hidden"
                                >
                                    <motion.button
                                        onClick={() => handleNavigation(link.path, link.hash)}
                                        onHoverStart={() => setHoveredLink(link.id)}
                                        onHoverEnd={() => setHoveredLink(null)}
                                        animate={{ 
                                            opacity: hoveredLink && hoveredLink !== link.id ? 0.3 : 1,
                                            x: hoveredLink === link.id ? 20 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="group flex items-center gap-8 text-left transition-colors"
                                    >
                                        <span className="text-sm lg:text-xl font-medium text-gray-500 font-mono">
                                            {link.id}
                                        </span>
                                        <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase">
                                            {link.title}
                                        </span>
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column - Info */}
                        <motion.div 
                            variants={fadeInVariants}
                            className="lg:flex-1 flex flex-col justify-center items-end text-right gap-12 lg:pr-12 mt-12 lg:mt-0"
                        >
                            {/* Social Links */}
                            <div className="flex flex-col gap-2 text-sm lg:text-base uppercase tracking-widest font-medium">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        onHoverStart={() => setHoveredSocial(link.title)}
                                        onHoverEnd={() => setHoveredSocial(null)}
                                        animate={{ 
                                            opacity: hoveredSocial && hoveredSocial !== link.title ? 0.3 : 1,
                                            x: hoveredSocial === link.title ? 10 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="transition-colors"
                                    >
                                        {link.title}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-1 text-sm lg:text-base font-mono text-[--text-primary]">
                                <Button 
                                    className='bg-transparent shadow-none hover:bg-transparent text-[--text-primary] justify-end px-0'
                                    onClick={() => handleCopy("davemak1998@gmail.com", "Email copied to clipboard")}
                                >
                                    davemak1998@gmail.com
                                </Button>
                                <Button 
                                    className='bg-transparent shadow-none hover:bg-transparent text-[--text-primary] justify-end px-0'
                                    onClick={() => handleCopy("+2349165961298", "Phone number copied to clipboard")}
                                >
                                    +234 916 5961 298
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
            <Toast 
                message={toastMessage} 
                isVisible={showToast} 
                onClose={() => setShowToast(false)} 
            />
        </AnimatePresence>
    );
};

export default FullScreenMenu;