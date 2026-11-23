import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle2, Loader2, ArrowRight, RefreshCw, Shield, AlertCircle, Copy, Check, Users, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Magnetic from '../components/Magnetic';

export default function Join() {
  const [formData, setFormData] = useState({
    fullName: '',
    chitkaraId: '',
    email: '',
    github: '',
    track: 'SOFTWARE_DEV',
    proofOfWork: '',
    discordTag: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [receiptHash, setReceiptHash] = useState('');
  const [copiedHash, setCopiedHash] = useState(false);

  const tracks = [
    { id: 'SOFTWARE_DEV', label: 'Software & Web/Mobile Dev // React, Node, Go, Swift' },
    { id: 'AI_ML_RESEARCH', label: 'AI & Machine Learning // PyTorch, Quantization, Edge Models' },
    { id: 'CLOUD_DEVOPS', label: 'Cloud Computing & DevOps // Docker, Linux, K8s, CI/CD' },
    { id: 'CYBERSECURITY', label: 'Cybersecurity & Systems // AST Diffing, Protocol Hacking' },
    { id: 'IOT_EMBEDDED', label: 'IoT & Emerging Tech // ESP32, MQTT, Sensors' },
    { id: 'DSA_COMPETITIVE', label: 'Competitive Programming // 1v1 DSA Battles, Graph Theory' },
    { id: 'CONTENT_COMMUNITY', label: 'Technical Content & Growth // Editorial, Event Operations' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.github.trim()) {
      setErrorMsg('MISSING_FIELDS: Full Name, Chitkara Email, and GitHub/Portfolio Link are mandatory.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Simulate 1-second loading state as required
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const randomHash = '0x' + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setReceiptHash(randomHash);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      chitkaraId: '',
      email: '',
      github: '',
      track: 'SOFTWARE_DEV',
      proofOfWork: '',
      discordTag: '',
    });
    setSubmitted(false);
  };

  const handleCopyReceipt = () => {
    navigator.clipboard.writeText(receiptHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <PageTransition>
      <div className="bg-black min-h-screen pb-24 bg-brutal-grid">
        
        {/* Header */}
        <div className="border-b border-brutal-border bg-neutral-950/80 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-neon mb-3">
              <span className="w-2 h-2 bg-neon animate-pulse-fast"></span>
              <span>// PROTOCOL_ENROLLMENT // 107/110 REGISTERED</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              INITIALIZE MEMBERSHIP.
            </h1>
            <p className="text-neutral-400 font-mono text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
              Join <strong className="text-white">107 student builders</strong> at Chitkara University. 
              Only <span className="text-neon font-bold">3 membership slots remain</span> before registration buffers close for this cycle.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-card border border-brutal-border p-6 sm:p-10 relative"
              >
                {/* Form Top Telemetry */}
                <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-brutal-border font-mono text-xs text-neutral-400 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">C2C_ADMISSION_BUFFER</span>
                    <span className="text-neutral-600">//</span>
                    <span className="text-neon font-bold">3 SPOTS REMAINING [107/110]</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-neutral-400">LEAD: LAKSHAY KALRA</span>
                    <span className="text-neutral-600">//</span>
                    <a 
                      href="https://www.instagram.com/code2chill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-neon transition-colors"
                    >
                      @code2chill
                    </a>
                  </div>
                </div>

                {errorMsg && (
                  <div className="mb-8 p-4 bg-red-950/40 border border-red-700/60 font-mono text-xs text-red-400 flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Chitkara ID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        FULL_NAME <span className="text-neon">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full bg-black border border-brutal-border px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        CHITKARA_STUDENT_ID
                      </label>
                      <input
                        type="text"
                        name="chitkaraId"
                        value={formData.chitkaraId}
                        onChange={handleChange}
                        placeholder="e.g. 231099xxxx / 241099xxxx"
                        className="w-full bg-black border border-brutal-border px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & GitHub / Portfolio */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        CHITKARA_EMAIL <span className="text-neon">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. aryan@chitkara.edu.in"
                        className="w-full bg-black border border-brutal-border px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-white uppercase tracking-wider">
                        GITHUB_OR_PORTFOLIO_URL <span className="text-neon">*</span>
                      </label>
                      <input
                        type="text"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="e.g. https://github.com/your-username"
                        className="w-full bg-black border border-brutal-border px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div className="space-y-3 pt-2">
                    <label className="block font-mono text-xs text-white uppercase tracking-wider">
                      SELECT_PRIMARY_INTEREST_DOMAIN <span className="text-neon">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tracks.map((t) => (
                        <label
                          key={t.id}
                          className={`p-3.5 border cursor-pointer font-mono text-xs transition-all flex items-start gap-3 ${
                            formData.track === t.id
                              ? 'border-neon bg-neon-dim text-white'
                              : 'border-brutal-border bg-black text-neutral-400 hover:border-neutral-600'
                          }`}
                        >
                          <input
                            type="radio"
                            name="track"
                            value={t.id}
                            checked={formData.track === t.id}
                            onChange={handleChange}
                            className="mt-0.5 text-neon focus:ring-0 accent-neon"
                          />
                          <span>{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Proof of Work */}
                  <div className="space-y-2 pt-2">
                    <label className="block font-mono text-xs text-white uppercase tracking-wider">
                      PRACTICAL_LEARNING_EXPERIENCE // WHAT HAVE YOU WORKED ON?
                    </label>
                    <textarea
                      name="proofOfWork"
                      rows={4}
                      value={formData.proofOfWork}
                      onChange={handleChange}
                      placeholder="Share a tool you built, a coding challenge you tackled, or an emerging technology you are passionate about exploring in Code2Chill."
                      className="w-full bg-black border border-brutal-border p-4 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Discord Handle */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs text-neutral-400 uppercase tracking-wider">
                      DISCORD_HANDLE / CONTACT
                    </label>
                    <input
                      type="text"
                      name="discordTag"
                      value={formData.discordTag}
                      onChange={handleChange}
                      placeholder="e.g. aryan_dev#0001"
                      className="w-full bg-black border border-brutal-border px-4 py-3 font-mono text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-6 border-t border-brutal-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="font-mono text-[11px] text-neutral-400">
                      * 3 SLOTS CURRENTLY REMAINING. NO SPAM.
                    </div>

                    <Magnetic strength={0.25} className="w-full sm:w-auto">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full sm:w-auto px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          loading
                            ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed border border-neutral-700'
                            : 'bg-neon text-black hover:bg-white shadow-neon-md'
                        }`}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-neon" />
                            <span>COMPUTING_HASH_1000MS...</span>
                          </>
                        ) : (
                          <>
                            <span>&gt; TRANSMIT_APPLICATION</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Success Confirmation */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-card border-2 border-neon p-6 sm:p-10 font-mono relative shadow-neon-md"
              >
                <div className="flex items-center gap-3 text-neon mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-bold text-sm tracking-widest uppercase">
                    APPLICATION TRANSMITTED // STATUS 200 OK
                  </span>
                </div>

                <h2 className="text-3xl font-display font-extrabold text-white mb-3">
                  REGISTRATION BUFFERED, {formData.fullName.toUpperCase()}.
                </h2>

                <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6">
                  Your node request has been appended to the C2C contributor queue under Club Leader <strong className="text-white">Lakshay Kalra</strong> and our Technical Heads. Welcome to the Chitkara technical community.
                </p>

                {/* Receipt Card */}
                <div className="bg-black border border-brutal-border p-5 space-y-2.5 text-xs text-neutral-300 mb-8">
                  <div className="flex items-center justify-between pb-2 border-b border-brutal-border text-neutral-400">
                    <span>// ENROLLMENT_RECEIPT</span>
                    <button
                      onClick={handleCopyReceipt}
                      className="flex items-center gap-1 text-neon hover:underline"
                    >
                      {copiedHash ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedHash ? 'COPIED' : 'COPY_HASH'}</span>
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">TX_HASH:</span>
                    <span className="text-neon font-mono">{receiptHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">DOMAIN_TRACK:</span>
                    <span className="text-white">{formData.track}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">STUDENT_EMAIL:</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">CAMPUS_NODE:</span>
                    <span className="text-white">CHITKARA UNIVERSITY</span>
                  </div>
                </div>

                {/* Next actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <Magnetic strength={0.25}>
                    <a
                      href="https://www.instagram.com/code2chill"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-neon text-black font-bold uppercase text-xs hover:bg-white transition-colors flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>FOLLOW @CODE2CHILL</span>
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <a
                      href="https://www.linkedin.com/company/code2chill/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-brutal-border hover:border-neon text-neutral-300 hover:text-white uppercase text-xs transition-colors flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4 text-neon" />
                      <span>CONNECT ON LINKEDIN</span>
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 border border-brutal-border hover:border-white text-neutral-400 hover:text-white uppercase text-xs transition-colors flex items-center gap-2"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>SUBMIT_ANOTHER</span>
                    </button>
                  </Magnetic>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </PageTransition>
  );
}
