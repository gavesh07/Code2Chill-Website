import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Copy, Check, GitCommit, Users, Star, Cpu } from 'lucide-react';
import Magnetic from './Magnetic';

export default function ProjectCard({ project, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-surface-card border border-brutal-border hover:border-neon/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Corner brutalist crosshairs */}
      <span className="absolute top-1 left-1 font-mono text-[9px] text-neutral-400 select-none group-hover:text-neon transition-colors">+</span>
      <span className="absolute top-1 right-1 font-mono text-[9px] text-neutral-400 select-none group-hover:text-neon transition-colors">+</span>
      <span className="absolute bottom-1 left-1 font-mono text-[9px] text-neutral-400 select-none group-hover:text-neon transition-colors">+</span>
      <span className="absolute bottom-1 right-1 font-mono text-[9px] text-neutral-400 select-none group-hover:text-neon transition-colors">+</span>

      {/* Top bar header */}
      <div>
        <div className="flex items-center justify-between px-5 py-3 border-b border-brutal-border bg-black/60 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">SYS_ID:</span>
            <span className="text-white font-semibold">0{index + 1} // {project.category.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
            <span className="text-neon tracking-wider font-semibold text-[10px]">{project.statusBadge}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Project Title */}
          <div className="mb-2">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon transition-colors duration-200 tracking-tight flex items-center gap-2">
              <span>{project.name}</span>
            </h3>
            <p className="text-sm font-medium text-neon/90 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-5 mt-3">
            {project.description}
          </p>

          {/* Terminal Command bar */}
          {project.command && (
            <div className="mb-5 bg-black border border-brutal-border p-2.5 rounded-none flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-neutral-300">
                <span className="text-neon font-bold select-none">$</span>
                <code className="text-neutral-200 font-mono whitespace-nowrap">{project.command}</code>
              </div>
              <button
                onClick={() => handleCopy(project.command)}
                className="ml-2 p-1 text-neutral-400 hover:text-neon transition-colors shrink-0"
                title="Copy command"
                aria-label="Copy shell command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-neon" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 bg-neutral-900 border border-brutal-border text-neutral-300 group-hover:border-neutral-700 transition-colors"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="border-t border-brutal-border bg-black/40 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        {/* Telemetry stats */}
        <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-neutral-400 group-hover:text-neon transition-colors" />
            <span>{project.stats.stars}</span>
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3 text-neutral-400" />
            <span>{project.stats.contributors} devs</span>
          </span>
          <span className="hidden xs:inline-block text-[10px] text-neon bg-neon/10 px-1.5 py-0.2 border border-neon/30">
            {project.stats.buildStatus}
          </span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Magnetic strength={0.2}>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-brutal-border hover:border-white text-neutral-300 hover:text-white transition-all text-[11px] uppercase"
            >
              <Github className="w-3 h-3" />
              <span>SOURCE</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black hover:bg-neon hover:text-black font-semibold transition-all text-[11px] uppercase"
            >
              <span>INSPECT</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
}
