import React from 'react';
import { motion } from 'framer-motion';

const LoadingRipple: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[--bg-color]">
            <div className="relative w-20 h-20">
                {/* Ring 1 */}
                <motion.div
                    className="absolute inset-0 border-4 border-[--text-primary] rounded-full opacity-0"
                    animate={{
                        scale: [1, 2],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 0
                    }}
                />
                {/* Ring 2 - Delayed */}
                <motion.div
                    className="absolute inset-0 border-4 border-[--text-primary] rounded-full opacity-0"
                    animate={{
                        scale: [1, 2],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        delay: 0.75,
                        repeatDelay: 0
                    }}
                />

                {/* Center dot (optional, provides an anchor) */}
                <motion.div
                    className="absolute inset-0 m-auto w-3 h-3 bg-[--text-primary] rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingRipple;
