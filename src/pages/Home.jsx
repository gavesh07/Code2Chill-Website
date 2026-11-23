import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, GitPullRequest, Terminal, Swords, Shield, ExternalLink, Zap, Cloud, Smartphone, Lock, Wifi, Users, Calendar } from 'lucide-react';
import TerminalComputeHero from '../components/TerminalComputeHero';
import ProjectCard from '../components/ProjectCard';
import Magnetic from '../components/Magnetic';
import PageTransition from '../components/PageTransition';
import projectsData from '../data/projects.json';
import eventsData from '../data/events.json';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 4);

  const domains = [
    {
      code: '01',
      title: 'Software & Web/App Dev',
      tagline: 'Full-stack monorepos and mobile platforms.',
      desc: 'Building production-grade client & server architectures. Bridging textbook syntax with actual CI/CD deployments and clean code patterns.',
      icon: Code2,
      tech: 'React // Go // Node // Swift',
    },
    {
      code: '02',
      title: 'Artificial Intelligence & ML',
      tagline: 'Practical models, quantization, local edge inference.',
      desc: 'Going beyond basic Python notebooks. Fine-tuning models, evaluating synthetic data, and deploying efficient inference engines on consumer silicon.',
      icon: Zap,
      tech: 'PyTorch // llama.cpp // CUDA',
    },
    {
      code: '03',
      title: 'Cloud & DevOps Engineering',
      tagline: 'Containerized infra, microservices, reliability.',
      desc: 'Demystifying cloud architecture, Docker isolation boundaries, serverless runtimes, and distributed clusters for large-scale student builds.',
      icon: Cloud,
      tech: 'Docker // Kubernetes // AWS // Linux',
    },
    {
      code: '04',
      title: 'Cybersecurity & Low-Level Systems',
      tagline: 'Protocol security, binary analysis, defensive tooling.',
      desc: 'Exploring vulnerability discovery, AST code sanitization, memory safety invariants, and cryptographic peer-to-peer handshakes.',
      icon: Lock,
      tech: 'Rust // Wireshark // AST // gVisor',
    },
    {
      code: '05',
      title: 'IoT & Emerging Tech',
      tagline: 'Hardware integration and physical-world computing.',
      desc: 'Interfacing microcontrollers with real-time telemetry streams, sensory mesh networks, and edge protocol bridges.',
      icon: Wifi,
      tech: 'ESP32 // MQTT // Embedded C',
    },
    {
      code: '06',
      title: 'DSA Battles & Competitions',
      tagline: 'Algorithmic clashing under real clock constraints.',
      desc: 'Bi-weekly head-to-head 1v1 algorithmic speedruns with AST anti-cheat checks and live execution benchmarking.',
      icon: Swords,
      tech: 'C++ // Graph Theory // DP',
    },
  ];

  return (
    <PageTransition>
      {/* Brutalist Compute Terminal Hero */}
      <TerminalComputeHero />

      {/* CORE OBJECTIVE / BRIDGING THE GAP */}
      <section className="py-16 border-b border-brutal-border bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-neon font-mono text-xs uppercase tracking-widest">
                // MISSION_STATEMENT // CHITKARA UNIVERSITY
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                BRIDGING ACADEMIC THEORY WITH INDUSTRY REALITY.
              </h2>
              <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                The primary objective of <strong className="text-white">Code2Chill</strong> is to eliminate the gap between university syllabus and real-world software engineering. Through hands-on workshops, coding competitions, hackathons, and multi-domain project building, we empower students with the technical confidence to build, collaborate, and lead.
              </p>
            </div>

            <div className="lg:col-span-4 bg-black border border-brutal-border p-6 font-mono text-xs space-y-3">
              <div className="text-white font-bold pb-2 border-b border-brutal-border flex items-center justify-between">
                <span>CLUB_TELEMETRY</span>
                <span className="text-neon text-[10px] animate-pulse">● LIVE</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>REGISTERED_MEMBERS:</span>
                <span className="text-white font-bold">107 / 110</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>AVAILABLE_SLOTS:</span>
                <span className="text-neon font-bold">03 LEFT</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>CLUB_LEADER:</span>
                <span className="text-white">Lakshay Kalra</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>CORE_HEADS:</span>
                <span className="text-white">09 Leads</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>EVENTS_LOGGED:</span>
                <span className="text-white">02 Total (Archived)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH DOMAINS (From official C2C documentation) */}
      <section className="py-20 border-b border-brutal-border bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brutal-border">
            <div>
              <div className="text-neon font-mono text-xs uppercase tracking-widest mb-2">
                // SYSTEM_MODULES // DOMAINS OF EXPLORATION
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                DOMAINS WE EXPLORE & SHIP.
              </h2>
            </div>
            <p className="text-neutral-400 font-mono text-xs max-w-md mt-4 md:mt-0">
              From web platforms and AI models to cloud containers and cybersecurity, C2C members build across modern software layers.
            </p>
          </div>

          {/* 6 Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="group p-6 bg-surface-card border border-brutal-border hover:border-neon transition-colors duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6">
                      <span>[{domain.code}]</span>
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-neon transition-colors" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-neon transition-colors mb-1.5">
                      {domain.title}
                    </h3>

                    <div className="text-xs font-mono text-neon/90 mb-3">
                      &gt; {domain.tagline}
                    </div>

                    <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brutal-border font-mono text-[11px] text-neutral-400">
                    STACK: <span className="text-white">{domain.tech}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DYNAMIC PROJECTS SHOWCASE (Requirement 1: Dynamically mapped from projects.json) */}
      <section className="py-20 border-b border-brutal-border bg-black bg-brutal-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brutal-border">
            <div>
              <div className="text-neon font-mono text-xs uppercase tracking-widest mb-2">
                // DATA_SOURCE: src/data/projects.json
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                ACTIVE LAB REPOSITORIES.
              </h2>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Magnetic strength={0.2}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-brutal-border hover:border-neon text-white hover:text-neon font-mono text-xs uppercase transition-colors"
                >
                  <span>VIEW_ALL_PROJECTS ({projectsData.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Dynamically mapped project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* EVENTS & WORKSHOPS RECAP */}
      <section className="py-20 border-b border-brutal-border bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brutal-border">
            <div>
              <div className="text-neon font-mono text-xs uppercase tracking-widest mb-2">
                // EVENTS_LOG // 2 TOTAL COMPLETED
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                HACKATHONS & WORKSHOPS.
              </h2>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Magnetic strength={0.2}>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-brutal-border hover:border-white text-white font-mono text-xs uppercase transition-colors"
                >
                  <span>VIEW_ALL_EVENTS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="group p-6 bg-surface-card border border-brutal-border hover:border-neon transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-neon font-bold">[{event.type}]</span>
                    <span className="text-neutral-400">{event.date}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brutal-border flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    {event.spots}
                  </span>
                  
                  <Magnetic strength={0.2}>
                    <a
                      href={event.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-neutral-900 border border-brutal-border hover:border-neon text-white hover:text-neon font-mono text-xs uppercase transition-colors"
                    >
                      {event.actionText}
                    </a>
                  </Magnetic>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEMBERSHIP CALLOUT WITH 3 SPOTS LEFT */}
      <section className="py-24 border-b border-brutal-border bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-neon font-mono text-xs uppercase tracking-widest px-3 py-1 border border-neon/30 bg-neon-dim mb-6">
            // TELEMETRY_ALERT: 107/110 REGISTERED
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight mb-6">
            ONLY 3 SLOTS REMAINING FOR THE CURRENT SEMESTER.
          </h2>

          <p className="text-neutral-400 font-mono text-sm max-w-2xl mx-auto leading-relaxed mb-10">
            Join 107 passionate student builders at Chitkara University. Level up your portfolio with real-world open-source contributions, competitive DSA battles, and emerging technology workshops.
          </p>

          <Magnetic strength={0.3}>
            <Link
              to="/join"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neon text-black font-mono text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-neon-md"
            >
              <span>CLAIM_ONE_OF_3_SLOTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </PageTransition>
  );
}
