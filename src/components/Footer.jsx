import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, ArrowUpRight, Terminal, Users, Calendar, Award } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  return (
    <footer className="border-t border-brutal-border bg-black text-neutral-400 font-mono text-xs">
      {/* Telemetry Stats Strip */}
      <div className="border-b border-brutal-border bg-neutral-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="border-r border-brutal-border pr-4">
            <div className="text-xl font-display font-bold text-white">107 / 110</div>
            <div className="text-[10px] text-neon uppercase mt-0.5">// ACTIVE MEMBERS [3 LEFT]</div>
          </div>
          <div className="border-r border-brutal-border pr-4">
            <div className="text-xl font-display font-bold text-white">09 + 01</div>
            <div className="text-[10px] text-neutral-400 uppercase mt-0.5">// CORE TEAM & LEAD</div>
          </div>
          <div className="border-r border-brutal-border pr-4">
            <div className="text-xl font-display font-bold text-white">02 ARCHIVED</div>
            <div className="text-[10px] text-neutral-400 uppercase mt-0.5">// WORKSHOPS & HACKS</div>
          </div>
          <div>
            <div className="text-xl font-display font-bold text-neon">LAKSHAY KALRA</div>
            <div className="text-[10px] text-neutral-400 uppercase mt-0.5">// CLUB LEADER</div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info & Official Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/c2c-logo.png" 
                alt="Code2Chill Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="font-display font-bold text-xl text-white tracking-wider">
                CODE<span className="text-neon">2</span>CHILL
              </span>
            </div>
            
            <p className="text-neutral-400 font-sans text-xs leading-relaxed max-w-sm">
              Student-led technical club at Chitkara University dedicated to fostering innovation, technical excellence, and practical learning across software engineering, AI/ML, cloud computing, cybersecurity, and IoT.
            </p>

            <div className="text-[11px] text-neutral-500 space-y-1">
              <div>CAMPUS_NODE: CHITKARA UNIVERSITY, PUNJAB, INDIA</div>
              <div>COORDINATES: 30.5164° N, 76.6592° E</div>
              <div className="text-neon">LEADER_CALLSIGN: Lakshay Kalra // Club Leader</div>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-xs pb-1 border-b border-brutal-border">
              // DIRECTORY
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Magnetic strength={0.2}>
                  <Link to="/" className="hover:text-neon transition-colors flex items-center gap-1">
                    <span>[00]</span> <span>ROOT_INDEX</span>
                  </Link>
                </Magnetic>
              </li>
              <li>
                <Magnetic strength={0.2}>
                  <Link to="/projects" className="hover:text-neon transition-colors flex items-center gap-1">
                    <span>[01]</span> <span>PROJECTS_JSON</span>
                  </Link>
                </Magnetic>
              </li>
              <li>
                <Magnetic strength={0.2}>
                  <Link to="/events" className="hover:text-neon transition-colors flex items-center gap-1">
                    <span>[02]</span> <span>EVENTS & WORKSHOPS (02)</span>
                  </Link>
                </Magnetic>
              </li>
              <li>
                <Magnetic strength={0.2}>
                  <Link to="/team" className="hover:text-neon transition-colors flex items-center gap-1">
                    <span>[03]</span> <span>CORE_CREW (9+1)</span>
                  </Link>
                </Magnetic>
              </li>
              <li>
                <Magnetic strength={0.2}>
                  <Link to="/join" className="text-neon hover:underline transition-colors flex items-center gap-1">
                    <span>[04]</span> <span>&gt; APPLY [3 SEATS LEFT]</span>
                  </Link>
                </Magnetic>
              </li>
            </ul>
          </div>

          {/* Official Social Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold tracking-wider uppercase text-xs pb-1 border-b border-brutal-border">
              // OFFICIAL_CHANNELS
            </div>
            <p className="text-neutral-400 text-xs font-sans">
              Follow official announcements, workshop recaps, hackathon photos, and campus project releases.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Magnetic strength={0.25}>
                <a
                  href="https://www.instagram.com/code2chill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-brutal-border hover:border-neon text-white hover:text-neon transition-colors flex items-center gap-1.5 text-xs bg-surface-card"
                >
                  <Instagram className="w-3.5 h-3.5 text-neon" />
                  <span>@CODE2CHILL</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="https://www.linkedin.com/company/code2chill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-brutal-border hover:border-neon text-white hover:text-neon transition-colors flex items-center gap-1.5 text-xs bg-surface-card"
                >
                  <Linkedin className="w-3.5 h-3.5 text-neon" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-brutal-border hover:border-neon text-white hover:text-neon transition-colors flex items-center gap-1.5 text-xs bg-surface-card"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brutal-border py-4 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500">
          <div>
            &copy; 2026 CODE2CHILL [C2C] // CHITKARA UNIVERSITY. 107 MEMBERS STRONG.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>REACT 18</span>
            <span>•</span>
            <span>VITE</span>
            <span>•</span>
            <span>TAILWIND CSS</span>
            <span>•</span>
            <span className="text-neon">FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
