import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Team from './pages/Team';
import Join from './pages/Join';
import Magnetic from './components/Magnetic';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Brutalist 404 page
function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 font-mono">
      <div className="max-w-md w-full border border-brutal-border bg-surface-card p-8 text-center space-y-4">
        <div className="text-neon text-6xl font-display font-extrabold">404</div>
        <div className="text-white text-sm font-bold uppercase tracking-wider">// MEMORY_SEGMENTATION_FAULT</div>
        <p className="text-neutral-400 text-xs font-sans">
          The requested memory address or route does not exist in the Code2Chill virtual filesystem.
        </p>
        <div className="pt-4">
          <Magnetic strength={0.25}>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-neon text-black font-bold uppercase text-xs hover:bg-white transition-colors"
            >
              &gt; RETURN_TO_ROOT
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-[#EDEDED] flex flex-col selection:bg-neon selection:text-black">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
