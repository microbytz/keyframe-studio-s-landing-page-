import React from 'react';
import { TECH_SPECS } from '../data/featureData';
import { Cpu, Smartphone, ShieldCheck, Download, Code2, Layers, Check } from 'lucide-react';

export const TechStackSpec: React.FC = () => {
  return (
    <section id="specs" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Architecture & Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Cross-Platform Engineering Specifications
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Keyframe Studio is built with modern web technologies and compiled natively for mobile performance with Capacitor.
          </p>
        </div>

        {/* Tech Table Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TECH_SPECS.map((spec, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-center text-xs font-mono text-indigo-400 uppercase">
                <span>{spec.category}</span>
                <Code2 className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-white">{spec.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{spec.details}</p>
            </div>
          ))}
        </div>

        {/* Download APK Box */}
        <div id="download" className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/60 via-slate-900 to-indigo-950 border border-indigo-500/30 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-amber-400 font-mono text-xs font-bold">
              <Smartphone className="w-4 h-4" />
              <span>Android Native Package Ready</span>
            </div>
            <h3 className="text-2xl font-black text-white">Download Keyframe Studio APK</h3>
            <p className="text-slate-300 text-xs font-mono">
              Package ID: <code className="bg-slate-950 px-2 py-0.5 rounded text-indigo-300">xyz.microbytz.keyframestudio</code>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Starting download for Keyframe Studio APK (xyz.microbytz.keyframestudio)...'); }}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-2xl shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download APK (Direct)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
