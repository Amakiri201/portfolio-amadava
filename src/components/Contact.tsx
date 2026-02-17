import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

    const validateForm = () => {
        const newErrors: { email?: string; message?: string } = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('submitting');

        try {
            const response = await fetch('https://formsubmit.co/ajax/davemak1998@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.email}`,
                    _template: 'table'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user starts typing
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    if (status === 'success') {
        return (
            <section id="contact" className="bg-[--bg-color] px-6 lg:px-12 py-32 lg:py-48 min-h-screen flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md"
                >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-8" />
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Message Sent!</h2>
                    <p className="text-brand-secondary text-lg mb-12">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                        onClick={() => setStatus('idle')}
                        className="bg-brand-primary text-white px-10 py-4 font-bold uppercase tracking-widest rounded-none h-auto"
                    >
                        Send another message
                    </Button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="contact" className="bg-[--bg-color] px-6 lg:px-12 py-32 lg:py-48 min-h-screen relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-[3.5rem] lg:text-[6rem] text-[--text-primary] font-bold tracking-tighter mb-12 lg:mb-16 leading-[0.9]">
                    Let's Make Magic!
                </h2>

                <div className="w-full h-[5px] bg-white/5 mb-16 relative">
                    <div className="absolute top-0 left-0 w-32 h-full bg-[--text-primary] shadow-[--text-secondary] shadow-[0_0_20px_rgba(0,245,255,0.5)]"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-16 max-w-2xl">
                    <div className="relative group">
                        <label htmlFor="email" className={`block text-xs font-medium uppercase tracking-widest mb-4 transition-colors ${errors.email ? 'text-red-500' : 'text-black/40 group-focus-within:text-[--text-primary]'}`}>
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-transparent border-b py-4 focus:outline-none transition-all text-xl lg:text-2xl placeholder:text-black/2 ${errors.email ? 'border-red-500' : 'border-black focus:border-[--text-primary]'}`}
                            placeholder="hello@example.com"
                        />
                        {errors.email && (
                            <p className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="relative group">
                        <label htmlFor="message" className={`block text-xs font-medium uppercase tracking-widest mb-4 transition-colors ${errors.message ? 'text-red-500' : 'text-black/40 group-focus-within:text-[--text-primary]'}`}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={1}
                            value={formData.message}
                            onChange={(e) => {
                                handleChange(e);
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            className={`w-full max-h-[250px] bg-transparent border-b py-4 focus:outline-none transition-all text-xl lg:text-2xl placeholder:text-black/2 resize-none overflow-hidden ${errors.message ? 'border-red-500' : 'border-black focus:border-[--text-primary]'}`}
                            placeholder="Tell me about your project"
                        />
                        {errors.message && (
                            <p className="absolute -bottom-6 left-0 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-3 text-red-500 bg-red-50 p-4 border border-red-200">
                            <AlertCircle size={20} />
                            <p className="text-sm font-bold uppercase tracking-widest">Something went wrong. Please try again.</p>
                        </div>
                    )}

                    <div className="pt-8">
                        <Button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="group relative inline-flex items-center gap-4 bg-[--text-primary] text-black px-8 py-4 lg:px-10 lg:py-5 font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] h-auto rounded-none hover:bg-[--text-primary] disabled:opacity-70 disabled:grayscale disabled:scale-100"
                        >
                            <span className="relative z-10 flex text-white items-center gap-3">
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                        </svg>
                                        Send message
                                    </>
                                )}
                            </span>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-black/10 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                        </Button>
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
