import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[--text-primary] text-white px-6 lg:px-16 pt-24 lg:pt-32 pb-12 overflow-hidden relative">
            {/* Background Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[30%] h-full border-l border-white/5"></div>
                <div className="absolute top-0 left-0 w-full h-[30%] border-b border-white/5"></div>
                <div className="absolute bottom-0 left-[20%] w-[1px] h-full bg-white/5"></div>
                <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/5"></div>
                {/* Subtle dark squares matching the reference image */}
                <div className="absolute right-0 bottom-0 w-40 h-40 border-l border-t border-white/5"></div>
                <div className="absolute left-0 bottom-12 w-32 h-32 border-r border-t border-white/5"></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-0 relative z-10">
                <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-[12px] lg:text-[14px] font-medium text-white/50">
                    <Link to="/" className="px-5 py-2 lg:px-6 lg:py-2.5 bg-white/10 rounded-full text-white backdrop-blur-sm hover:bg-white/20 transition-all">Home</Link>
                    <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors uppercase tracking-tight">About Me</a>
                    {/* <a href="/#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-white transition-colors uppercase tracking-tight">Portfolio</a> */}
                    <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors uppercase tracking-tight">Projects</a>
                    <Link to="/contact" className="hover:text-white transition-colors uppercase tracking-tight">Contact</Link>
                </div>

                <div className="w-full lg:w-auto text-right">
                    <a
                        href="mailto:hello@amadava.com"
                        className="text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold tracking-tighter leading-none hover:opacity-70 transition-opacity block -mb-2 lg:-mb-4 whitespace-nowrap"
                    >
                        hello@amadava.com
                    </a>
                </div>
            </div>

            <div className="mt-20 lg:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] lg:text-[10px] uppercase tracking-widest text-white/20 relative z-10">
                <p>© 2024 AMADAVA - ALL RIGHTS RESERVED</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
