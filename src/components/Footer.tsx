import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (location.pathname !== ROUTES.HOME) {
            navigate(`${ROUTES.HOME}#${id}`);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[--bg-color] text-[--text-primary] px-6 lg:px-16 pt-24 lg:pt-32 pb-12 overflow-hidden relative border-t">
            {/* Background Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[30%] h-full border-l border-[--text-primary]"></div>
                <div className="absolute top-0 left-0 w-full h-[30%] border-b border-[--text-primary]"></div>
                <div className="absolute bottom-0 left-[20%] w-[1px] h-full bg-[--text-primary]"></div>
                <div className="absolute top-[40%] left-0 w-full h-[1px] bg-[--text-primary]"></div>
                {/* Subtle dark squares matching the reference image */}
                <div className="absolute right-0 bottom-0 w-40 h-40 border-l border-t border-[--text-primary]"></div>
                <div className="absolute left-0 bottom-12 w-32 h-32 border-r border-t border-[--text-primary]"></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-0 relative z-10">
                <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-[12px] lg:text-[14px] font-medium text-[--text-primary]/50">
                     <Button
                        variant="link"
                        onClick={() => navigate(ROUTES.HOME)}
                        className="hover:text-[--text-primary] transition-colors uppercase tracking-tight text-[--text-primary]/50 p-0 h-auto font-medium text-[12px] lg:text-[14px] hover:no-underline"
                    >
                      Home
                    </Button>
                    <a href={`${ROUTES.HOME}#about`} onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[--text-primary] transition-colors uppercase tracking-tight cursor-pointer">About Me</a>
                    {/* <a href={`${ROUTES.HOME}#portfolio`} onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-white transition-colors uppercase tracking-tight">Portfolio</a> */}
                    <Button
                        variant="link"
                        onClick={() => navigate(ROUTES.PROJECTS)}
                        className="hover:text-[--text-primary] transition-colors uppercase tracking-tight text-[--text-primary]/50 p-0 h-auto font-medium text-[12px] lg:text-[14px] hover:no-underline"
                    >
                        Projects
                    </Button>
                    <Button
                        variant="link"
                        onClick={() => navigate(ROUTES.CONTACT)}
                        className="hover:text-[--text-primary] transition-colors uppercase tracking-tight text-[--text-primary]/50 p-0 h-auto font-medium text-[12px] lg:text-[14px] hover:no-underline"
                    >
                        Contact
                    </Button>
                </div>

                <div className="w-full lg:w-auto text-right">
                    <a
                        href="mailto:davemak1998@gmail.com"
                        className="text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold tracking-tighter leading-none hover:opacity-70 transition-opacity block -mb-2 lg:-mb-4 whitespace-nowrap"
                    >
                        davemak1998@gmail.com
                    </a>
                </div>
            </div>

            <div className="mt-20 lg:mt-32 pt-12 border-t border-[--text-primary]/5 flex flex-col md:flex-row justify-between items-center text-[9px] lg:text-[10px] uppercase tracking-widest text-[--text-primary]/20 relative z-10">
                <p>© 2026 AMADAVA - ALL RIGHTS RESERVED</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/david-amakiri-872850295/" className="hover:text-[--text-primary] transition-colors">LinkedIn</a>
                    <a href="https://github.com/Amakiri201" className="hover:text-[--text-primary] transition-colors">GitHub</a>
                    <a href="https://www.instagram.com/_davemak/" className="hover:text-[--text-primary] transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
