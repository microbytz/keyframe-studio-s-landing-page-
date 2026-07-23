import React, { useState, useEffect } from 'react';
import { Film, Download, Play, Menu, X, Smartphone, Sparkles, ChevronRight, ShieldCheck, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenShortcuts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenShortcuts }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Package Badge */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Film className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-black tracking-tight text-white font-mono">
                Keyframe<span className="text-indigo-400">Studio</span>
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full">
                Capacitor Native
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              xyz.microbytz.keyframestudio
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#rigging" className="hover:text-white transition-colors">Rigging & IK</a>
          <a href="#audio" className="hover:text-white transition-colors">Audio Lip-Sync</a>
          <button onClick={onOpenShortcuts} className="hover:text-white transition-colors text-slate-300">
            Shortcuts
          </button>
          <a href="#specs" className="hover:text-white transition-colors">Tech Specs</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://discord.gg/uFVrcsuZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-indigo-950/80 hover:bg-indigo-900/90 border border-indigo-500/40 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>Our Discord</span>
          </a>

          <a
            href="https://doc-hosting.flycricket.io/keyframe-studio-privacy-policy/859c5224-4d5b-42cf-802d-ad55e8e3d95e/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Privacy Policy</span>
          </a>

          <a 
            href="https://keyframestudio.microbytz.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Play className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
            <span>Launch Studio</span>
          </a>

          <a
            href="#download"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-1.5 hover:scale-105"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-slate-300 text-sm">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-1">Features</a>
            <a href="#rigging" onClick={() => setMobileMenuOpen(false)} className="py-1">Skeletal Rigging</a>
            <a href="#audio" onClick={() => setMobileMenuOpen(false)} className="py-1">Audio Sync</a>
            <button 
              onClick={() => { onOpenShortcuts(); setMobileMenuOpen(false); }} 
              className="py-1 text-left"
            >
              Shortcuts Guide
            </button>
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="py-1">Tech Specs</a>
            <a 
              href="https://doc-hosting.flycricket.io/keyframe-studio-privacy-policy/859c5224-4d5b-42cf-802d-ad55e8e3d95e/privacy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-indigo-300 font-semibold flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>View Privacy Policy</span>
            </a>
            <a 
              href="https://discord.gg/uFVrcsuZ6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-indigo-300 font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>Our Discord</span>
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
            <a 
              href="https://keyframestudio.microbytz.xyz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
              Launch Live Studio
            </a>
            <a 
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Android APK (xyz.microbytz.keyframestudio)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
