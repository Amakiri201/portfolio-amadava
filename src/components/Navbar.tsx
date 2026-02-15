import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full z-50 py-6 lg:py-10 px-6 lg:px-12 flex justify-between items-center bg-brand-tertiary/80 backdrop-blur-md">
            <div className="flex items-center space-x-8 lg:space-x-20">
                <div className="flex items-center space-x-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-primary">
                        <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="hidden md:flex space-x-6 lg:space-x-12 text-[10px] lg:text-[12px] font-medium text-brand-secondary">
                    <a href="#about" className="hover:text-brand-primary transition-colors uppercase tracking-tight">About Me</a>
                    <a href="#portfolio" className="hover:text-brand-primary transition-colors uppercase tracking-tight">Portfolio</a>
                    <a href="#projects" className="hover:text-brand-primary transition-colors uppercase tracking-tight">Projects</a>
                </div>
            </div>
            <div>
                <a href="#contact" className="text-[11px] lg:text-[13px] font-medium border-b border-brand-primary pb-0.5 hover:text-brand-secondary hover:border-brand-secondary transition-all flex items-center gap-1 uppercase">
                    Book A Call <span className="text-[10px]">↗</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
