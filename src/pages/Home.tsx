import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Vision from '../components/Vision';

import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const location = useLocation();

    React.useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Vision />
        </>
    );
};

export default Home;
