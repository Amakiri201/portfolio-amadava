import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowUpRight, MoveLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ROUTES } from '@/routes';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-tertiary text-brand-primary">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button onClick={() => navigate(ROUTES.PROJECTS)} className="text-brand-primary border-b border-brand-primary pb-1">Back to Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F8F8] text-brand-primary">
            {/* Project Hero */}
            <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden bg-brand-tertiary">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={project.image}
                        alt={project.title}
                        decoding="async"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                {/* BACK BUTTON FOR MOBILE AND DESKTOP */}
                <section >
                    <div className="lg:hidden">
                        <Button
                            onClick={() => navigate(ROUTES.PROJECTS)}
                            variant="ghost"
                            size="icon"
                            className="absolute top-[100px] left-[20px] lg:left-[150px] z-10 w-14 h-14 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap"
                        >
                            <MoveLeft size={24} />
                        </Button>
                    </div>

                    <div className="hidden lg:block">
                        <Button
                            onClick={() => navigate(ROUTES.PROJECTS)}
                            variant="ghost"
                            size="icon"
                            className="absolute top-40 left-[20px] lg:left-[150px] z-10 w-20 h-20 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap"
                        >
                            <MoveLeft size={24} />
                        </Button>
                    </div>
                </section>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-16 lg:px-[120px] z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8">
                        <div className="flex-1">
                            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-brand-primary text-white text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-widest mb-3 md:mb-4 rounded-full">
                                {project.category}
                            </span>
                            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
                                {project.title}
                            </h1>
                        </div>
                        {project.link !== '#' && (
                            <Button
                                onClick={() => window.open(project.link, '_blank')}
                                className="w-full lg:w-auto px-6 py-3 md:px-8 md:py-7 rounded-none bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap"
                            >
                                Visit Website <span className="text-base md:text-lg"><ArrowUpRight /></span>
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 md:px-10 lg:px-20 xl:px-[120px] py-12 md:py-16 lg:py-24 xl:py-32 grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
                <div className="lg:col-span-12">
                    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-10 lg:mb-12">
                        {project.technologies.map(tech => (
                            <span key={tech} className="text-[9px] md:text-[10px] lg:text-[12px] font-bold uppercase tracking-widest border border-black/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-brand-secondary">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Left Side: Overview */}
                <div className="lg:col-span-7 space-y-8 md:space-y-10 lg:space-y-12">
                    <div>
                        <h2 className="text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
                            <span className="w-6 md:w-8 h-[1px] bg-brand-primary"></span> Overview
                        </h2>
                        <p className="text-lg md:text-2xl lg:text-3xl font-medium leading-[1.4] tracking-tight">
                            {project.longDescription}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-4 md:mb-5 lg:mb-6 flex items-center gap-2 md:gap-3">
                            <span className="w-6 md:w-8 h-[1px] bg-brand-primary"></span> The Goal
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-brand-secondary leading-relaxed">
                            {project.keyGoal}
                        </p>
                    </div>
                </div>

                {/* Right Side: Features */}
                <Card className="lg:col-span-5 bg-white p-6 md:p-8 lg:p-10 xl:p-12 border border-black/5 shadow-sm rounded-xl md:rounded-2xl h-fit">
                    <h2 className="text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-6 md:mb-8 lg:mb-10 flex items-center gap-2 md:gap-3">
                        <span className="w-6 md:w-8 h-[1px] bg-brand-primary"></span> Key Features
                    </h2>
                    <ul className="space-y-6 md:space-y-8 lg:space-y-10">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex gap-3 md:gap-4 lg:gap-6">
                                <span className="text-[10px] md:text-[11px] lg:text-[12px] font-bold text-brand-primary opacity-40 mt-1">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="font-bold text-base md:text-lg mb-1.5 md:mb-2">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-brand-secondary leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card>
            </section>

            {/* Footer Navigation */}
            <section className="px-6 lg:px-[120px] md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 bg-brand-tertiary text-white flex flex-col md:flex-row justify-between items-center md:items-center gap-6 md:gap-4 border-t border-white/5">
                <Button
                    onClick={() => navigate(ROUTES.PROJECTS)}
                    className="w-full lg:w-auto px-6 py-3 md:px-8 md:py-7 rounded-none bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap"
                >
                    <span className="transform transition-transform group-hover:-translate-x-2"><MoveLeft /></span> Back to Projects
                </Button>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-30 text-center md:text-right">
                    © 2026 Amakiri David Lucky
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
