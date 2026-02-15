import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-tertiary text-black pt-48 flex flex-col items-center">
            {/* Header */}
            <header className="px-6 lg:px-16 mb-20 text-center flex flex-col items-center max-w-6xl w-full">
                <div className="flex flex-col items-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/5 shadow-sm mb-6 w-fit">
                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(34,34,34,0.8)]"></div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Case Studies</span>
                    </div>
                    <h1 className="text-6xl lg:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-8">
                        Selected <br /> <span className="text-brand-primary">Projects</span>
                    </h1>
                </div>
            </header>

            {/* Projects List */}
            <div className="flex flex-col w-full">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={project.id}
                            className="py-20 lg:py-40 px-6 lg:px-16 border-t border-white/5 flex flex-col items-center overflow-hidden w-full"
                        >
                            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-24 w-full max-w-6xl mx-auto`}>
                                {/* Text Side */}
                                <div className="w-full lg:w-[45%] space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-[2px] bg-brand-primary"></div>
                                        <span className="text-brand-primary font-bold text-lg lg:text-xl tracking-tighter">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter leading-tight">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg lg:text-xl text-white/50 font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="pt-4">
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="inline-flex items-center gap-4 px-8 py-4 bg-brand-primary text-white font-bold uppercase tracking-widest text-[12px] hover:bg-white hover:text-black transition-all group"
                                        >
                                            View Project
                                            <span className="text-lg transform transition-transform group-hover:translate-x-2">↗</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="w-full lg:w-[45%] group">
                                    <Link to={`/project/${project.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-2xl lg:rounded-3xl border border-white/5 bg-white/5">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-brand-tertiary/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Footer Call to Action */}
            <footer className="px-6 lg:px-16 py-32 flex flex-col items-center justify-center border-t border-white/5 bg-black/20 w-full">
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-8 text-center max-w-2xl">
                    Have a project in mind? Let's build something extraordinary.
                </h2>
                <Link
                    to="/contact"
                    className="text-xl lg:text-2xl font-bold border-b-2 border-brand-primary pb-2 hover:text-brand-primary transition-colors text-white"
                >
                    Get in touch
                </Link>
            </footer>
        </div>
    );
};

export default Projects;
