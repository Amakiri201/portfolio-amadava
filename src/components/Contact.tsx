import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-[--bg-color] px-6 lg:px-12 py-32 lg:py-48 min-h-screen relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-[3.5rem] lg:text-[6rem] text-[--text-primary] font-bold tracking-tighter mb-12 lg:mb-16 leading-[0.9]">
                    Let's Make Magic!
                </h2>

                <div className="w-full h-[5px] bg-white/5 mb-16 relative">
                    <div className="absolute top-0 left-0 w-32 h-full bg-[--text-primary] shadow-[0_0_20px_rgba(0,245,255,0.5)]"></div>
                </div>

                <form className="space-y-12 lg:space-y-16 max-w-2xl">
                    <div className="relative group">
                        <label htmlFor="email" className="block text-xs font-medium text-black/40 uppercase tracking-widest mb-4 transition-colors group-focus-within:text-[--text-primary]">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-[--text-primary] transition-all text-xl lg:text-2xl placeholder:text-white/5"
                            placeholder="hello@example.com"
                        />
                    </div>

                    <div className="relative group">
                        <label htmlFor="message" className="block text-xs font-medium text-black/40 uppercase tracking-widest mb-4 transition-colors group-focus-within:text-[--text-primary]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={1}
                            className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-[--text-primary] transition-all text-xl lg:text-2xl placeholder:text-white/5 resize-none overflow-hidden"
                            placeholder="Tell me about your project"
                            onChange={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center gap-4 bg-[--text-primary] text-black px-8 py-4 lg:px-10 lg:py-5 font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex text-white items-center gap-3">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                                Send message
                            </span>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-black/10 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        </button>
                    </div>
                </form>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute bottom-12 right-12 text-[10px] uppercase tracking-widest opacity-20 hidden lg:block">
                © 2026 Amakiri - Frontend Developer
            </div>
        </section>
    );
};

export default Contact;
