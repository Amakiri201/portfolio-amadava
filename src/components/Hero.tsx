import React from 'react';
import Amakiri from "@/assets/amakiri.png";
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative flex flex-col lg:flex-row lg:min-h-screen lg:pt-[7rem] overflow-hidden">
            {/* Content side */}
            <div className="flex-1 px-6 lg:px-12 lg:pl-40 flex flex-col justify-center relative z-10 lg:py-0 lg:pt-[100px]">
                {/* Stats */}
                <ScrollReveal delay={0.2}>
                    <div className="flex space-x-8 lg:space-x-16 mt-20 lg:mt-0 mb-12 lg:mb-40">
                        <div>
                            <div className="text-4xl lg:text-6xl font-light tracking-tight mb-2 text-[--text-primary]">+24</div>
                            <div className="text-[10px] lg:text-[11px] font-medium text-[--text-secondary] uppercase tracking-wider">Project completed</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-6xl font-light tracking-tight mb-2 text-[--text-primary]">+10</div>
                            <div className="text-[10px] lg:text-[11px] font-medium text-[--text-secondary] uppercase tracking-wider">Startup raised</div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Headline */}
                <div className="relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-[0.8] lg:leading-[0.75] tracking-tighter mb-8 lg:mb-10 -ml-1 lg:-ml-2 text-[--text-primary]"
                    >
                        Hello
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex items-center space-x-3 lg:space-x-4 text-[--text-secondary]"
                    >
                        <div className="w-6 lg:w-8 h-[1px] bg-[--text-secondary]/40"></div>
                        <p className="text-[12px] lg:text-[15px] font-medium tracking-tight">
                            It's Amakiri a frontend developer
                        </p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-8 lg:mt-auto pb-6 lg:pb-12">
                    <a href="#portfolio" className="text-[10px] lg:text-[12px] font-medium flex items-center gap-2 text-[--text-primary] hover:text-[--text-secondary] transition-colors uppercase tracking-widest">
                        Scroll down <span>↓</span>
                    </a>
                </div>
            </div>

            {/* Portrait side */}
            <div className="flex-1 relative w-full lg:min-h-[60vh]">
                <div className="lg:absolute inset-0 bg-[--bg-color]">
                    <motion.img
                        src={Amakiri}
                        alt="D.Nova Portrait"
                        decoding="async"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="lg:w-[60%] h-full object-cover grayscale brightness-[1.05]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
