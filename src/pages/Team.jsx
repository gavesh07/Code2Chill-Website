import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Terminal, GitCommit, ArrowUpRight, Shield, Award, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Magnetic from '../components/Magnetic';
import teamData from '../data/team.json';

export default function Team() {
  const [activeDivision, setActiveDivision] = useState('ALL');

  const leader = teamData.find(m => m.id === 'lakshay-kalra');
  const coreMembers = teamData.filter(m => m.id !== 'lakshay-kalra');

  const divisions = ['ALL', 'Technical Department', 'Content & Knowledge', 'Growth & Community', 'Operations & Projects'];

  const filteredMembers = activeDivision === 'ALL'
    ? coreMembers
    : coreMembers.filter(m => m.division === activeDivision);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pb-24 bg-brutal-grid">
        
        {/* Header */}
        <div className="border-b border-brutal-border bg-neutral-950/80 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neon mb-3">
              <span className="w-2 h-2 bg-neon animate-pulse-fast"></span>
              <span>// ROSTER // CLUB LEADER & CORE MEMBERS (9+1)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              LEADERSHIP & CORE CREW.
            </h1>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed">
              Student-led technical governance at Chitkara University. Meet the leadership team driving innovation, practical learning, workshops, and technical events for our 107 members.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* FEATURED: CLUB LEADER SPOTLIGHT */}
          {leader && (
            <div>
              <div className="text-xs font-mono text-neon uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-neon" />
                <span>// EXECUTIVE_COMMAND // CLUB LEADER</span>
              </div>

              <div className="bg-surface-card border-2 border-neon p-6 sm:p-10 relative shadow-neon-sm">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                      <span className="px-2.5 py-1 bg-neon text-black font-bold uppercase tracking-wider">
                        {leader.terminalBadge}
                      </span>
                      <span className="text-neutral-400">{leader.callsign}</span>
                      <span className="text-neutral-600">//</span>
                      <span className="text-neon">{leader.division}</span>
                    </div>

                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                        {leader.name}
                      </h2>
                      <div className="text-sm font-mono text-neutral-300 mt-1 uppercase tracking-wider">
                        {leader.role}
                      </div>
                    </div>

                    <div className="font-mono text-xs text-neon bg-neon-dim border border-neon/30 p-2.5">
                      <span className="text-neutral-400">CORE FOCUS:</span> {leader.focus}
                    </div>

                    <p className="text-neutral-300 text-sm font-sans leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="flex flex-col items-start lg:items-end justify-between space-y-6 shrink-0 lg:border-l lg:border-brutal-border lg:pl-10">
                    <div className="font-mono text-xs text-neutral-400 space-y-2">
                      <div className="text-white font-bold text-sm">TELEMETRY_RECORD</div>
                      <div>MEMBERS: <span className="text-neon font-bold">107/110 [3 LEFT]</span></div>
                      <div>CAMPUS: CHITKARA UNIVERSITY</div>
                      <div>REPUTATION: 100% PROOF-OF-WORK</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Magnetic strength={0.25}>
                        <a
                          href={leader.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-brutal-border hover:border-neon text-white hover:text-neon transition-colors flex items-center gap-2 text-xs font-mono"
                        >
                          <Instagram className="w-3.5 h-3.5 text-neon" />
                          <span>INSTAGRAM</span>
                        </a>
                      </Magnetic>

                      <Magnetic strength={0.25}>
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-neon text-black hover:bg-white font-bold transition-colors flex items-center gap-2 text-xs font-mono"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>LINKEDIN</span>
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CORE MEMBERS & HEADS */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-brutal-border gap-4 mb-8">
              <div>
                <div className="text-xs font-mono text-neon uppercase tracking-widest mb-1">
                  // DEPARTMENTAL_HEADS & CORE_MEMBERS
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  THE 9 CORE MEMBERS.
                </h2>
              </div>

              {/* Division filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none font-mono text-xs pb-1">
                {divisions.map((div) => (
                  <button
                    key={div}
                    onClick={() => setActiveDivision(div)}
                    className={`px-3 py-1 uppercase whitespace-nowrap transition-colors border ${
                      activeDivision === div
                        ? 'border-neon bg-neon-dim text-neon font-bold'
                        : 'border-brutal-border text-neutral-400 hover:text-white'
                    }`}
                  >
                    {div.replace(' Department', '').replace(' & Community', '').replace(' & Knowledge', '').replace(' & Projects', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of 9 Core Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group bg-surface-card border border-brutal-border hover:border-neon transition-colors duration-200 flex flex-col justify-between"
                >
                  {/* Top Bar */}
                  <div className="px-5 py-3 border-b border-brutal-border bg-black/60 flex items-center justify-between font-mono text-xs">
                    <span className="text-neon font-semibold text-[11px]">{member.terminalBadge}</span>
                    <span className="text-neutral-500 text-[10px]">{member.division}</span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-xs font-mono text-neutral-300 mt-1 uppercase tracking-wider font-semibold">
                        {member.role}
                      </div>
                    </div>

                    <div className="mb-4 font-mono text-[11px] text-neon bg-neon-dim border border-neon/30 p-2">
                      <span className="text-neutral-400">FOCUS:</span> {member.focus}
                    </div>

                    <p className="text-neutral-400 text-sm font-sans leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="pt-4 border-t border-brutal-border font-mono text-[11px] text-neutral-500 flex items-center gap-2">
                      <GitCommit className="w-3.5 h-3.5 text-neon" />
                      <span>{member.stats}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-brutal-border bg-black/40 px-6 py-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500 text-[10px]">{member.callsign}</span>
                    
                    <div className="flex items-center gap-2">
                      <Magnetic strength={0.25}>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-neon transition-colors"
                          title="Instagram"
                          aria-label="Instagram profile"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Magnetic>

                      <Magnetic strength={0.25}>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-neon transition-colors"
                          title="LinkedIn"
                          aria-label="LinkedIn profile"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Join Callout */}
          <div className="border border-brutal-border bg-black p-8 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="text-neon text-xs font-bold uppercase tracking-widest">
                  // COMMUNITY_GROWTH // 107/110 REGISTERED
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  WANT TO CONTRIBUTE AS A CORE TEAM FELLOW?
                </h3>
                <p className="text-neutral-400 font-sans text-sm leading-relaxed">
                  We look for students with high agency who want to lead workshops, moderate technical tracks, or organize hackathons. 3 membership slots are currently open for this semester.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Magnetic strength={0.3}>
                  <Link
                    to="/join"
                    className="px-6 py-3.5 bg-neon text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2"
                  >
                    <span>&gt; APPLY_FOR_MEMBERSHIP</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
