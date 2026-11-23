import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu, ArrowRight, CornerDownLeft, Circle, Sparkles, RefreshCw, Instagram, Linkedin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

export default function TerminalComputeHero() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { type: 'sys', text: 'INIT_BOOT_SEQUENCE: v2.4.1 // CHITKARA_NODE_C2C' },
    { type: 'info', text: 'CLUB_LEADER: Lakshay Kalra // CORE_MEMBERS: 09 ACTIVE' },
    { type: 'success', text: 'STATUS: ACTIVE // 107/110 MEMBERS REGISTERED [3 SLOTS REMAINING]' },
    { type: 'neon', text: 'DOMAINS: Software Dev, AI/ML, Cloud Computing, Cybersecurity, IoT, DSA' },
  ]);
  const terminalEndRef = useRef(null);

  const handleCommand = (cmdText) => {
    const raw = (cmdText || inputVal).trim();
    if (!raw) return;

    const newLogs = [...logs, { type: 'cmd', text: `$ ${raw}` }];
    const cmd = raw.toLowerCase();

    if (cmd === 'clear') {
      setLogs([
        { type: 'sys', text: 'C2C_TERMINAL: SCREEN FLUSHED' },
        { type: 'neon', text: 'Type "help", "stats", "team", "projects", or "socials"' }
      ]);
      setInputVal('');
      return;
    } else if (cmd === 'help') {
      newLogs.push({
        type: 'response',
        text: 'AVAILABLE_COMMANDS: [stats] [leader] [team] [projects] [events] [socials] [join] [clear]'
      });
    } else if (cmd === 'stats') {
      newLogs.push({
        type: 'neon',
        text: 'TELEMETRY: 107/110 Members (3 Left) // 9 Core Members // 2 Past Events // 0 Upcoming'
      });
    } else if (cmd === 'leader') {
      newLogs.push({
        type: 'success',
        text: 'CLUB_LEADER: Lakshay Kalra // Founding Lead at Chitkara University'
      });
    } else if (cmd === 'team') {
      newLogs.push({
        type: 'info',
        text: 'CORE_HEADS: Samanyu Thakur (Tech), Bhupinder Singh (Tech), Tamanna Kakkar (Content), Ayush Sharma (Content), Jashan Bhalla (Social), Muskan Dhanda (Promo)'
      });
    } else if (cmd === 'socials') {
      newLogs.push({
        type: 'neon',
        text: 'IG: instagram.com/code2chill // LI: linkedin.com/company/code2chill/'
      });
    } else if (cmd === 'projects') {
      newLogs.push({
        type: 'success',
        text: 'MONOREPOS: ByteGuard AST, NeuralByte DSA Battleground, Chitkara P2P CampusMesh, PromptForge Edge'
      });
    } else if (cmd === 'events') {
      newLogs.push({
        type: 'info',
        text: 'EVENT_METRICS: 2 Total Events Archived (CodeSprint #01 & Emerging Tech Workshop). Next sprint queuing.'
      });
    } else if (cmd === 'join') {
      newLogs.push({
        type: 'neon',
        text: 'URGENT: Only 3 membership slots remaining (107/110). Transmit node buffer at /join.'
      });
    } else {
      newLogs.push({
        type: 'error',
        text: `zsh: command not found: ${raw}. Try 'help' or 'stats'`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    }
  };

  return (
    <section className="relative pt-6 pb-20 md:py-20 border-b border-brutal-border overflow-hidden bg-black bg-brutal-grid">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neon/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brutalist Module Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 border border-brutal-border bg-black/80 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-neon">
              <span className="w-2 h-2 rounded-none bg-neon animate-pulse-fast"></span>
              <span className="font-semibold tracking-wider">STATUS: ACTIVE // 107 MEMBERS ONLINE</span>
            </span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neutral-300 hidden sm:inline">LEAD: LAKSHAY KALRA</span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neon hidden md:inline">QUOTA: 3 LEFT [107/110]</span>
          </div>
          
          <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
            <a 
              href="https://www.instagram.com/code2chill" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-neon transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3 h-3 text-neon" />
              <span>@code2chill</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a 
              href="https://www.linkedin.com/company/code2chill/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-neon transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3 text-neon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Bold Brutalist Typography & Official Mission */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Monospace decorative badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-card border border-brutal-border text-neutral-300 font-mono text-[11px] mb-6">
                <span className="text-neon">&gt;&gt;</span>
                <span className="uppercase tracking-widest">STUDENT-LED TECHNICAL COMMUNITY // CHITKARA</span>
              </div>

              {/* High-impact Space Grotesk Heading */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.02] mb-6">
                BRIDGE THEORY. <br />
                <span className="text-white">SHIP REAL </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-white to-neon">TECH.</span>
              </h1>

              {/* Developer-first copy blending official C2C mission with casual tone */}
              <p className="text-neutral-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mb-8">
                <strong className="text-white font-semibold">Code2Chill (C2C)</strong> is a student-led technical club at Chitkara University dedicated to bridging the gap between classroom theory and industry reality. We host intense hackathons, deep-dive workshops, and collaborative project jams across <strong className="text-white">Software Development, AI/ML, Cloud Computing, Cybersecurity, IoT, and DSA Battles</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Magnetic strength={0.3}>
                  <Link
                    to="/join"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-neon text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-all shadow-neon-md"
                  >
                    <span>&gt; APPLY_NODE [3 SPOTS LEFT]</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-brutal-border hover:border-white text-white font-mono text-xs uppercase font-medium tracking-wider bg-black hover:bg-neutral-900 transition-all"
                  >
                    <span>CORE_CREW (9+1)</span>
                  </Link>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-4 py-3.5 text-neutral-400 hover:text-neon font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>// PROJECTS_JSON</span>
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Live Metrics Bar from Real Club Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brutal-border font-mono text-xs">
              <div>
                <div className="text-2xl font-display font-bold text-neon">107/110</div>
                <div className="text-[10px] text-neutral-400 uppercase mt-0.5">MEMBERS (3 LEFT)</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">09 + 01</div>
                <div className="text-[10px] text-neutral-400 uppercase mt-0.5">CORE TEAM & LEAD</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">02</div>
                <div className="text-[10px] text-neutral-400 uppercase mt-0.5">EVENTS ARCHIVED</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-neutral-300">06+</div>
                <div className="text-[10px] text-neutral-400 uppercase mt-0.5">DOMAINS COVERED</div>
              </div>
            </div>
          </div>

          {/* Right Column: Compute Module / Interactive Terminal */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-black border border-brutal-border flex flex-col justify-between shadow-2xl relative">
              
              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-brutal-border bg-neutral-950 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neon/80 inline-block"></span>
                  <span className="ml-2 text-neutral-300 font-semibold tracking-wide">c2c-shell // bash</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[10px]">CHITKARA_TTY</span>
                </div>
              </div>

              {/* Terminal Body Logs */}
              <div className="p-4 font-mono text-xs space-y-2.5 overflow-y-auto max-h-[360px] scrollbar-none flex-1 bg-black/95">
                {logs.map((log, i) => {
                  if (log.type === 'cmd') {
                    return (
                      <div key={i} className="text-white font-semibold flex items-start gap-1">
                        <span className="text-neon">{log.text}</span>
                      </div>
                    );
                  }
                  if (log.type === 'sys') {
                    return (
                      <div key={i} className="text-neutral-500 text-[11px] uppercase tracking-wide">
                        [SYS] {log.text}
                      </div>
                    );
                  }
                  if (log.type === 'neon') {
                    return (
                      <div key={i} className="text-neon font-medium">
                        &gt; {log.text}
                      </div>
                    );
                  }
                  if (log.type === 'success') {
                    return (
                      <div key={i} className="text-emerald-400">
                        [OK] {log.text}
                      </div>
                    );
                  }
                  if (log.type === 'info') {
                    return (
                      <div key={i} className="text-sky-300">
                        [NODE] {log.text}
                      </div>
                    );
                  }
                  if (log.type === 'error') {
                    return (
                      <div key={i} className="text-red-400">
                        [FAIL] {log.text}
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="text-neutral-300">
                      {log.text}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Interactive Terminal Prompt Input */}
              <div className="p-3 border-t border-brutal-border bg-neutral-950 font-mono text-xs">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-neon font-bold">c2c@chitkara:~$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type 'stats', 'leader', 'team', or 'socials'..."
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-600 font-mono text-xs focus:ring-0"
                    aria-label="Terminal command input"
                  />
                  <button
                    onClick={() => handleCommand()}
                    className="text-neutral-400 hover:text-neon p-1 transition-colors"
                    title="Send command"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Quick Chip Triggers */}
                <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-brutal-border/50 text-[10px] text-neutral-500 overflow-x-auto scrollbar-none">
                  <span className="shrink-0">RUN:</span>
                  {['stats', 'leader', 'team', 'socials', 'projects', 'events', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleCommand(cmd)}
                      className="px-1.5 py-0.5 bg-neutral-900 hover:bg-neon hover:text-black text-neutral-400 border border-brutal-border transition-colors uppercase font-mono"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
