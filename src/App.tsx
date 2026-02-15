import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-tertiary text-brand-primary font-sans selection:bg-brand-primary selection:text-white flex flex-col">
        <Navbar />
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
