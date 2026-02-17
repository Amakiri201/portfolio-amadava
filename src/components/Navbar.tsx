import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes';
import FullScreenMenu from './FullScreenMenu';
import { motion, MotionConfig } from 'framer-motion';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <nav 
                className={`fixed top-0 z-[70] w-full py-6 lg:py-10 px-6 lg:px-12 flex justify-between items-center transition-colors duration-300 ${isMenuOpen ? 'bg-transparent' : 'bg-[--bg-color]/80 backdrop-blur-md'}`}
            >
                 <div className="flex items-center space-x-8 lg:space-x-20">
                    <div
                        className="flex items-center space-x-2 cursor-pointer transition-colors duration-300 text-[--text-primary]"
                        onClick={() => {
                            if (location.pathname !== ROUTES.HOME) {
                                navigate(ROUTES.HOME);
                            } else {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                            setIsMenuOpen(false);
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-[45px] lg:h-[45px]">
                            <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <motion.button 
                        initial="hide"
                        animate={isMenuOpen ? "show" : "hide"}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex flex-col gap-1.5 p-2 rounded-full transition-colors z-[70] relative text-[--text-primary]"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
                            <motion.span 
                                variants={{
                                    hide: { rotate: 0, y: 0 },
                                    show: { rotate: 45, y: 8 },
                                }}
                                className="w-8 h-0.5 bg-current block"
                            />
                            <motion.span 
                                variants={{
                                    hide: { opacity: 1 },
                                    show: { opacity: 0 },
                                }}
                                className="w-8 h-0.5 bg-current block"
                            />
                            <motion.span 
                                variants={{
                                    hide: { rotate: 0, y: 0 },
                                    show: { rotate: -45, y: -8 },
                                }}
                                className="w-8 h-0.5 bg-current block"
                            />
                        </MotionConfig>
                    </motion.button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
