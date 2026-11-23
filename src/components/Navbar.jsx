import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ArrowUpRight, Instagram, Linkedin, Users } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'INDEX', path: '/', code: '00' },
    { name: 'PROJECTS', path: '/projects', code: '01' },
    { name: 'EVENTS', path: '/events', code: '02' },
    { name: 'CORE_CREW', path: '/team', code: '03' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-brutal-border">
      {/* Top telemetry banner with live club stats */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-black border-b border-brutal-border text-[10px] font-mono text-neutral-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-fast"></span>
            <span className="text-white font-semibold">C2C_SYS: ONLINE</span>
          </span>
          <span className="text-neutral-600">//</span>
          <span>CHITKARA UNIVERSITY TECHNICAL COMMUNITY</span>
          <span className="text-neutral-600">//</span>
          <span className="text-neon font-semibold flex items-center gap-1">
            <Users className="w-3 h-3 text-neon" />
            <span>MEMBERS: 107/110 [3 SPOTS LEFT]</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-neutral-400">LEADER: LAKSHAY KALRA</span>
          <span className="text-neutral-600">//</span>
          <a 
            href="https://www.instagram.com/code2chill" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neon transition-colors flex items-center gap-1 text-neutral-300"
          >
            <Instagram className="w-3 h-3 text-neon" />
            <span>@code2chill</span>
          </a>
          <span className="text-neutral-600">//</span>
          <a 
            href="https://www.linkedin.com/company/code2chill/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neon transition-colors flex items-center gap-1 text-neutral-300"
          >
            <Linkedin className="w-3 h-3 text-neon" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Magnetic strength={0.2}>
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Logo image strictly restricted to h-10 / 40px */}
            <div className="relative">
              <img 
                src="/c2c-logo.png" 
                alt="Code2Chill Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-neon transition-colors duration-200">
                CODE<span className="text-neon">2</span>CHILL
              </span>
              <span className="text-[9px] font-mono text-neutral-500 -mt-1 tracking-widest uppercase">
                CHITKARA TECHNICAL GUILD
              </span>
            </div>
          </Link>
        </Magnetic>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Magnetic key={item.path} strength={0.25}>
                <NavLink
                  to={item.path}
                  className={`relative px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-neon bg-neon-dim border border-neon/40 shadow-neon-sm' 
                      : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 font-mono">[{item.code}]</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeTabIndicator" 
                      className="absolute -bottom-1 left-2 right-2 h-[2px] bg-neon" 
                    />
                  )}
                </NavLink>
              </Magnetic>
            );
          })}
        </nav>

        {/* Right side CTA: Join form + Live Quota Badge */}
        <div className="hidden md:flex items-center gap-3">
          <div className="text-[10px] font-mono px-2.5 py-1 bg-surface-card border border-brutal-border text-neutral-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
            <span>107/110 <span className="text-neon font-bold">[3 LEFT]</span></span>
          </div>

          <Magnetic strength={0.3}>
            <Link
              to="/join"
              className="relative group overflow-hidden border border-neon px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-neon hover:text-black hover:bg-neon transition-all duration-200 shadow-neon-sm flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>APPLY_NODE</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/join"
            className="border border-neon text-neon px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider"
          >
            JOIN (3 LEFT)
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-brutal-border text-white hover:border-neon hover:text-neon transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-brutal-border bg-black/95 px-6 py-6 font-mono text-sm"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[10px] text-neutral-400 pb-2 border-b border-brutal-border uppercase flex justify-between">
                <span>// SYSTEM_DIRECTORIES</span>
                <span className="text-neon">107/110 MEMBERS</span>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-3 border ${
                    location.pathname === item.path
                      ? 'border-neon text-neon bg-neon-dim'
                      : 'border-brutal-border text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400">[{item.code}]</span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ))}

              <div className="pt-2 flex items-center justify-between border-t border-brutal-border text-xs">
                <a 
                  href="https://www.instagram.com/code2chill" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-neon"
                >
                  <Instagram className="w-4 h-4 text-neon" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/code2chill/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-neon"
                >
                  <Linkedin className="w-4 h-4 text-neon" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="pt-3">
                <Link
                  to="/join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center border-2 border-neon bg-neon text-black font-bold py-3 uppercase tracking-widest text-xs"
                >
                  &gt; INITIALIZE_MEMBERSHIP [3 SPOTS LEFT]
                </Link>
              </div>

              <div className="pt-2 text-[10px] text-neutral-400 text-center font-mono">
                CODE2CHILL // LEADER: LAKSHAY KALRA // CHITKARA
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
