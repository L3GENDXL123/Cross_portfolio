import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, Shield, Check, Copy, Clock, Send } from 'lucide-react';

interface ContactProps {
  isDarkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'startup', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "2348028713828";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const myEmail = "johnsonxcel419@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! My name is ${form.name}. I'm interested in a ${form.projectType} website at Cross_web. Details: ${form.details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left column: Glowing Prompt Card */}
        <div className="space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 tracking-[0.3em] uppercase block font-bold">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
              LET'S BUILD <br />
              SOMETHING ALIVE.
            </h2>
            <p className="text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Have a startup concept or design blueprint you want deployed immediately? Connect with me directly on WhatsApp for real-time collaboration. 
            </p>
          </div>

          {/* Social/WA & Email highlight row */}
          <div className="space-y-4">
            
            {/* Glowing Email copy action */}
            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/20 hover:shadow-md dark:hover:shadow-none transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 dark:text-slate-400">Secure Direct Email</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">{myEmail}</p>
                </div>
              </div>
              <button 
                onClick={copyEmailToClipboard}
                className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all"
                title="Copy email path"
              >
                {copied ? <Check className="w-4 h-4 text-green-500 dark:text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct WhatsApp button line */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 hover:bg-green-100/60 dark:hover:bg-green-500/20 transition-all hover:shadow-md dark:hover:shadow-none group"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">
                WA
              </div>
              <div>
                <h4 className="text-xs text-slate-500 dark:text-slate-400">Response Speed</h4>
                <p className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> 
                  UNDER 1 HOUR Response
                </p>
              </div>
            </a>

          </div>

          <p className="text-xs text-slate-500 max-w-sm">
            Cross_web Systems respect user privacy constraints. Your requirements and workspace assets are protected securely.
          </p>

        </div>

        {/* Right column: Form / Direct message portal with glass style assets */}
        <div className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden shadow-md dark:shadow-none">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none" />
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">SYSTEM STREAMING</h3>
              <p className="text-slate-650 dark:text-slate-400 text-xs">
                Redirecting you secure connection channels to WhatsApp. Feel free to click below to reset the panel stream.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 underline hover:text-blue-500"
              >
                Send another message draft
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                INITIATE PROJECT SECURE CHANNEL
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="e.g. Satoshi"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Secure Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="security@protocol.io"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">System Target Capacity</label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({...form, projectType: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs transition-all select-dark"
                >
                  <option value="startup" className="bg-[#f8fafc] dark:bg-[#0c0c0e] text-slate-900 dark:text-white">Startup Launchpad (3-4 Pages)</option>
                  <option value="personal" className="bg-[#f8fafc] dark:bg-[#0c0c0e] text-slate-900 dark:text-white">Interactive Portfolio (2-3 Pages)</option>
                  <option value="portfolio" className="bg-[#f8fafc] dark:bg-[#0c0c0e] text-slate-900 dark:text-white">Product landing (1-2 Pages)</option>
                  <option value="other" className="bg-[#f8fafc] dark:bg-[#0c0c0e] text-slate-900 dark:text-white">Specialist Build (5 Pages Max)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Requirement Details</label>
                <textarea
                  required
                  rows={3}
                  value={form.details}
                  onChange={(e) => setForm({...form, details: e.target.value})}
                  placeholder="Outline the vision nodes briefly..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Stream Message via WhatsApp
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default Contact;
