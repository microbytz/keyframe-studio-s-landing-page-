import React, { useState } from 'react';
import { Maximize2, Move, RotateCw, Grid, Shield, RefreshCw } from 'lucide-react';

export const CanvasTransformScreenshot: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [gridSnap, setGridSnap] = useState(true);

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-xl overflow-hidden font-sans text-xs select-none transition-all duration-300 hover:shadow-2xl">
      {/* Header Bar */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Maximize2 className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-bold uppercase tracking-wider text-slate-700 text-[10px]">CANVAS MANIPULATION & TRANSFORM ENGINE</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px]">
          <span className="bg-slate-100 border px-2 py-0.5 rounded font-bold text-slate-700">ROTATE: {rotation}°</span>
          <span className="bg-slate-100 border px-2 py-0.5 rounded font-bold text-slate-700">SCALE: {scale.toFixed(1)}x</span>
        </div>
      </div>

      {/* Main Canvas Workspace with Transform Controls */}
      <div className="bg-slate-100 p-4 relative flex items-center justify-center min-h-[250px]">
        <div className="w-full max-w-md h-52 bg-white rounded-xl border border-slate-200 shadow-inner relative flex items-center justify-center overflow-hidden">
          {/* Subtle Grid Overlay */}
          {gridSnap && (
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]" />
          )}

          {/* Transformed Vector Bounding Box */}
          <div 
            className="border-2 border-indigo-500 border-dashed p-6 relative transition-transform duration-200 cursor-grab active:cursor-grabbing"
            style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
          >
            {/* Vector Shapes inside */}
            <svg className="w-24 h-24 text-slate-800" viewBox="0 0 100 100">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" rx="8" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
            </svg>

            {/* Corner Transform Handles */}
            <div className="w-2.5 h-2.5 bg-indigo-600 border border-white absolute -top-1.5 -left-1.5 rounded-sm" />
            <div className="w-2.5 h-2.5 bg-indigo-600 border border-white absolute -top-1.5 -right-1.5 rounded-sm" />
            <div className="w-2.5 h-2.5 bg-indigo-600 border border-white absolute -bottom-1.5 -left-1.5 rounded-sm" />
            <div className="w-2.5 h-2.5 bg-indigo-600 border border-white absolute -bottom-1.5 -right-1.5 rounded-sm" />
            <div className="w-3 h-3 bg-indigo-600 border border-white absolute -top-6 left-1/2 -translate-x-1/2 rounded-full cursor-pointer flex items-center justify-center">
              <div className="w-0.5 h-3 bg-indigo-600 absolute bottom-0 -mb-3" />
            </div>
          </div>

          {/* Floating Canvas Bar (Matching Image 5) */}
          <div className="absolute bottom-2 left-2 bg-white/95 border border-slate-200/90 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-600 shadow-sm space-x-2 flex items-center">
            <span className="font-bold">ZOOM: {(scale * 100).toFixed(0)}%</span>
            <span className="text-slate-300">|</span>
            <span>PAN: 0, 0</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400">Space+Drag / Wheel</span>
          </div>

          <button 
            onClick={() => { setScale(1); setRotation(0); }}
            className="absolute bottom-2 right-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-[9px] font-bold text-slate-700 shadow-sm flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3 text-slate-400" />
            RESET VIEW
          </button>
        </div>
      </div>

      {/* Control Tools Bar */}
      <div className="bg-slate-50 p-2.5 border-t border-slate-200 flex items-center justify-between text-[10px]">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setRotation((r) => (r + 15) % 360)}
            className="px-2.5 py-1 rounded bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1"
          >
            <RotateCw className="w-3 h-3 text-indigo-500" />
            Rotate +15°
          </button>
          <button 
            onClick={() => setScale((s) => (s >= 1.5 ? 0.8 : s + 0.2))}
            className="px-2.5 py-1 rounded bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1"
          >
            <Maximize2 className="w-3 h-3 text-indigo-500" />
            Scale Up
          </button>
        </div>

        <button 
          onClick={() => setGridSnap(!gridSnap)}
          className={`px-2.5 py-1 rounded border font-bold flex items-center gap-1 transition-colors ${
            gridSnap ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'
          }`}
        >
          <Grid className="w-3 h-3" />
          Grid Snap {gridSnap ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};
