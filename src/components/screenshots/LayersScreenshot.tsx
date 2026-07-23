import React, { useState } from 'react';
import { Layers, Eye, Plus, Copy, ChevronDown, Check } from 'lucide-react';

export const LayersScreenshot: React.FC = () => {
  const [opacity, setOpacity] = useState(100);
  const [blendMode, setBlendMode] = useState('NORMAL');
  const [activeLayer, setActiveLayer] = useState('LAYER 1');
  const [layers, setLayers] = useState([
    { id: '1', name: 'LAYER 1', visible: true, locked: false, blend: 'NORMAL' },
    { id: '2', name: 'BACKGROUND', visible: true, locked: true, blend: 'NORMAL' }
  ]);

  const blendOptions = ['NORMAL', 'MULTIPLY', 'SCREEN', 'OVERLAY', 'DARKEN', 'LIGHTEN'];

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
        {/* Left Side: Drawing Canvas */}
        <div className="md:col-span-7 bg-slate-100 p-4 relative flex flex-col justify-between">
          <div className="w-full h-full bg-white rounded-xl border border-slate-200 shadow-inner flex items-center justify-center p-4 relative overflow-hidden min-h-[220px]">
            {/* Sample vector artwork with multiple blend mode layers */}
            <svg className="w-48 h-48" viewBox="0 0 200 200">
              {/* Red outline circle */}
              <circle cx="85" cy="100" r="42" fill="none" stroke="#f87171" strokeWidth="3" opacity="0.8" />
              {/* Dark gray outline circle */}
              <circle cx="115" cy="100" r="42" fill="none" stroke="#334155" strokeWidth="3.5" />
              {/* Light blue outline circle */}
              <circle cx="135" cy="110" r="38" fill="none" stroke="#93c5fd" strokeWidth="2.5" opacity="0.7" />
            </svg>

            {/* Floating info badge */}
            <div className="absolute bottom-2 left-2 bg-slate-50/90 border border-slate-200 rounded px-2 py-0.5 text-[9px] font-mono text-slate-500">
              ZOOM: 100% | PAN: 0,0
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>KEYFRAME STUDIO • LAYER VIEW</span>
            <span>STACK: TOP TO BOTTOM</span>
          </div>
        </div>

        {/* Right Side: Layers Drawer (Matching Image 8) */}
        <div className="md:col-span-5 bg-white border-l border-slate-200 p-4 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center space-x-2 font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>LAYERS MANAGER</span>
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-1 rounded hover:bg-slate-100 text-slate-500"><Plus className="w-3.5 h-3.5" /></button>
              </div>
            </div>

            {/* Layer Item Card (Matching Image 8 layout) */}
            <div className="mt-3 bg-slate-50 border-2 border-indigo-500/80 rounded-xl p-3 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded border border-slate-300 bg-white flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" className="fill-none stroke-slate-800" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-[11px]">LAYER 1</div>
                    <div className="flex items-center space-x-1 mt-0.5">
                      <span className="text-[9px] font-mono text-slate-400">NORMAL</span>
                      <span className="bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.2 rounded text-[8px] uppercase">ACTIVE</span>
                    </div>
                  </div>
                </div>
                <Eye className="w-4 h-4 text-slate-600 cursor-pointer" />
              </div>

              {/* Opacity Control */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-slate-500 uppercase">OPACITY</span>
                  <span className="font-mono font-bold text-slate-800">{opacity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={opacity} 
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-slate-900 h-1.5 bg-slate-200 rounded cursor-pointer"
                />
              </div>

              {/* Blend Mode Dropdown */}
              <div className="space-y-1">
                <label className="font-bold text-slate-500 uppercase text-[9px] block">BLEND MODE</label>
                <div className="relative">
                  <select 
                    value={blendMode}
                    onChange={(e) => setBlendMode(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 font-mono text-slate-800 font-bold text-[11px] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    {blendOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-xl text-[11px] uppercase tracking-wider shadow transition-colors flex items-center justify-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>NEW LAYER</span>
            </button>
            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5">
              <Copy className="w-3.5 h-3.5" />
              <span>PASTE LAYER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
