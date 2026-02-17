import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '../data/projects';
import PulsingDot from './ui/PulsingDot';
import { motion } from 'framer-motion';
import { ROUTES } from '@/routes';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="portfolio" className="relative px-6 lg:px-12 py-20 lg:py-32 bg-[--bg-color]">
            <div id="projects" className="absolute -top-20" />
            <div className="flex flex-col items-center mb-16 lg:mb-24">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[--text-primary]/5 rounded-full border border-[--text-primary]/5 shadow-sm mb-8">
                    <PulsingDot color="bg-[--text-primary]" size="w-2 h-2" />
                    <span className="text-[11px] font-medium tracking-tight uppercase text-[--text-primary]">Portfolio</span>
                </div>

                {/* Title */}
                <h2 className="text-5xl lg:text-[7rem] font-bold tracking-tighter text-[--text-primary] leading-[0.9]">
                    Latest Works
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16 lg:px-12">
                {projects.slice(0, 3).map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="w-full"
                    >
                        <Button
                            variant="ghost"
                            onClick={() => navigate(ROUTES.PROJECT_DETAIL.replace(':id', project.id))}
                            className="group cursor-pointer flex flex-col h-auto p-0 hover:bg-transparent w-full"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/11] bg-[--text-primary]/5 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-[--text-primary]/5 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop`;
                                    }}
                                    className="w-full h-full object-cover grayscale brightness-[0.9] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />

                                {/* Overlay with Arrow Icon */}
                                <div className="absolute inset-0 flex items-center justify-center bg-[--text-primary]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[--text-primary] text-[--bg-color] rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                                        <ArrowUpRight />
                                    </div>
                                </div>

                                {/* Bottom Meta Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white text-[10px] font-medium uppercase tracking-widest">{project.category}</span>
                                    <span className="text-white text-[10px] font-medium uppercase tracking-widest">{project.id}</span>
                                </div>
                            </div>

                            {/* Project Info Below Image */}
                            <div className="flex justify-between items-center px-2 w-full">
                                <h3 className="text-lg lg:text-xl font-bold tracking-tight text-[--text-primary]">
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-[--text-primary]/40 font-medium uppercase tracking-tight">For</span>
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[--text-primary]/5 rounded-md border border-[--text-primary]/5">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[--text-primary]/80">
                                            <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" />
                                        </svg>
                                        <span className="text-[10px] font-bold tracking-tighter uppercase">Squeeze</span>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                ))}
            </div>

            {/* Footer / View More */}
            < div className="mt-20 lg:mt-24 flex flex-col items-center" >
                <div className="flex items-center gap-4 group cursor-pointer transition-all hover:gap-6">
                    <span className="text-[13px] font-medium text-[--text-primary]/40 uppercase tracking-tight">Check out More</span>
                    <div className="w-8 h-[1px] bg-[--text-primary]/20"></div>
                    <Button
                        variant="link"
                        onClick={() => navigate(ROUTES.PROJECTS)}
                        className="text-[14px] lg:text-[16px] font-bold text-[--text-primary] flex items-center gap-2 uppercase tracking-tight p-0 h-auto hover:no-underline"
                    >
                        View More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
