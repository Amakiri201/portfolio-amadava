import { motion } from 'framer-motion';

interface PulsingDotProps {
    color?: string;
    size?: string;
    duration?: number;
}

const PulsingDot: React.FC<PulsingDotProps> = ({
    color = "bg-brand-primary",
    size = "w-2 h-2",
    duration = 2
}) => {
    return (
        <div className="relative flex items-center justify-center">
            {/* Core Dot */}
            <motion.div
                className={`${size} rounded-full ${color} relative z-10`}
            />

            {/* Pulsing Ring */}
            <motion.div
                className={`absolute inset-0 rounded-full ${color}`}
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{
                    opacity: 0,
                    scale: 2.5
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeOut"
                }}
            />
        </div>
    );
};

export default PulsingDot;
