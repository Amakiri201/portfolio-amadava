import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = React.useState<string>('');

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Center-ish of the screen
            threshold: 0
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        const sections = ['about', 'projects'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinkClass = (id: string) => {
        const isActive = (location.pathname === '/' && activeSection === id) ||
            (location.hash === `#${id}`) ||
            (id === 'projects' && location.pathname === '/projects');
        return `hover:text-brand-primary transition-all uppercase tracking-tight duration-300 ${isActive ? 'text-brand-primary font-bold' : ''}`;
    };

    return (
        <nav className="fixed top-0 w-full z-50 py-6 lg:py-10 px-6 lg:px-12 flex justify-between items-center bg-brand-tertiary/80 backdrop-blur-md">
            <div className="flex items-center space-x-8 lg:space-x-20">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => {
                        if (location.pathname !== '/') {
                            navigate('/');
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-8 lg:h-8 text-brand-primary">
                        <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="hidden md:flex space-x-6 lg:space-x-12 text-[10px] lg:text-[12px] font-medium text-brand-secondary">
                    <a href="/#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-brand-primary transition-colors uppercase tracking-tight">Home</a>
                    <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} >ABOUT ME</a>
                    <Link to="/projects" className={navLinkClass('projects')}>PROJECTS</Link>
                    <Link to="/contact" className={`hover:text-brand-primary transition-all uppercase tracking-tight duration-300 ${location.pathname === '/contact' ? 'text-brand-primary font-bold' : ''}`}>Contact</Link>
                </div>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className={`text-[11px] lg:text-[13px] font-medium border-b border-brand-primary pb-0.5 hover:text-brand-secondary hover:border-brand-secondary transition-all flex items-center gap-1 uppercase ${location.pathname === '/contact' ? 'text-brand-primary font-bold border-brand-primary' : ''}`}
                >
                    Book A Call <span className="text-[10px]">↗</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
