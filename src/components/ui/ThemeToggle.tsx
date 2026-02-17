import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    // Determine if we are currently in dark mode
    // (Handling 'system' by checking media query if needed, similar to previous logic)
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        playClickSound();
    };

    const playClickSound = () => {
        // Simple "pop" sound
        const audio = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YT...") 
        // Note: Real base64 would be too long for this snippet, using a placeholder logic or empty for now.
        // In a real app, I would import a confirmed sound file. 
        // For this demo, let's just emit a browser beep if possible or skip sound to minimize artifacts.
        // Or actually, let's try a very short, real base64 click if I had one. 
        // Since I don't have a verified one handy, I will comment this out to avoid errors.
        // audio.play();
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary"
            title={isDark ? "Activate light mode" : "Activate dark mode"}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: isDark ? 'white' : 'black' }}
                className="w-8 h-8 transition-colors duration-300"
                // Rotate: Sun (Dark Mode) at 90, Moon (Light Mode) at 40
                animate={{ rotate: isDark ? 90 : 40 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <mask id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <motion.circle
                        // The mask circle that "eclipses" the sun
                        cx="12"
                        cy="4"
                        r="9"
                        fill="black"
                        animate={{ 
                            // isDark (Sun): Mask OUT (24)
                            // !isDark (Moon): Mask IN (12)
                            cx: isDark ? 24 : 12,
                            cy: isDark ? 0 : 4 
                        }} 
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                </mask>

                <motion.circle
                    // The main body
                    cx="12"
                    cy="12"
                    r="9"
                    fill="currentColor"
                    mask="url(#moon-mask)"
                    // isDark (Sun): Radius 5
                    // !isDark (Moon): Radius 9
                    animate={{ r: isDark ? 5 : 9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />

                <motion.g
                    // Sun rays
                    stroke="currentColor"
                    // isDark (Sun): Visible
                    // !isDark (Moon): Hidden
                    animate={{ 
                        opacity: isDark ? 1 : 0,
                        scale: isDark ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </motion.g>
            </motion.svg>
        </button>
    );
};

export default ThemeToggle;
