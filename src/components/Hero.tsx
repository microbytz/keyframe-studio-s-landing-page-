import React from 'react';
import { Film, Download, Play, Sparkles, Smartphone, Layers, Mic, Bone, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenShortcuts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenShortcuts }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Next.js 15 • Capacitor Android Native • React 19</span>
            <span className="bg-indigo-500/20 px-2 py-0.5 rounded-full text-[10px] font-mono text-indigo-200">v1.5</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Animate Frame-by-Frame with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-200 to-amber-300">
              Keyframe Studio
            </span>
          </h1>

          {/* App Description Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            A 2D frame-by-frame animation studio and digital illustration application built with <span className="text-indigo-300 font-semibold">Next.js 15</span>, <span className="text-indigo-300 font-semibold">TypeScript</span>, <span className="text-indigo-300 font-semibold">Tailwind CSS</span>, and <span className="text-indigo-300 font-semibold">Capacitor</span> for cross-platform deployment on Web & Native Android (<code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300 font-mono text-xs">xyz.microbytz.keyframestudio</code>).
          </p>

          {/* Key Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-medium text-slate-300">
            <span className="bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              🎨 Stylus Pressure & Stabilizer
            </span>
            <span className="bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              🦴 Skeletal Rigging & Mesh Deformation
            </span>
            <span className="bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              🎙️ Audio Timeline & Lip-Sync
            </span>
            <span className="bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              ⏱️ Advanced Onion Skinning
            </span>
            <span className="bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              💾 50-State Local Auto-Save
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <Smartphone className="w-5 h-5" />
              <span>Download Android APK</span>
            </a>

            <a
              href="https://keyframestudio.microbytz.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold text-sm transition-all flex items-center justify-center gap-2.5 hover:border-slate-500 shadow-lg"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Launch Live Interactive Studio</span>
            </a>

            <button
              onClick={onOpenShortcuts}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-transparent hover:bg-slate-900/50 text-slate-300 font-semibold text-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>View Shortcuts Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Hero Interactive Showcase Banner */}
        <div className="mt-16 max-w-5xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-indigo-500/20 via-slate-800/40 to-slate-950 border border-slate-800 shadow-2xl">
          <div className="bg-slate-950 rounded-[22px] overflow-hidden p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-slate-400 text-[11px] ml-2">Keyframe Studio Workspace • Light & Dark Themes</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 font-mono text-[11px]">
                <span className="text-emerald-400 font-bold">12 FPS</span>
                <span>•</span>
                <span>1080p Canvas</span>
              </div>
            </div>

            {/* Quick Hero Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  🎨
                </div>
                <h3 className="font-bold text-white text-sm">20+ Brushes & Stabilizer</h3>
                <p className="text-slate-400 text-xs">Pen, Watercolor, Spray Can, Airbrush & 0–100% line smoothing for zero jitter.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  🦴
                </div>
                <h3 className="font-bold text-white text-sm">IK/FK Skeletal Mesh</h3>
                <p className="text-slate-400 text-xs">Interactive parent-child bone chains with grid mesh warping for smooth poses.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  🎙️
                </div>
                <h3 className="font-bold text-white text-sm">Audio Lip-Sync & Waveform</h3>
                <p className="text-slate-400 text-xs">Direct microphone recording, live audio scrubbing, and frame-synced waveforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
