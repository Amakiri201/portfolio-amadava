import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Uses: React.FC = () => {
    const navigate = useNavigate();

    const devTools = [
        {
            name: "React",
            link: "https://react.dev",
            description: "is the library for web and native user interfaces. It allows for a component-centric mental model that makes sense for both designers and developers."
        },
        {
            name: "Vite",
            link: "https://vitejs.dev",
            description: "is the build tool and development server. It's incredibly fast and provides a great developer experience with instant HMR."
        },
        {
            name: "Tailwind CSS",
            link: "https://tailwindcss.com",
            description: "is a utility-first CSS framework for rapidly building custom user interfaces. It's the main styling engine for this project."
        },
        {
            name: "shadcn/ui",
            link: "https://ui.shadcn.com",
            description: "provides beautifully designed components built with Radix UI and Tailwind CSS. It offers accessible, customizable components that maintain code ownership."
        },
        {
            name: "TypeScript",
            link: "https://www.typescriptlang.org",
            description: "adds syntax for types to JavaScript, enabling better editor tooling and error checking."
        },
        {
            name: "React Router",
            link: "https://reactrouter.com",
            description: "enables client-side routing, allowing for single-page application navigation."
        },
        {
            name: "ESLint",
            link: "https://eslint.org",
            description: "analyzes the code to find and fix problems, ensuring code quality and consistency."
        }
    ];

    const systemSpecs = [
        { key: "Desktop", value: "HP\"" },
        { key: "Operating system", value: "macOS" },
        { key: "Browser", value: "Arc Browser" },
        { key: "Keyboard", value: "Logitech Keyboard" },
        { key: "Mouse", value: "Apple Magic Trackpad" },
        { key: "Laptop", value: "Macbook Pro 16\"" },
        { key: "Headphones", value: "Sony WH-1000XM5" }
    ];

    return (
        <div className="min-h-screen bg-[--bg-color] text-[--text-primary] selection:bg-[--text-primary] selection:text-black">
            <div className="max-w-3xl mx-auto px-6 lg:px-0 py-32 lg:py-48 flex flex-col items-center">
                {/* Back button */}
                <div className="w-full mb-12 flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="text-[15px] uppercase tracking-widest text-[--text-primary] hover:text-[--text-secondary] transition-colors p-0 h-auto hover:bg-transparent"
                    >
                        ← Back
                    </Button>
                </div>

                <div className="w-full">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-[--text-primary] mb-8">Uses</h1>
                    <p className="text-lg lg:text-xl text-[--text-primary] leading-relaxed font-light mb-24 max-w-2xl">
                        The Uses page, where I pull back the curtain to reveal the tools and technologies that power this projects. Here, you'll find a curated collection of the software, frameworks, and resources that have been instrumental in bringing this idea to life. From cutting-edge development platforms to tried-and-true design software, each tool has played a vital role in shaping this project.
                    </p>

                    <section className="mb-32">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-[--text-primary] mb-12">Development</h2>
                        <ul className="space-y-8">
                            {devTools.map((tool, index) => (
                                <li key={index} className="flex items-start group">
                                    <span className="text-[--text-primary] mt-1.5 mr-4 text-xs">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className="text-base lg:text-lg leading-relaxed font-light">
                                        I use <Button variant="link" onClick={() => window.open(tool.link, "_blank")} className="p-0 px-2 w-fit-content h-0 text-[--text-primary] transition-colors font-medium">{tool.name}</Button> {tool.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-48">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-[--text-primary] mb-12">System</h2>
                        <div>
                            {systemSpecs.map((spec, index) => (
                                <div key={index} className="flex justify-between py-4 border-b border-[--text-primary] items-center">
                                    <span className="text-xs lg:text-sm font-bold text-[--text-primary] uppercase tracking-widest">{spec.key}</span>
                                    <span className="text-sm lg:text-base font-light">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer className="w-full flex justify-center pb-20">
                        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 text-[--text-primary]">
                            © 2026 Amakiri David Lucky
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Uses;
