import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ui/ScrollReveal';

const Vision: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[--text-secondary] text-brand-primary px-6 lg:px-12 py-24 lg:py-32 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <ScrollReveal width="100%">
                    <h2 className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-tighter mb-6 lg:mb-8 leading-[1.1] lg:leading-[1]">
                        Got a Vision? Let's Bring It to Life!
                    </h2>
                    <p className="text-sm lg:text-base text-brand-secondary mb-10 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
                    </p>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={() => navigate('/contact')}
                            className="text-[14px] lg:text-[16px] font-medium border-b border-brand-primary pb-1 hover:text-[--text-primary] hover:border-[--text-primary] transition-all flex items-center gap-2 uppercase tracking-tight"
                        >
                            Book A Call <span className="text-[12px]">↗</span>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Vision;
