import React from 'react';
import { projects } from './data/projects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-tertiary text-brand-primary font-sans selection:bg-brand-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 py-10 px-12 flex justify-between items-center bg-brand-tertiary/80 backdrop-blur-md">
        <div className="flex items-center space-x-20">
          <div className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-primary">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hidden md:flex space-x-12 text-[12px] font-medium text-brand-secondary">
            <a href="#about" className="hover:text-brand-primary transition-colors uppercase tracking-tight">About Me</a>
            <a href="#portfolio" className="hover:text-brand-primary transition-colors uppercase tracking-tight">Portfolio</a>
            <a href="#services" className="hover:text-brand-primary transition-colors uppercase tracking-tight">Services</a>
            <a href="#blog" className="hover:text-brand-primary transition-colors uppercase tracking-tight">Blog</a>
          </div>
        </div>
        <div>
          <a href="#contact" className="text-[13px] font-medium border-b border-brand-primary pb-0.5 hover:text-brand-secondary hover:border-brand-secondary transition-all flex items-center gap-1 uppercase">
            Book A Call <span className="text-[10px]">↗</span>
          </a>
        </div>
      </nav>

      <main className="relative min-h-screen">
        {/* Left Sidebars */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <div className="rotate-[-90deg] origin-center whitespace-nowrap text-[10px] font-medium text-brand-secondary tracking-widest uppercase">
            Product designer
          </div>
        </div>
        <div className="fixed left-6 bottom-16 z-40 hidden lg:block">
          <div className="rotate-[-90deg] origin-center whitespace-nowrap text-[10px] font-medium text-brand-secondary tracking-widest uppercase">
            2024
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row min-h-screen pt-24 overflow-hidden">
          {/* Content side */}
          <div className="flex-1 px-12 lg:pl-40 flex flex-col justify-center relative z-10">
            {/* Stats */}
            <div className="flex space-x-16 mb-24 lg:mb-40">
              <div>
                <div className="text-5xl lg:text-6xl font-light tracking-tight mb-2">+200</div>
                <div className="text-[11px] font-medium text-brand-secondary uppercase tracking-wider">Project completed</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-light tracking-tight mb-2">+50</div>
                <div className="text-[11px] font-medium text-brand-secondary uppercase tracking-wider">Startup raised</div>
              </div>
            </div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-[14rem] lg:text-[18rem] font-bold leading-[0.75] tracking-tighter mb-10 -ml-2">
                Hello
              </h1>
              <div className="flex items-center space-x-4 text-brand-secondary">
                <div className="w-8 h-[1px] bg-brand-secondary/40"></div>
                <p className="text-[14px] lg:text-[15px] font-medium tracking-tight">
                  It's D.Nova a design wizerd
                </p>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-auto pb-12">
              <a href="#works" className="text-[12px] font-medium flex items-center gap-2 hover:text-brand-secondary transition-colors">
                Scroll down <span>↓</span>
              </a>
            </div>
          </div>

          {/* Portrait side */}
          <div className="flex-1 relative lg:min-h-screen">
            <div className="lg:absolute inset-0 bg-brand-tertiary">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
                alt="D.Nova Portrait"
                className="w-full h-full object-cover grayscale brightness-[1.05]"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-12 py-32 bg-white border-y border-black/5">
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-12 items-center">
            <div className="col-span-7">
              <h2 className="text-5xl font-bold tracking-tighter mb-12">About Me</h2>
              <p className="text-2xl text-black/60 leading-relaxed font-light italic">
                "I am a highly skilled Senior Mobile & Frontend Engineer with over 6 years of experience specializing in Angular, React, React Native, Node.js, Next.js, Nest.js and TypeScript."
              </p>
              <div className="mt-12 space-y-6 text-black/40">
                <p>Throughout my career, I have successfully led cross-functional teams, provided architectural direction, and contributed to the development of scalable web and mobile applications.</p>
                <div className="flex flex-wrap gap-4 pt-6">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'AWS', 'Tailwind'].map(skill => (
                    <span key={skill} className="px-5 py-2 border border-black/10 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#f5f5f5] rounded-3xl p-8 flex flex-col justify-end">
                <div className="text-5xl font-bold mb-2">120%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-30 leading-tight">Increase in user<br />engagement rate</div>
              </div>
              <div className="aspect-square grayscale rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] col-span-2 grayscale rounded-3xl overflow-hidden mt-4 shadow-xl">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Works */}
        <section id="works" className="px-12 py-32">
          <div className="flex justify-between items-end mb-24">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-black/30">Selected Portfolio</div>
              <h2 className="text-7xl font-bold tracking-tighter">Latest Works</h2>
            </div>
            <a href="#" className="pb-2 border-b-2 border-black font-bold text-sm tracking-widest">VIEW ALL PROJECTS</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`group cursor-pointer ${index === 1 ? 'lg:translate-y-12' : index === 2 ? 'lg:translate-y-24' : ''}`}>
                <div className="relative aspect-[4/5] bg-[#f5f5f5] rounded-[2.5rem] overflow-hidden mb-8 transition-transform duration-700 group-hover:scale-[0.98]">
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                    </div>
                  </div>
                  <img src={`https://images.unsplash.com/photo-${1500 + index}?q=80&w=1000&auto=format&fit=crop`} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="px-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-30 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-black text-white px-12 py-40 text-center relative overflow-hidden mt-32">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 text-white/40">Exclusive Winter Deal</div>
            <h2 className="text-7xl font-bold tracking-tighter mb-12 leading-[0.9]">Got a Vision? Let's Bring It to Life!</h2>
            <p className="text-xl text-white/50 mb-16 max-w-xl mx-auto font-light">Available for limited freelance opportunities and collaborative ventures.</p>
            <button className="px-12 py-5 bg-white text-black font-bold tracking-widest uppercase hover:bg-white/90 transition-all rounded-full text-xs">Get a Free Consultation</button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="px-12 py-12 flex flex-col md:flex-row justify-between items-center bg-white border-t border-black/5 mt-auto">
          <div className="flex space-x-8 mb-8 md:mb-0">
            <a href="#" className="text-[10px] font-bold tracking-widest opacity-30 hover:opacity-100 uppercase transition-opacity">LinkedIn</a>
            <a href="#" className="text-[10px] font-bold tracking-widest opacity-30 hover:opacity-100 uppercase transition-opacity">GitHub</a>
            <a href="#" className="text-[10px] font-bold tracking-widest opacity-30 hover:opacity-100 uppercase transition-opacity">Dribbble</a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a href="mailto:hello@amadava.com" className="text-3xl font-bold tracking-tighter hover:opacity-50 transition-opacity">hello@amadava.com</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
