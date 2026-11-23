import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Swords, Terminal, ArrowRight, ShieldAlert, Cpu, Trophy, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Magnetic from '../components/Magnetic';
import eventsData from '../data/events.json';

export default function Events() {
  const [filter, setFilter] = useState('ALL');

  const filteredEvents = eventsData.filter(event => {
    if (filter === 'UPCOMING') return event.status === 'UPCOMING';
    if (filter === 'ARCHIVED') return event.status === 'ARCHIVED';
    return true;
  });

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pb-24 bg-brutal-grid">
        
        {/* Page Header */}
        <div className="border-b border-brutal-border bg-neutral-950/80 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neon mb-3">
              <span className="w-2 h-2 bg-neon animate-pulse-fast"></span>
              <span>// OPERATIONS_LOG // COMBAT_SCHEDULE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              DSA BATTLES & HACKS.
            </h1>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed">
              Bi-weekly algorithmic cage matches, 48-hour protocol sprints, and weekend deep-dives on Chitkara campus. 
              Zero attendance sheets — just solve hard problems.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between border-b border-brutal-border pb-4 mb-8 font-mono text-xs">
            <div className="flex items-center gap-2">
              {['ALL', 'UPCOMING', 'ARCHIVED'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 uppercase transition-colors border ${
                    filter === tab
                      ? 'border-neon bg-neon-dim text-neon font-bold'
                      : 'border-brutal-border text-neutral-400 hover:text-white'
                  }`}
                >
                  [{tab}]
                </button>
              ))}
            </div>

            <div className="hidden sm:block text-neutral-400">
              LOCATION: CHITKARA LABS & DISCORD VOICE
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {filteredEvents.map((event, idx) => {
              const isUpcoming = event.status === 'UPCOMING';

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={`border bg-surface-card p-6 md:p-8 relative ${
                    isUpcoming ? 'border-brutal-border hover:border-neon' : 'border-neutral-900 opacity-80'
                  } transition-all duration-300`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brutal-border text-xs font-mono mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 font-bold uppercase tracking-wider ${
                        isUpcoming ? 'bg-neon text-black' : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        {event.status}
                      </span>
                      <span className="text-neon font-mono">[{event.type}]</span>
                    </div>

                    <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-white">{event.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{event.venue}</span>
                      </span>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm font-mono text-neon">
                          &gt; {event.tagline}
                        </p>
                      </div>

                      <p className="text-neutral-300 text-sm font-sans leading-relaxed">
                        {event.description}
                      </p>

                      {/* Rules & Constraints List */}
                      {event.rules && (
                        <div className="p-4 bg-black border border-brutal-border font-mono text-xs space-y-2 mt-4">
                          <div className="text-neutral-400 font-semibold uppercase text-[10px]">
                            // BATTLE_RULES & VERIFICATION PROTOCOL:
                          </div>
                          {event.rules.map((rule, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 text-neutral-300">
                              <span className="text-neon font-bold select-none">&bull;</span>
                              <span>{rule}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right column: Action & Telemetry */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-brutal-border lg:pl-8">
                      <div className="space-y-3 font-mono text-xs">
                        <div className="text-neutral-400 text-[10px] uppercase">// PARTICIPATION_QUOTA</div>
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-neon" />
                          <span>{event.spots}</span>
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          Rankings update live on the Chitkara C2C Leaderboard.
                        </div>
                      </div>

                      <div>
                        {isUpcoming ? (
                          <Magnetic strength={0.25} className="w-full">
                            <Link
                              to="/join"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neon text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-neon-sm"
                            >
                              <span>{event.actionText}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Magnetic>
                        ) : (
                          <Magnetic strength={0.25} className="w-full">
                            <a
                              href={event.actionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-brutal-border text-neutral-300 hover:text-white hover:border-white font-mono text-xs uppercase tracking-wider transition-all"
                            >
                              <span>{event.actionText}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </Magnetic>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* DSA Battle Protocol Spec Box */}
          <div className="mt-16 p-8 border border-brutal-border bg-black font-mono text-xs">
            <div className="flex items-center gap-2 text-neon text-sm font-bold uppercase mb-3">
              <ShieldAlert className="w-4 h-4" />
              <span>THE C2C ANTI-CHEAT & EVAL SPECIFICATION</span>
            </div>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed max-w-3xl mb-4">
              All C2C DSA battles use AST diffing against pre-compiled OpenAI & Claude solution embeddings to prevent prompt injection or LLM copy-paste. Solutions are executed inside ephemeral gVisor micro-containers with rigid 128MB memory caps. May the best algorithm win.
            </p>
            <div className="text-[11px] text-neutral-400">
              SPEC_REV: 2.1.0 // ENGINE: NeuralByte AST Watcher
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
