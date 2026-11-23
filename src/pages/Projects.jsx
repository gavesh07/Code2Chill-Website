import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Terminal, Filter, GitBranch, ArrowUpRight, Check, Copy } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import Magnetic from '../components/Magnetic';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showRawJson, setShowRawJson] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(projectsData.map(p => p.category));
    return ['ALL', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
      const query = searchTerm.toLowerCase();
      const matchesSearch = 
        project.name.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some(t => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(projectsData, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pb-24 bg-brutal-grid">
        
        {/* Header Telemetry */}
        <div className="border-b border-brutal-border bg-neutral-950/80 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-neon mb-3">
                  <span className="w-2 h-2 bg-neon animate-pulse-fast"></span>
                  <span>// REPOSITORY_INDEX // C2C_LABS</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
                  PROJECTS & REPOSITORIES.
                </h1>
                <p className="text-neutral-400 font-mono text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed">
                  Mapped directly from <code className="text-neon bg-black px-1.5 py-0.5 border border-brutal-border">src/data/projects.json</code>. 
                  Every project here is student-architected, actively maintained, and open to RFC pull requests.
                </p>
              </div>

              {/* View Raw JSON switch */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowRawJson(!showRawJson)}
                  className={`px-3.5 py-2 font-mono text-xs border transition-colors flex items-center gap-2 ${
                    showRawJson 
                      ? 'border-neon bg-neon text-black font-bold' 
                      : 'border-brutal-border text-neutral-300 hover:border-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>{showRawJson ? 'CLOSE_RAW_JSON' : 'INSPECT_RAW_JSON'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Raw JSON viewer modal/drawer */}
        {showRawJson && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="bg-neutral-950 border border-neon/50 p-4 font-mono text-xs text-neutral-300 shadow-neon-sm relative">
              <div className="flex items-center justify-between pb-3 border-b border-brutal-border mb-3">
                <span className="text-neon font-bold">// FILE: src/data/projects.json [{projectsData.length} objects loaded]</span>
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                >
                  {copiedJson ? <Check className="w-3.5 h-3.5 text-neon" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedJson ? 'COPIED' : 'COPY_RAW'}</span>
                </button>
              </div>
              <pre className="overflow-x-auto max-h-96 text-[11px] text-emerald-400/90 font-mono scrollbar-none">
                {JSON.stringify(projectsData, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 border border-brutal-border bg-black">
            
            {/* Terminal Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="grep by title, tech stack (e.g. rust, docker)..."
                className="w-full bg-neutral-950 border border-brutal-border pl-9 pr-4 py-2 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white font-mono text-xs"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-mono text-xs uppercase whitespace-nowrap transition-colors border ${
                    selectedCategory === cat
                      ? 'border-neon bg-neon-dim text-neon font-bold'
                      : 'border-brutal-border text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count telemetry */}
          <div className="flex items-center justify-between py-4 text-xs font-mono text-neutral-400">
            <span>SHOWING: {filteredProjects.length} OF {projectsData.length} MONOREPOS</span>
            <span>AUTOLOAD: ENABLED</span>
          </div>

          {/* Dynamic Grid of Project Cards */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-brutal-border bg-neutral-950 font-mono">
              <div className="text-neon text-2xl font-bold mb-2">404 // NO_MATCHES_FOUND</div>
              <p className="text-neutral-400 text-xs">No repositories matched your search query "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('ALL'); }}
                className="mt-4 px-4 py-2 border border-neon text-neon text-xs uppercase hover:bg-neon hover:text-black transition-colors"
              >
                RESET_FILTERS
              </button>
            </div>
          )}

          {/* Bottom Contribution Box */}
          <div className="mt-16 p-8 border border-brutal-border bg-black relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-neon font-mono text-xs mb-1">// WANT TO SHIP A NEW MONOREPO?</div>
                <h3 className="text-2xl font-display font-bold text-white">SUBMIT AN RFC TO CODE2CHILL</h3>
                <p className="text-neutral-400 text-sm max-w-xl mt-1 font-sans">
                  Have an idea for a compiler, a devtool, or an AI research harness? Fork our projects index, write a proposal, and we will fund compute and pair-program with you.
                </p>
              </div>
              <Magnetic strength={0.25}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neon text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 shrink-0"
                >
                  <span>FORK_ON_GITHUB</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
