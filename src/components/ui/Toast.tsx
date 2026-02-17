import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

const toastVariants = {
    hidden: { 
        y: 50, 
        opacity: 0,
        scale: 0.9
    },
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
            duration: 0.3,
            ease: "easeOut" as const
        }
    },
    exit: { 
        y: 20, 
        opacity: 0, 
        scale: 0.9,
        transition: { 
            duration: 0.2 
        }
    }
};

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, duration = 2000 }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
                    <motion.div
                        variants={toastVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 pointer-events-auto"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">{message}</span>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
