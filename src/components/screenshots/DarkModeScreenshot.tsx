import React, { useState } from 'react';
import { Moon, Sun, Smartphone, Monitor, Layers, Play, Settings } from 'lucide-react';

export const DarkModeScreenshot: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <div className={`w-full rounded-2xl border shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl ${
      isDarkTheme ? 'bg-[#0b0f19] border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-800'
    }`}>
      {/* Top Studio Dark Header */}
      <div className={`px-3 py-1.5 border-b flex items-center justify-between text-[11px] ${
        isDarkTheme ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded bg-indigo-500" />
          <span className={isDarkTheme ? 'text-slate-400 font-mono' : 'text-slate-600 font-mono'}>4px</span>
          <div className="h-2 w-24 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 w-1/2" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
            📌 STROKES : 13
          </span>
          <button className="text-slate-400 hover:text-white font-semibold uppercase text-[10px] px-1">
            RESET
          </button>
          <div className="w-px h-3 bg-slate-700 my-auto" />
          <button 
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="p-1 rounded hover:bg-slate-800 text-amber-400 text-sm"
          >
            {isDarkTheme ? '🌙' : '☀️'}
          </button>
          <Layers className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
          <Settings className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
        </div>
      </div>

      {/* Main Studio Canvas Viewport in Dark Theme */}
      <div className={`p-4 relative flex items-center justify-center min-h-[230px] ${
        isDarkTheme ? 'bg-[#0b0f19]' : 'bg-slate-100'
      }`}>
        <div className="w-full max-w-md h-48 bg-white rounded-xl shadow-2xl border border-slate-300 relative flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 320 180">
            {/* Coral Circle */}
            <circle cx="120" cy="90" r="38" fill="none" stroke="#f87171" strokeWidth="2.5" opacity="0.8" />
            {/* Dark Gray Circle */}
            <circle cx="160" cy="90" r="38" fill="none" stroke="#1e293b" strokeWidth="3.5" />
            {/* Light Blue Circle */}
            <circle cx="200" cy="90" r="38" fill="none" stroke="#93c5fd" strokeWidth="2.5" opacity="0.8" />
          </svg>

          {/* Canvas Floating Overlay Controls */}
          <div className="absolute bottom-2 left-2 bg-slate-900/90 text-white border border-slate-800 rounded-lg px-2.5 py-1 text-[9px] font-mono shadow-md space-x-2">
            <span>ZOOM: 100%</span>
            <span className="text-slate-600">|</span>
            <span>PAN: 0, 0</span>
          </div>

          <button className="absolute bottom-2 right-2 bg-slate-900 text-white border border-slate-800 rounded-lg px-2.5 py-1 text-[9px] font-bold shadow-md">
            RESET VIEW
          </button>
        </div>
      </div>

      {/* Dark Timeline Dock (Matching Image 9) */}
      <div className={`p-3 border-t space-y-2 ${
        isDarkTheme ? 'bg-[#111827] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold uppercase tracking-wider text-slate-400">TIMELINE • STUDIO DARK</span>
          <div className="flex items-center space-x-2 font-mono">
            <span className="text-emerald-400 font-bold">● CAPACITOR ANDROID NATIVE</span>
            <span>⏱ 12 FPS</span>
          </div>
        </div>

        {/* Frame Cards Strip in Dark Theme */}
        <div className="flex space-x-2 overflow-x-auto pb-1">
          {[3, 4, 5, 6, 7].map((f) => (
            <div
              key={f}
              className={`flex-none w-16 h-14 rounded-lg p-1 flex flex-col justify-between border-2 transition-all ${
                f === 6 
                  ? 'bg-white text-slate-900 border-indigo-500 shadow-lg' 
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="w-full h-7 bg-slate-900/20 rounded flex items-center justify-center">
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${f === 6 ? 'border-slate-900' : 'border-slate-400'}`} />
              </div>
              <div className="text-right font-mono text-[9px] font-bold">{f}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`px-3 py-1 border-t flex justify-between text-[10px] font-mono ${
        isDarkTheme ? 'bg-[#0b0f19] border-slate-800 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-400'
      }`}>
        <span>xyz.microbytz.keyframestudio</span>
        <span>ID: J1G2OQ80 • 14 F @ 12 FPS</span>
      </div>
    </div>
  );
};
