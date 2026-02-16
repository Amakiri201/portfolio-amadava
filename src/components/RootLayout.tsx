import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import LoadingRipple from './ui/LoadingRipple';
import { ROUTES } from '@/routes';

const RootLayout: React.FC = () => {
    const location = useLocation();

    // Dynamic Page Titles
    useEffect(() => {
        const path = location.pathname;
        let title = 'Amakiri | Frontend Developer';

        switch (path) {
            case ROUTES.PROJECTS:
                title = 'Projects | Amakiri';
                break;
            case ROUTES.CONTACT:
                title = 'Contact | Amakiri';
                break;
            case ROUTES.USES:
                title = 'Uses | Amakiri';
                break;
            default:
                if (path.startsWith('/project/')) {
                    title = 'Project Detail | Amakiri';
                }
        }
        document.title = title;
    }, [location]);

    return (
        <div className="min-h-screen bg-brand-tertiary text-brand-primary font-sans selection:bg-brand-primary selection:text-white flex flex-col">
            <ScrollRestoration />
            <Navbar />
            <Sidebar />
            <main className="flex-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <React.Suspense fallback={<LoadingRipple />}>
                            <Outlet />
                        </React.Suspense>
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
