import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Vision from './components/Vision';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-tertiary text-brand-primary font-sans selection:bg-brand-primary selection:text-white flex flex-col">
      <Navbar />
      <Sidebar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default App;
