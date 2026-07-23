import React from 'react';
import { Film, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onOpenShortcuts: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShortcuts }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm font-mono">Keyframe Studio</span>
              <p className="text-[11px] text-slate-500 font-mono">xyz.microbytz.keyframestudio</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#rigging" className="hover:text-white transition-colors">Skeletal Rigging</a>
            <a href="#audio" className="hover:text-white transition-colors">Audio Sync</a>
            <button onClick={onOpenShortcuts} className="hover:text-white transition-colors">
              Shortcuts Guide
            </button>
            <a href="#specs" className="hover:text-white transition-colors">Tech Specs</a>
            <a 
              href="https://doc-hosting.flycricket.io/keyframe-studio-privacy-policy/859c5224-4d5b-42cf-802d-ad55e8e3d95e/privacy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white text-indigo-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://discord.gg/uFVrcsuZ6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white text-indigo-300 transition-colors"
            >
              Our Discord
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to top</span>
          </button>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Keyframe Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 15, TypeScript, Tailwind CSS & Capacitor
          </p>
        </div>
      </div>
    </footer>
  );
};
