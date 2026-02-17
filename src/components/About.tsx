import React from 'react';
import Amakiri from "@/assets/amakiri.png";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ui/ScrollReveal';

const About: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="about" className="px-6 lg:px-12 py-20 lg:py-32 bg-[--bg-color]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                    <ScrollReveal>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 lg:mb-12">About Me</h2>
                        <p className="text-xl lg:text-2xl text-[--text-primary]/60 leading-relaxed font-light italic">
                            "I'm a React Developer based in Lagos, Nigeria, My expertise lies in React.js and Next.js, with a growing proficiency in Vue.js and Nuxt.js. Being comfortable with code allows me to rapidly prototype and validate user experiences. If you're curious about the tools and software I use, check out my <Button variant="link" onClick={() => navigate('/uses')} className="text-[--text-primary] hover:text-[--text-secondary] rounded-none border-b border-[--text-primary] transition-colors p-0 h-auto font-light italic text-xl lg:text-2xl hover:no-underline">uses page</Button>."
                        </p>
                        <div className="mt-8 lg:mt-12 space-y-6 text-[--text-primary]/40 text-sm lg:text-base">
                            <p>Throughout my career, I have successfully led cross-functional teams, provided architectural direction, and contributed to the development of scalable web and mobile applications.</p>
                            <div className="flex flex-wrap gap-3 pt-6">
                                {['React', 'Next.js', 'TypeScript', 'Vue.js', 'React Native', 'Tailwind'].map(skill => (
                                    <span key={skill} className="px-4 py-1.5 lg:px-5 lg:py-2 border border-[--text-primary]/10 rounded-full text-[10px] lg:text-xs font-bold tracking-widest uppercase hover:bg-[--text-primary] hover:text-[--bg-color] transition-all cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <ScrollReveal delay={0.2}>
                        <div className="aspect-square bg-[--text-primary]/5 rounded-3xl p-6 lg:p-8 flex flex-col justify-end h-full">
                            <div className="text-3xl lg:text-5xl font-bold mb-2">120%</div>
                            <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest opacity-30 leading-tight">Increase in user<br />engagement rate</div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="aspect-square grayscale rounded-3xl overflow-hidden shadow-xl">
                            <img src={Amakiri} className="w-full h-full object-cover" alt="Detail" loading="lazy" decoding="async" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.4} width="100%">
                        <div className="aspect-[4/5] col-span-2 grayscale rounded-3xl overflow-hidden mt-4 shadow-xl">
                            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail 2" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
