import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-tertiary text-brand-primary">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-brand-primary border-b border-brand-primary pb-1">Back to Home</Link>
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

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-16 z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-brand-primary text-white text-[10px] lg:text-[12px] font-bold uppercase tracking-widest mb-4 rounded-full">
                                {project.category}
                            </span>
                            <h1 className="text-[3.5rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
                                {project.title}
                            </h1>
                        </div>
                        {project.link !== '#' && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center gap-3"
                            >
                                Visit Website <span className="text-lg">↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-12">
                    <div className="flex flex-wrap gap-4 mb-12">
                        {project.technologies.map(tech => (
                            <span key={tech} className="text-[10px] lg:text-[12px] font-bold uppercase tracking-widest border border-black/10 px-4 py-1 rounded-full text-brand-secondary">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Left Side: Overview */}
                <div className="lg:col-span-7 space-y-12">
                    <div>
                        <h2 className="text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-primary"></span> Overview
                        </h2>
                        <p className="text-xl lg:text-3xl font-medium leading-[1.4] tracking-tight">
                            {project.longDescription}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-primary"></span> The Goal
                        </h2>
                        <p className="text-lg lg:text-xl text-brand-secondary leading-relaxed">
                            {project.keyGoal}
                        </p>
                    </div>
                </div>

                {/* Right Side: Features */}
                <div className="lg:col-span-5 bg-white p-8 lg:p-12 border border-black/5 shadow-sm rounded-2xl h-fit">
                    <h2 className="text-[12px] font-bold uppercase tracking-widest text-brand-secondary mb-10 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-brand-primary"></span> Key Features
                    </h2>
                    <ul className="space-y-10">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex gap-6">
                                <span className="text-[12px] font-bold text-brand-primary opacity-40 mt-1">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-sm text-brand-secondary leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Footer Navigation */}
            <section className="px-6 lg:px-16 py-20 bg-brand-tertiary text-white flex justify-between items-center border-t border-white/5">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors"
                >
                    <span className="transform transition-transform group-hover:-translate-x-2">←</span> Back home
                </button>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-30">
                    © 2026 Amakiri David Lucky
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
