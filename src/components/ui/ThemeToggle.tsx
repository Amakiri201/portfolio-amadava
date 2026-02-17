import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    // Determine if we are currently in dark mode
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full transition-colors hover:bg-[--text-primary]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--text-primary]"
            title={isDark ? "Activate light mode" : "Activate dark mode"}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        >
            <motion.div
                initial={false}
                animate={{ 
                    scale: [0.8, 1.2, 1],
                    rotate: isDark ? 0 : 180
                }}
                transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="text-[--text-primary]"
            >
                {isDark ? (
                    <Moon className="w-6 h-6" />
                ) : (
                    <Sun className="w-6 h-6" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
